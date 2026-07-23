# Balkan Food House

Website for Balkan Food House — a pizza & fast food restaurant in Sânnicolau Mare.
Single-page React app (built with Vite): menu, cart, checkout (card or cash on
delivery), and contact.

## Requirements

- Node.js 18+ and npm

## Development

```bash
npm install      # first time only
npm run dev      # start the dev server (Vite prints the local URL)
```

## Production build

```bash
npm run build    # outputs a static site to /dist
npm run preview  # locally preview the production build
```

## Deploy to Netlify

Build settings are in `netlify.toml` (build command `npm run build`, publish
directory `dist`), so no manual config is needed.

- **Git-connected:** push this repo to GitHub/GitLab, then in Netlify choose
  "Add new site" → "Import an existing project" and pick the repo. Netlify reads
  `netlify.toml` and deploys on every push.
- **Manual:** run `npm run build` and drag the `dist` folder onto
  app.netlify.com.

## Project structure

```
index.html         app entry (Vite)
vite.config.js     Vite configuration
public/            static assets served as-is (icons, fonts, images, manifest)
src/
  index.jsx        React entry point
  App.jsx          app shell + cart/checkout state
  cartLogic.js     pure cart operations (add / remove / totals)
  Home.jsx         hero + info cards
  Menu.jsx         menu with categories
  data.js          menu items and prices
  Cart.jsx         slide-in cart drawer
  Checkout.jsx     delivery details + payment (card / cash)
  OrderSuccess.jsx order confirmation popup
  Contact.jsx      contact section
  navBar.jsx       header + mobile menu
  Footer.jsx       footer
  ScrollButton.jsx back-to-top button
  flyToCart.js     add-to-cart animation
  style.css        all styles
```

> Note: the checkout is a front-end demo — there is no backend, so no order or
> card data is stored or transmitted. To accept real payments, integrate a
> provider such as Stripe.
