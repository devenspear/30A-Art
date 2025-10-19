# 30A.art – MVP Product Requirement Document (PRD)

**Mission:**  
*The definitive guide to 30A’s creative life.*

**Vision:**  
To curate and elevate the creative ecosystem along Florida’s 30A corridor—from Rosemary Beach to Seaside—through a digital platform that connects residents, artists, galleries, and cultural organizations.

---

## 1. Overview

**Objective:**  
Build a **private, code-gated MVP** for early stakeholder review. The site will feature an elegant landing experience, minimal architecture, and demonstrate the core visual and functional framework of the future public version.

**Tech Stack:**  
- **Framework:** Next.js 14 (App Router)  
- **Deployment:** Vercel  
- **Styling:** TailwindCSS  
- **Map:** Mapbox or Leaflet  
- **Email Service:** MailerLite (stubbed)  
- **Data:** JSON static sources (for prototype phase)

**Repository:**  
[`github.com/devenspear/30A-Art`](https://github.com/devenspear/30A-Art)

---

## 2. User Stories

**Residents & Second-Home Owners**
- Want a **clean, modern map** showing public art installations.  
- Want to quickly see **what’s happening this week** in art, culture, or events.  
- Want to **subscribe** for updates without dealing with ads.

**Artists & Galleries**
- Want to **submit events or exhibits** easily.  
- Want their work credited and linked to official sources.

**Civic & Partner Organizations (CAA, Alys Beach, etc.)**
- Want a **neutral, complementary platform** that amplifies their programs (e.g., Monarch Art Trail, Digital Graffiti).

---

## 3. MVP Functional Requirements

### 3.1 Gate Page (Private Access)
- **Route:** `/`
- Solid-color background with single input field: **“Enter your code.”**
- Input authenticates via `/api/auth`.
- Correct entry (`Gulf@rt25`) sets an HttpOnly cookie and redirects user to `/prototype`.
- Incorrect entry returns graceful error.

### 3.2 Prototype Page
- **Route:** `/prototype`
- Displays:
  - Hero section with mission statement.
  - Email capture form (MailerLite stub).
  - Placeholder sections for:
    - Public Art Maplet
    - “What’s On” mini-feed
    - Live Visual Embeds (Instagram/Flickr)

### 3.3 Email Capture (Stub)
- Minimal form posting to `/api/subscribe`.
- Returns success message when valid.
- Actual MailerLite integration deferred until launch.

### 3.4 Public Art Maplet
- JSON-based static pins loaded from `/data/public_art.json`.
- Map displays Monarch Art Trail, Inlet Beach murals, and Digital Graffiti anchor.
- Each pin links to official owner or CAA site.

### 3.5 Live Visual Embeds
- JSON whitelist `/data/embeds.json` (Instagram + Flickr URLs).
- Embeds displayed as carousel or grid.
- Legal compliance via:
  - oEmbed for Instagram
  - Flickr Creative Commons with visible attribution.

### 3.6 Middleware Protection
- `middleware.ts` restricts access to `/prototype` and `/embeds` without valid cookie.

---

## 4. Design System

**Brand Tokens:**
- Palette:
  - `#0E1C22` — Deep Gulf Blue (gate background)
  - `#1C5D73` — Gulf Accent
  - `#F4F1EC` — Sand Background
  - `#222` — Charcoal Text
- Typography:
  - **Display:** PP Editorial New (modern serif)
  - **Body:** Inter (system font)
- Components: Rounded (10–12px), soft shadows, generous spacing.

**Logo Mark:**  
Minimal wordmark — `30A·art` (mid-dot separator).  
Avoid 30A® brand trade dress or sunburst logo.

---

## 5. Data Files (Initial Seeds)

**`/data/public_art.json`**
```json
[
  {
    "id": "monarch-trail",
    "title": "Monarch Art Trail",
    "type": "Sculpture Trail",
    "lat": 30.2912,
    "lng": -86.0057,
    "credit": "Cultural Arts Alliance",
    "url": "https://www.culturalartsalliance.com/monarch-art-trail"
  },
  {
    "id": "inlet-murals",
    "title": "US-98 Underpass Murals",
    "type": "Mural",
    "lat": 30.2775,
    "lng": -86.0019,
    "credit": "CAA & FDOT Partnership",
    "url": "https://www.culturalartsalliance.com/art-in-public-spaces"
  }
]
```

**`/data/embeds.json`**
```json
{
  "instagram": [
    "https://www.instagram.com/p/EXAMPLE1/",
    "https://www.instagram.com/p/EXAMPLE2/"
  ],
  "flickr": [
    "https://www.flickr.com/photos/culturalartsalliance/123456789/",
    "https://www.flickr.com/photos/culturalartsalliance/987654321/"
  ]
}
```

---

## 6. Environment Variables

```bash
ACCESS_CODE=Gulf@rt25
MAILERLITE_API_KEY=
MAILERLITE_GROUP_ID=
SITE_URL=http://localhost:3000
```

---

## 7. Security

- Gate authentication uses **HttpOnly cookies**.  
- Code rotation recommended every 30 days during private review.  
- When public, remove middleware and `/api/auth` endpoint entirely.

---

## 8. Legal & Attribution

- Independent from “30A®” trademark.  
- All photography: use oEmbed or CC-BY images with visible attribution.  
- Public art data credited to:
  - Cultural Arts Alliance of Walton County  
  - Alys Beach Digital Graffiti Festival  
  - Visit South Walton

---

## 9. Roadmap (Post-MVP)

1. **Search & Filters**
   - Filter by town, medium, or venue.
2. **Artist Profiles**
   - Optional opt-in listings.
3. **Sponsored Guides**
   - Seasonal itineraries and events.
4. **Submission API**
   - Sync with CAA calendar via API or feed.
5. **Partner Dashboard**
   - Allow galleries to manage listings.
6. **Public Launch**
   - Remove gate, publish live site.

---

## 10. Advisors

- **Jennifer Steele** — Executive Director, Cultural Arts Alliance  
- **Stacy Hamilton** — VP Marketing, Alys Beach / EBSCO Development  
  *(First strategic advisor to review MVP concept.)*

---

### Repository Notes

**Initialize the repo before PR merge:**  
If uninitialized, create a `README.md` via GitHub UI, then push this PRD file and MVP scaffold.

---

**Author:** Deven Spear  
**Last Updated:** October 2025  
**Location:** Wilmington, NC → 30A Corridor, FL  
**License:** MIT
