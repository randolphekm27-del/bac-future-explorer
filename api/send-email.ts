import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

interface EmailRequest {
  type: 'newsletter' | 'company' | 'trainer' | 'contact';
  email: string;
  data: any;
}

const ADMIN_EMAIL = 'randolphekm27@gmail.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: "Méthode non autorisée" });
  }

  const { type, email, data }: EmailRequest = req.body;

  if (!email || !email.trim()) {
    return res.status(400).json({ success: false, error: "Email requis" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ success: false, error: "Format email invalide" });
  }

  if (!type) {
    return res.status(400).json({ success: false, error: "Type de demande requis" });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return res.status(500).json({
      success: false,
      error: "Configuration email manquante"
    });
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    let emailData: any = {};

    switch (type) {
      case 'newsletter':
        // Envoyer le guide à l'utilisateur
        const userEmailData = {
          from: 'Après mon Bac <onboarding@resend.dev>',
          to: email,
          subject: '🎓 Votre Guide d\'Orientation Gratuit - Après mon Bac',
          html: `
            <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
              <header style="background: linear-gradient(135deg, #3B82F6, #F97316); padding: 20px; text-align: center;">
                <h1 style="color: white; margin: 0;">Après mon Bac</h1>
                <p style="color: white; margin: 10px 0 0 0;">Votre guide d'orientation personnalisé</p>
              </header>
              
              <main style="padding: 30px 20px;">
                <h2 style="color: #1F2937;">🎉 Félicitations ! Voici votre guide gratuit</h2>
                
                <p>Bonjour,</p>
                
                <p>Merci de votre confiance ! Nous sommes ravis de vous accompagner dans votre orientation post-bac.</p>
                
                <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #3B82F6; margin-top: 0;">📚 Votre Guide d'Orientation contient :</h3>
                  <ul style="color: #374151;">
                    <li>✅ Guide complet des universités du Bénin</li>
                    <li>✅ Fiches détaillées de toutes les filières</li>
                    <li>✅ Conseils pour réussir vos candidatures</li>
                    <li>✅ Liste des stages disponibles</li>
                    <li>✅ Calendrier des concours 2025</li>
                  </ul>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="https://drive.google.com/file/d/1-R-g3n6vtr4nsBNV9_IUA6mC3Iio5CLW/view?usp=drivesdk" 
                     style="display: inline-block; background: linear-gradient(135deg, #3B82F6, #F97316); color: white; padding: 18px 35px; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3); transition: transform 0.2s ease;">
                    🎓 Télécharger votre guide complet
                  </a>
                </div>
                
                <div style="text-align: center; margin: 20px 0;">
                  <p style="color: #6B7280; font-size: 14px;">💾 Format PDF • 📄 Guide complet • 🆓 100% Gratuit</p>
                </div>
                
                <div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 15px; margin: 20px 0;">
                  <p style="margin: 0; color: #1E40AF;"><strong>💡 Conseil bonus :</strong> Utilisez notre test d'orientation gratuit sur la plateforme pour des recommandations personnalisées !</p>
                </div>
                
                <p>À bientôt sur <a href="https://apresmonbac.bj" style="color: #3B82F6;">apresmonbac.bj</a> !</p>
              </main>
              
              <footer style="background: #1F2937; color: white; padding: 20px; text-align: center;">
                <p style="margin: 0;">Après mon Bac - Votre avenir commence ici</p>
                <p style="margin: 10px 0 0 0; font-size: 12px; color: #9CA3AF;">
                  Cotonou, Bénin | contact@apresmonbac.bj
                </p>
              </footer>
            </div>
          `
        };

        // Notification à l'admin
        const adminNotificationNewsletter = {
          from: 'Après mon Bac <onboarding@resend.dev>',
          to: ADMIN_EMAIL,
          subject: '📧 Nouvelle inscription newsletter - Après mon Bac',
          html: `
            <div style="max-width: 500px; margin: 0 auto; font-family: Arial, sans-serif;">
              <h2 style="color: #3B82F6;">📧 Nouvelle inscription newsletter</h2>
              <div style="background: #F9FAFB; padding: 15px; border-radius: 8px;">
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}</p>
                <p><strong>Source :</strong> Popup newsletter</p>
              </div>
            </div>
          `
        };

        // Envoyer le guide à l'utilisateur
        await resend.emails.send(userEmailData);

        emailData = adminNotificationNewsletter;
        break;

      case 'company':
        // Validation spécifique entreprise
        if (!data.companyName || !data.sector || !data.contactPerson || !data.message) {
          return res.status(400).json({ success: false, error: 'Informations entreprise incomplètes' });
        }
        
        emailData = {
          from: 'Après mon Bac <onboarding@resend.dev>',
          to: ADMIN_EMAIL,
          subject: '🏢 Nouvelle demande entreprise - Après mon Bac',
          html: `
            <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
              <h2 style="color: #3B82F6;">🏢 Nouvelle demande de partenariat entreprise</h2>
              
              <div style="background: #F9FAFB; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Informations de l'entreprise :</h3>
                <p><strong>Entreprise :</strong> ${data.companyName}</p>
                <p><strong>Secteur :</strong> ${data.sector}</p>
                <p><strong>Contact :</strong> ${data.contactPerson}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Téléphone :</strong> ${data.phone || 'Non renseigné'}</p>
              </div>
              
              <div style="background: #EFF6FF; padding: 20px; border-radius: 8px;">
                <h3 style="margin-top: 0; color: #1E40AF;">Message :</h3>
                <p style="white-space: pre-wrap;">${data.message}</p>
              </div>
              
              <div style="margin: 20px 0; padding: 15px; background: #F0FDF4; border-radius: 8px;">
                <p style="margin: 0; color: #166534;"><strong>⏰ Reçu le :</strong> ${new Date().toLocaleString('fr-FR')}</p>
              </div>
            </div>
          `
        };
        break;

      case 'trainer':
        // Validation spécifique formateur
        if (!data.companyName || !data.sector || !data.contactPerson || !data.message) {
          return res.status(400).json({ success: false, error: 'Informations formateur incomplètes' });
        }
        
        emailData = {
          from: 'Après mon Bac <onboarding@resend.dev>',
          to: ADMIN_EMAIL,
          subject: '👨‍🏫 Nouvelle candidature formateur - Après mon Bac',
          html: `
            <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
              <h2 style="color: #F97316;">👨‍🏫 Nouvelle candidature de formateur</h2>
              
              <div style="background: #FFF7ED; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Informations du formateur :</h3>
                <p><strong>Organisation :</strong> ${data.companyName}</p>
                <p><strong>Domaine :</strong> ${data.sector}</p>
                <p><strong>Contact :</strong> ${data.contactPerson}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Téléphone :</strong> ${data.phone || 'Non renseigné'}</p>
                <p><strong>Expérience :</strong> ${data.experience || 'Non renseigné'}</p>
              </div>
              
              <div style="background: #EFF6FF; padding: 20px; border-radius: 8px;">
                <h3 style="margin-top: 0; color: #1E40AF;">Expertise et formations proposées :</h3>
                <p style="white-space: pre-wrap;">${data.message}</p>
              </div>
              
              <div style="margin: 20px 0; padding: 15px; background: #F0FDF4; border-radius: 8px;">
                <p style="margin: 0; color: #166534;"><strong>⏰ Reçu le :</strong> ${new Date().toLocaleString('fr-FR')}</p>
              </div>
            </div>
          `
        };
        break;

      case 'contact':
        // Validation spécifique contact
        if (!data.message) {
          return res.status(400).json({ success: false, error: 'Message requis' });
        }
        
        emailData = {
          from: 'Après mon Bac <onboarding@resend.dev>',
          to: ADMIN_EMAIL,
          subject: '💬 Nouveau message de contact - Après mon Bac',
          html: `
            <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
              <h2 style="color: #3B82F6;">💬 Nouveau message de contact</h2>
              
              <div style="background: #F9FAFB; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Nom :</strong> ${data.name || 'Non renseigné'}</p>
                <p><strong>Sujet :</strong> ${data.subject || 'Contact général'}</p>
              </div>
              
              <div style="background: #EFF6FF; padding: 20px; border-radius: 8px;">
                <h3 style="margin-top: 0; color: #1E40AF;">Message :</h3>
                <p style="white-space: pre-wrap;">${data.message}</p>
              </div>
              
              <div style="margin: 20px 0; padding: 15px; background: #F0FDF4; border-radius: 8px;">
                <p style="margin: 0; color: #166534;"><strong>⏰ Reçu le :</strong> ${new Date().toLocaleString('fr-FR')}</p>
              </div>
            </div>
          `
        };
        break;

      default:
        return res.status(400).json({ success: false, error: 'Type de demande invalide' });
    }

    // Envoyer l'email
    const result = await resend.emails.send(emailData);

    return res.status(200).json({ 
      success: true, 
      message: "Email envoyé avec succès",
      id: result.data?.id 
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message || "Erreur serveur" });
  }
}