🔗 **Live site:** https://shoppingcartcyberreact.netlify.app/shop

---

## Features

- Browse 20 products fetched from the [FakeStore API](https://fakestoreapi.com/)
- Add, remove, and update item quantities in the cart
- Persistent cart counter in the navbar
- Fully responsive grid layout
- Cyberpunk visual theme with neon colors and monospace typography (big fan of the genre).

---

## Built With

- [React](https://react.dev/) — UI library
- [React Router DOM](https://reactrouter.com/) — client-side routing
- [Vite](https://vitejs.dev/) — build tool
- [FakeStore API](https://fakestoreapi.com/) — product data
- [Context API](https://react.dev/reference/react/createContext) — global cart state

---

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   └── OrderSummary.jsx
├── context/
│   └── CartContext.jsx
├── pages/
│   ├── Layout.jsx
│   ├── Home.jsx
│   ├── Shop.jsx
│   └── Cart.jsx
├── App.jsx
├── main.jsx
└── index.css
```
---
## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — landing page |
| `/shop` | Shop — product listing |
| `/cart` | Cart — items, quantities and total |
---

