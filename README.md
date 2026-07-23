# Balkan Food House

Website for Balkan Food House — a pizza & fast food restaurant in Sânnicolau Mare.
Single-page React app: menu, cart, checkout (card or cash on delivery), and contact.

## Requirements

- Node.js 18+ and npm

## Development

```bash
npm install      # first time only
npm run dev      # start the dev server at http://localhost:3000
```

`npm start` does the same thing as `npm run dev`.

## Production build

```bash
npm run build    # outputs a static site to /build
```

## Deploy to Netlify

Build settings are in `netlify.toml` (build command `npm run build`, publish
directory `build`), so no manual config is needed.

- **Git-connected:** push this repo to GitHub/GitLab, then in Netlify choose
  "Add new site" → "Import an existing project" and pick the repo. Netlify reads
  `netlify.toml` and deploys on every push.
- **Manual:** run `npm run build` and drag the `build` folder onto
  app.netlify.com.

## Project structure

```
public/            static assets served as-is (icons, fonts, images, manifest)
src/
  App.js           app shell + cart/checkout state
  cartLogic.js     pure cart operations (add / remove / totals)
  Home.js          hero + info cards
  Menu.js          menu with categories
  data.js          menu items and prices
  Cart.js          slide-in cart drawer
  Checkout.js      delivery details + payment (card / cash)
  OrderSuccess.js  order confirmation popup
  Contact.js       contact section
  navBar.js        header + mobile menu
  Footer.js        footer
  ScrollButton.js  back-to-top button
  flyToCart.js     add-to-cart animation
  style.css        all styles
```

> Note: the checkout is a front-end demo — there is no backend, so no order or
> card data is stored or transmitted. To accept real payments, integrate a
> provider such as Stripe.
