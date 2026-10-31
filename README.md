# Little World School — Official Website

Official multilingual web portal for **Little World School**, located at Neptune Swarajya, Ambivli (West), Thane, Maharashtra.

Built with **React 19**, **TypeScript**, **Vite 8**, and **Tailwind CSS 4**, featuring trilingual support (English, मराठी, हिन्दी) and an instant WhatsApp-only admissions inquiry system.

---

## 🚀 Deployment Workflow Architecture

```
┌─────────────────────────┐      git push       ┌────────────────────────┐      webhook       ┌────────────────────────┐
│    Google AI Studio     │ ──────────────────> │         GitHub         │ ─────────────────> │         Vercel         │
│  (Development & Edits)  │                     │   (main / branches)    │                    │ (Production & Previews)│
└─────────────────────────┘                     └────────────────────────┘                    └────────────────────────┘
```

### 1. Production Deployments (`main` branch)
- Every commit pushed or merged into the **`main`** branch triggers an automatic production build and deployment to the primary live Vercel domain.

### 2. Preview Deployments (Development Branches & PRs)
- Pushing to any non-main branch (e.g., `feature/updates`, `dev`) or opening a GitHub Pull Request generates an isolated **Vercel Preview Deployment** URL with its own unique link.
- Team members can test changes in an exact production replica before merging into `main`.

---

## 🛠️ Step-by-Step Setup Guide

### Step 1: Push Code from Local / AI Studio to GitHub
If connecting for the first time:

1. Create a new repository on your GitHub account (e.g., `little-world-school`).
2. Add your GitHub remote and push the `main` branch:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/little-world-school.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import into Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **Add New...** → **Project**.
3. Select **Continue with GitHub** and authorize Vercel to access your repository.
4. Locate the `little-world-school` repository and click **Import**.
5. Vercel automatically detects the framework:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. (Optional) In **Environment Variables**, add any runtime secrets (e.g., `GEMINI_API_KEY`) if needed for production APIs.
7. Click **Deploy**.

### Step 3: Automatic Continuous Deployment
- Any subsequent commits made in Google AI Studio and pushed to GitHub will instantly trigger:
  - **GitHub Actions**: Runs TypeScript checks and production build validation.
  - **Vercel**: Automatically builds and deploys your changes to production in ~30–60 seconds.

---

## 🔒 Security & Environment Variables

- **`.gitignore`** is strictly configured to prevent sensitive files (`.env`, `.env.local`, `.vercel`, `node_modules/`, credentials) from being committed to GitHub.
- Keep all secrets in the **Vercel Project Settings → Environment Variables** panel.
- Template variables are documented in `.env.example`.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local dev server (port 3000)
npm run dev

# Run TypeScript checks
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📍 School Details
- **School**: Little World School
- **Campus**: Neptune Swarajya, Swarajya Road, Village Ambivli (West), Taluka Kalyan, District Thane, Maharashtra – 421102.
- **Landmark**: Near Ambivli Railway Station.
- **Admissions WhatsApp**: +91 8652681370
