# Guide de Déploiement - Après mon Bac

## 🚀 Déploiement sur différentes plateformes

### 📦 Netlify (Recommandé)

1. **Build automatique**
   ```bash
   npm run build:netlify
   ```

2. **Configuration**
   - Le fichier `_redirects` est automatiquement inclus
   - Drag & drop du dossier `dist/` sur Netlify
   - Ou connecter votre repo GitHub

3. **Variables d'environnement**
   ```
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   RESEND_API_KEY=your-resend-api-key
   ```

### ⚡ Vercel

1. **Build**
   ```bash
   npm run build:vercel
   ```

2. **Configuration**
   - Le fichier `vercel.json` gère automatiquement les routes
   - Connecter votre repo GitHub à Vercel
   - Build automatique à chaque push

3. **Variables d'environnement**
   - Ajouter dans le dashboard Vercel
   - Même variables que Netlify

### 🌐 Apache (Serveur traditionnel)

1. **Build**
   ```bash
   npm run build:apache
   ```

2. **Upload**
   - Uploader le contenu de `dist/` vers votre serveur
   - Le fichier `.htaccess` est inclus automatiquement

3. **Vérifications**
   - Mod_rewrite activé
   - Permissions correctes sur .htaccess

### 🔧 Nginx

1. **Build standard**
   ```bash
   npm run build
   ```

2. **Configuration serveur**
   - Copier la configuration de `nginx.conf`
   - Adapter le `server_name` et `root`
   - Recharger Nginx

3. **Upload**
   - Uploader le contenu de `dist/` vers `/var/www/html`

## 🔐 Configuration des Emails

### Resend (Service d'email)

1. **Créer un compte** sur [resend.com](https://resend.com)
2. **Générer une clé API**
3. **Ajouter la variable** `RESEND_API_KEY`

### Supabase (Optionnel)

1. **Créer un projet** sur [supabase.com](https://supabase.com)
2. **Récupérer les clés** dans Settings > API
3. **Déployer les Edge Functions** (si utilisées)

## ✅ Tests de Déploiement

### Vérifications post-déploiement

1. **Navigation**
   - Tester toutes les routes
   - Refresh sur chaque page
   - Vérifier qu'aucune 404

2. **Fonctionnalités**
   - Newsletter popup
   - Formulaires de contact
   - Chat IA
   - Recherche

3. **Performance**
   - Temps de chargement
   - Images optimisées
   - Cache des assets

## 🐛 Résolution de Problèmes

### Erreur 404 au refresh
- Vérifier que le fichier de configuration est présent
- Contrôler les permissions serveur
- Tester la configuration localement

### Emails non envoyés
- Vérifier les variables d'environnement
- Contrôler les logs Supabase
- Tester avec Resend directement

### Performance lente
- Activer la compression gzip
- Optimiser les images
- Utiliser un CDN

## 📊 Monitoring

### Métriques importantes
- Temps de chargement des pages
- Taux de conversion newsletter
- Utilisation du chat IA
- Formulaires soumis

### Outils recommandés
- Google Analytics
- Vercel Analytics
- Netlify Analytics
- Supabase Dashboard