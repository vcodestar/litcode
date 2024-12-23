# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

For better user experience visit: https://litcode-by-vc.web.app/

GitHub Pages: GitHub Pages serves static files, which are great for simple websites. However, when you refresh or directly access a route like /about in a React app, GitHub Pages attempts to load that URL from the server. Since GitHub Pages only serves static files, it doesn't have the ability to handle the client-side routing that React (or other SPAs) uses.

React applications typically use a client-side router like react-router to handle navigation. When a route is visited, React takes over and loads the correct content without a full page reload. But when you refresh the page on a non-root route (e.g., /about), GitHub Pages tries to directly load /about as if it were a separate file, and since such a file doesn't exist, you'll see a 404 error.

Firebase Hosting: Firebase Hosting, on the other hand, is designed to handle modern web apps, including SPAs. It supports dynamic routing and can be configured to serve the index.html file for all requests, regardless of the route. This means that if a user visits /about, Firebase will still serve the main index.html file, and React will take over the routing on the client side, rendering the correct page.

To achieve this, Firebase Hosting uses a feature called rewriting. It rewrites all URLs that don't match static files to index.html, allowing the React router to handle the routing logic on the client-side.
