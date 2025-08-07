import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from 'resend';

interface EmailRequest {
  type: 'newsletter' | 'company' | 'trainer' | 'contact';
  email: string;
  data: any;
}

const ADMIN_EMAIL = 'randolphekm27@gmail.com';

export async function registerRoutes(app: Express): Promise<Server> {
  // Email sending route
  app.post('/api/send-email', async (req, res) => {
    try {
      const { type, email, data }: EmailRequest = req.body;

      // Validation des données
      if (!email || !email.trim()) {
        return res.status(400).json({ success: false, error: 'Email requis' });
      }
      
      // Validation format email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return res.status(400).json({ success: false, error: 'Format email invalide' });
      }
      
      if (!type) {
        return res.status(400).json({ success: false, error: 'Type de demande requis' });
      }

      // Configuration Resend
      const RESEND_API_KEY = process.env.RESEND_API_KEY;
      
      if (!RESEND_API_KEY) {
        return res.status(500).json({ 
          success: false, 
          error: 'Clé API Resend manquante. Veuillez configurer RESEND_API_KEY.' 
        });
      }

      const resend = new Resend(RESEND_API_KEY);

      let emailData: any = {};

      switch (type) {
        case 'newsletter':
          // Envoyer le guide à l'utilisateur
          const userEmailData = {
            from: 'Après mon Bac <onboarding@resend.dev>',
            to: email,
            subject: '🎓 Votre Guide d\'Orientation Gratuit - Réussissez votre choix post-bac !',
            html: `
              <!DOCTYPE html>
              <html lang="fr">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Votre Guide d'Orientation</title>
              </head>
              <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                <div style="max-width: 600px; margin: 0 auto; background-color: white; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
                  
                  <!-- Header avec gradient -->
                  <header style="background: linear-gradient(135deg, #FF6B35 0%, #F59E0B 50%, #3B82F6 100%); padding: 40px 20px; text-align: center; position: relative;">
                    <h1 style="color: white; margin: 0 0 10px 0; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                      🎓 Après mon Bac
                    </h1>
                    <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 16px; font-weight: 500;">
                      Votre avenir commence ici !
                    </p>
                  </header>
                  
                  <!-- Corps principal -->
                  <main style="padding: 40px 30px;">
                    
                    <!-- Message de bienvenue -->
                    <div style="text-align: center; margin-bottom: 35px;">
                      <h2 style="color: #1F2937; margin: 0 0 15px 0; font-size: 24px;">
                        🎉 Félicitations ! Votre guide est prêt
                      </h2>
                      <p style="color: #6B7280; margin: 0; font-size: 16px; line-height: 1.6;">
                        Merci de faire confiance à <strong>Après mon Bac</strong> pour votre orientation. 
                        Ce guide exclusif va transformer votre approche du choix post-bac !
                      </p>
                    </div>
                    
                    <!-- Bouton de téléchargement principal -->
                    <div style="text-align: center; margin: 35px 0;">
                      <a href="https://drive.google.com/file/d/1-R-g3n6vtr4nsBNV9_IUA6mC3Iio5CLW/view?usp=drivesdk" 
                         target="_blank"
                         style="background: linear-gradient(135deg, #FF6B35, #F59E0B); 
                                color: white; 
                                padding: 18px 35px; 
                                text-decoration: none; 
                                border-radius: 12px; 
                                font-weight: bold; 
                                font-size: 16px;
                                display: inline-block; 
                                box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
                                border: none;">
                        📥 TÉLÉCHARGER LE GUIDE COMPLET
                      </a>
                      <p style="margin: 15px 0 0 0; font-size: 14px; color: #6B7280;">Accès immédiat à votre guide personnalisé</p>
                    </div>
                    
                    <!-- Contenu du guide -->
                    <div style="background: linear-gradient(135deg, #F0F9FF 0%, #FEF3C7 100%); 
                                border-radius: 16px; 
                                padding: 30px; 
                                margin: 30px 0;
                                border: 1px solid #E5E7EB;">
                      <h3 style="color: #FF6B35; margin: 0 0 20px 0; font-size: 20px; text-align: center;">
                        📚 Ce que contient votre guide exclusif
                      </h3>
                      
                      <div style="display: grid; gap: 12px;">
                        <div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); display: flex; align-items: center;">
                          <span style="font-size: 20px; margin-right: 15px;">🏛️</span>
                          <div>
                            <strong style="color: #1F2937;">Guide complet des universités du Bénin</strong>
                            <p style="color: #6B7280; margin: 5px 0 0 0; font-size: 14px;">Établissements publics et privés avec détails pratiques</p>
                          </div>
                        </div>
                        
                        <div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); display: flex; align-items: center;">
                          <span style="font-size: 20px; margin-right: 15px;">📖</span>
                          <div>
                            <strong style="color: #1F2937;">Fiches détaillées des filières</strong>
                            <p style="color: #6B7280; margin: 5px 0 0 0; font-size: 14px;">Débouchés, prérequis et perspectives pour chaque domaine</p>
                          </div>
                        </div>
                        
                        <div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); display: flex; align-items: center;">
                          <span style="font-size: 20px; margin-right: 15px;">🎯</span>
                          <div>
                            <strong style="color: #1F2937;">Stratégies de candidature gagnantes</strong>
                            <p style="color: #6B7280; margin: 5px 0 0 0; font-size: 14px;">Maximisez vos chances d'admission</p>
                          </div>
                        </div>
                        
                        <div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); display: flex; align-items: center;">
                          <span style="font-size: 20px; margin-right: 15px;">💰</span>
                          <div>
                            <strong style="color: #1F2937;">Solutions de financement</strong>
                            <p style="color: #6B7280; margin: 5px 0 0 0; font-size: 14px;">Bourses, aides et astuces pour financer vos études</p>
                          </div>
                        </div>
                        
                        <div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); display: flex; align-items: center;">
                          <span style="font-size: 20px; margin-right: 15px;">📅</span>
                          <div>
                            <strong style="color: #1F2937;">Calendrier des concours 2025</strong>
                            <p style="color: #6B7280; margin: 5px 0 0 0; font-size: 14px;">Dates importantes et préparation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Conseil d'expert -->
                    <div style="background: linear-gradient(135deg, #FEF3C7, #FDE68A); 
                                border-left: 6px solid #F59E0B; 
                                border-radius: 12px;
                                padding: 25px; 
                                margin: 30px 0;">
                      <h4 style="color: #92400E; margin: 0 0 15px 0; font-size: 18px;">
                        💡 Conseil de nos experts
                      </h4>
                      <p style="color: #78350F; margin: 0; line-height: 1.6; font-style: italic;">
                        "Ce guide représente plus de 10 ans d'expérience dans l'orientation au Bénin. 
                        Prenez le temps de le lire attentivement et n'hésitez pas à prendre des notes. 
                        Votre réussite commence par une bonne préparation !"
                      </p>
                      <p style="color: #92400E; margin: 15px 0 0 0; font-weight: bold; text-align: right;">
                        - L'équipe Après mon Bac
                      </p>
                    </div>
                    
                    <!-- Prochaines étapes -->
                    <div style="background: #F8FAFC; border-radius: 16px; padding: 30px; margin: 30px 0;">
                      <h3 style="color: #3B82F6; margin: 0 0 25px 0; font-size: 20px; text-align: center;">
                        🚀 Vos prochaines étapes
                      </h3>
                      
                      <div style="display: grid; gap: 15px;">
                        <div style="display: flex; align-items: start;">
                          <div style="background: #FF6B35; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0; font-size: 14px;">1</div>
                          <div>
                            <strong style="color: #1F2937;">Passez notre test d'orientation gratuit</strong>
                            <p style="color: #6B7280; margin: 5px 0 0 0; font-size: 14px;">Obtenez des recommandations personnalisées</p>
                          </div>
                        </div>
                        
                        <div style="display: flex; align-items: start;">
                          <div style="background: #F59E0B; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0; font-size: 14px;">2</div>
                          <div>
                            <strong style="color: #1F2937;">Explorez les universités</strong>
                            <p style="color: #6B7280; margin: 5px 0 0 0; font-size: 14px;">Découvrez les établissements qui vous correspondent</p>
                          </div>
                        </div>
                        
                        <div style="display: flex; align-items: start;">
                          <div style="background: #3B82F6; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0; font-size: 14px;">3</div>
                          <div>
                            <strong style="color: #1F2937;">Préparez vos candidatures</strong>
                            <p style="color: #6B7280; margin: 5px 0 0 0; font-size: 14px;">Suivez nos conseils pour maximiser vos chances</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Support -->
                    <div style="background: linear-gradient(135deg, #DBEAFE, #E0E7FF); 
                                border-radius: 16px; 
                                padding: 25px; 
                                text-align: center;
                                margin: 30px 0;">
                      <h4 style="color: #1E40AF; margin: 0 0 15px 0; font-size: 18px;">
                        📞 Besoin d'aide personnalisée ?
                      </h4>
                      <p style="color: #1E3A8A; margin: 0 0 15px 0; line-height: 1.6;">
                        Notre équipe d'experts en orientation est disponible pour vous accompagner personnellement.
                      </p>
                      <p style="color: #1E40AF; margin: 0; font-weight: bold;">
                        Contactez-nous : contact@apresmanbac.com
                      </p>
                    </div>
                    
                  </main>
                  
                  <!-- Footer -->
                  <footer style="background: linear-gradient(135deg, #1F2937, #111827); 
                                 color: white; 
                                 padding: 30px 20px; 
                                 text-align: center;">
                    <div style="margin-bottom: 20px;">
                      <h3 style="margin: 0 0 10px 0; font-size: 18px;">Bonne réussite dans votre parcours ! 🌟</h3>
                      <p style="margin: 0; opacity: 0.9; font-size: 16px;">Nous croyons en votre potentiel</p>
                    </div>
                    
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 20px;">
                      <p style="margin: 0; font-size: 14px; opacity: 0.7;">
                        © 2024 Après mon Bac - Votre plateforme d'orientation au Bénin
                      </p>
                      <p style="margin: 10px 0 0 0; font-size: 12px; opacity: 0.5;">
                        Cotonou, Bénin
                      </p>
                    </div>
                  </footer>
                  
                </div>
              </body>
              </html>
            `
          };

          // Notification à l'admin
          const adminNotificationNewsletter = {
            from: 'Orientation <onboarding@resend.dev>',
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

          // Envoyer l'email utilisateur avec Resend SDK
          try {
            await resend.emails.send(userEmailData);
          } catch (emailError: any) {
            console.error('Erreur envoi email utilisateur:', emailError);
            // Continue même en cas d'erreur pour l'email utilisateur
          }

          emailData = adminNotificationNewsletter;
          break;

        case 'company':
          // Validation spécifique entreprise
          if (!data.companyName || !data.sector || !data.contactPerson || !data.message) {
            return res.status(400).json({ success: false, error: 'Informations entreprise incomplètes' });
          }
          
          emailData = {
            from: 'Orientation <onboarding@resend.dev>',
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
            from: 'Orientation <onboarding@resend.dev>',
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
            from: 'Orientation <onboarding@resend.dev>',
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

      // Envoyer l'email avec Resend SDK
      const result = await resend.emails.send(emailData);

      res.json({ 
        success: true, 
        message: 'Email envoyé avec succès',
        id: result.data?.id 
      });

    } catch (error: any) {
      console.error('Erreur envoi email:', error);
      res.status(500).json({ 
        success: false, 
        error: error.message || 'Erreur serveur' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
