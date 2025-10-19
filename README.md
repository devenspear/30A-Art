# 30A·art

**The definitive guide to 30A's creative life**

A private, code-gated MVP platform curating and elevating the creative ecosystem along Florida's 30A corridor—from Rosemary Beach to Seaside.

## 🎯 Overview

This is a Next.js application that showcases public art, cultural events, and creative organizations along the 30A corridor in Florida. The MVP features private access for early stakeholder review before public launch.

## 🚀 Features

### Current MVP Features
- ✅ **Code-gated access** - Private preview with password protection
- ✅ **Public Art Map** - Interactive Leaflet map showing sculptures, murals, and installations
- ✅ **What's On** - Cultural events and exhibition listings
- ✅ **Email Capture** - Newsletter subscription (MailerLite stub ready for integration)
- ✅ **Visual Embeds** - Instagram/Flickr integration placeholders with proper attribution
- ✅ **Coastal Design System** - Deep Gulf Blue (#0E1C22), Sand (#F4F1EC), Gulf Accent (#1C5D73)
- ✅ **Responsive Design** - Mobile-first, beautiful on all devices

### Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** TailwindCSS v4
- **Mapping:** Leaflet & React Leaflet
- **Typography:** Inter
- **Deployment:** Vercel-ready
- **Email:** MailerLite (stubbed for MVP)

## 🔧 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env.local` file (already configured):
```bash
ACCESS_CODE=Gulf@rt25
MAILERLITE_API_KEY=
MAILERLITE_GROUP_ID=
SITE_URL=http://localhost:3004
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Access the Application
1. Open [http://localhost:3004](http://localhost:3004)
2. Enter access code: `Gulf@rt25`
3. You'll be redirected to the prototype page

## 📁 Project Structure

```
30A-Art/
├── app/
│   ├── api/
│   │   ├── auth/route.ts        # Authentication endpoint
│   │   └── subscribe/route.ts   # Email subscription (stub)
│   ├── prototype/page.tsx       # Protected prototype page
│   ├── page.tsx                 # Gate page (login)
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Design system & colors
├── components/
│   └── sections/
│       ├── email-capture.tsx    # Newsletter signup
│       ├── public-art-map.tsx   # Interactive map
│       ├── visual-embeds.tsx    # Photo embeds
│       └── whats-on.tsx         # Events feed
├── data/
│   ├── public_art.json          # Art locations
│   └── embeds.json              # Social media URLs
├── middleware.ts                # Route protection
└── .env.local                   # Environment variables
```

## 🎨 Design System

### Brand Colors
```css
--gulf-blue: #0E1C22    /* Deep Gulf Blue - gate background */
--gulf-accent: #1C5D73  /* Gulf Accent */
--sand: #F4F1EC         /* Sand Background */
--charcoal: #222        /* Charcoal Text */
```

### Typography
- **Body:** Inter (Google Fonts)
- **Logo:** Light weight, mid-dot separator: `30A·art`

### Components
- Rounded corners: 12px
- Soft shadows
- Generous spacing
- Smooth transitions

## 🗺️ Public Art Data

Edit `/data/public_art.json` to add or update art locations:

```json
{
  "id": "unique-id",
  "title": "Art Installation Name",
  "type": "Sculpture|Mural|Installation",
  "lat": 30.xxxx,
  "lng": -86.xxxx,
  "credit": "Cultural Arts Alliance",
  "url": "https://..."
}
```

## 📧 Email Subscription

The email capture form currently uses a stub API. To integrate MailerLite:

1. Get API key from [MailerLite](https://www.mailerlite.com)
2. Update `.env.local`:
   ```
   MAILERLITE_API_KEY=your_key_here
   MAILERLITE_GROUP_ID=your_group_id
   ```
3. Uncomment integration code in `app/api/subscribe/route.ts`

## 🔐 Security & Access

### Current Setup (MVP)
- Gate authentication uses HttpOnly cookies
- Access code: `Gulf@rt25`
- Cookie expires in 7 days
- Middleware protects `/prototype` routes

### For Public Launch
1. Remove middleware.ts
2. Delete `/api/auth` endpoint
3. Make home page (`/`) the main prototype
4. Remove gate page authentication

## 🚀 Deployment

### Vercel Deployment
```bash
# 1. Push to GitHub
git add .
git commit -m "30A.art MVP ready"
git push origin main

# 2. Import to Vercel
# - Connect GitHub repository
# - Add environment variables
# - Deploy!
```

### Environment Variables (Production)
Set these in Vercel:
- `ACCESS_CODE` - Stakeholder access code
- `MAILERLITE_API_KEY` - When ready to launch
- `MAILERLITE_GROUP_ID` - When ready to launch
- `SITE_URL` - Your production URL

## 📋 Roadmap (Post-MVP)

1. **Search & Filters** - Filter by town, medium, venue
2. **Artist Profiles** - Optional opt-in listings
3. **Sponsored Guides** - Seasonal itineraries
4. **Submission API** - Sync with CAA calendar
5. **Partner Dashboard** - Gallery listing management
6. **Public Launch** - Remove gate, go live

## 🤝 Partners & Attribution

- **Cultural Arts Alliance of Walton County** - Public art data
- **Alys Beach Digital Graffiti Festival** - Event information
- **Visit South Walton** - Tourism resources

### Legal Notes
- Independent platform, not affiliated with 30A® trademark
- All photography via oEmbed or Creative Commons licenses
- Proper attribution on all visual content

## 👥 Advisors

- **Jennifer Steele** - Executive Director, Cultural Arts Alliance
- **Stacy Hamilton** - VP Marketing, Alys Beach / EBSCO Development

## 📄 License

MIT License - See LICENSE file for details

---

**Author:** Deven Spear
**Location:** Wilmington, NC → 30A Corridor, FL
**Last Updated:** October 2025
**Repository:** [github.com/devenspear/30A-Art](https://github.com/devenspear/30A-Art)

Built with Next.js, designed for the creative community of 30A.
