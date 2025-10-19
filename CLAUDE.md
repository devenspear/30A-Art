# Claude Code Instructions for 30A.art

This file contains important instructions for Claude Code when working on this project.

## Git Workflow & Vercel Deployment

### CRITICAL: Always Verify Vercel Builds After Git Push

When pushing code to the `main` branch, **ALWAYS** follow these steps:

1. **Make changes and commit locally**
   ```bash
   git add .
   git commit -m "your commit message"
   ```

2. **Push to GitHub**
   ```bash
   git push origin main
   ```

3. **WAIT AND VERIFY VERCEL BUILD**
   - Wait 15-30 seconds for Vercel to start building
   - The user will paste Vercel CLI build logs into the chat
   - **Carefully review the entire build output** for:
     - ✅ ESLint errors
     - ✅ TypeScript errors
     - ✅ Build failures
     - ✅ Compilation errors

4. **If Build Fails:**
   - Immediately fix the reported errors
   - Commit the fixes
   - Push again
   - **Repeat verification process**

5. **If Build Succeeds:**
   - Confirm deployment is successful
   - Note the deployed URL
   - Proceed with next task

### Why This Is Critical

- Vercel deployments fail silently if we don't check
- ESLint errors only appear during production builds (not dev)
- Users expect working deployments after each push
- Fixing issues early saves time and prevents broken deployments

### Common Vercel Build Issues

1. **ESLint Errors:**
   - Unescaped quotes/apostrophes in JSX → Use `&apos;` `&ldquo;` `&rdquo;`
   - Unused variables in catch blocks → Remove the variable name
   - Unused variables → Remove or prefix with underscore

2. **TypeScript Errors:**
   - Type mismatches
   - Missing imports
   - Invalid prop types

3. **Build Failures:**
   - Missing dependencies
   - Import path errors
   - Configuration issues

## Project-Specific Notes

### Access Code
- Production access code: `Gulf@rt25`
- Stored in environment variable: `ACCESS_CODE`
- Must be set in Vercel environment variables

### Key Routes
- `/` - Gate page (public, requires code)
- `/prototype` - Main content (protected by middleware)
- `/api/auth` - Authentication endpoint
- `/api/subscribe` - Email subscription (MailerLite stub)

### Design System
- Primary: Deep Gulf Blue (#0E1C22)
- Secondary: Gulf Accent (#1C5D73)
- Background: Sand (#F4F1EC)
- Text: Charcoal (#222)

### Testing Locally
```bash
npm run dev
# Visit http://localhost:3004
# Enter code: Gulf@rt25
```

### ESLint Rules
This project uses strict ESLint rules. Common fixes:
- JSX apostrophes: `'` → `&apos;`
- JSX double quotes: `"` → `&ldquo;` or `&rdquo;`
- Unused catch variables: `catch (error)` → `catch`
- Unused variables: Remove or comment out

## Deployment Checklist

Before considering a task "complete":
- [ ] Code works locally (`npm run dev`)
- [ ] All changes committed with clear message
- [ ] Pushed to GitHub
- [ ] **Vercel build verified and successful**
- [ ] Deployment URL tested (if applicable)
- [ ] User notified of completion

## File Structure
```
30A-Art/
├── app/
│   ├── api/          # API routes
│   ├── prototype/    # Protected main page
│   ├── page.tsx      # Gate page
│   └── layout.tsx    # Root layout
├── components/
│   └── sections/     # Page sections
├── data/             # JSON data files
├── middleware.ts     # Route protection
└── .env.local        # Environment variables (not in git)
```

## Important Reminders

1. **Never commit `.env.local`** - It's in .gitignore
2. **Always escape special characters in JSX**
3. **Test authentication flow after changes**
4. **Verify Leaflet map loads correctly**
5. **Check mobile responsiveness**

---

Last Updated: October 2025
