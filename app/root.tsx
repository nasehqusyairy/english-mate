import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },

  // Apple touch icons
  { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
  { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
  { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
  { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
  { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" },
  { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" },
  { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" },
  { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" },

  // Favicons
  { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },

  // Manifest
  { rel: "manifest", href: "/manifest.json" },

  // MS application tile image
  { rel: "msapplication-TileImage", href: "/ms-icon-144x144.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "English Mate" },
    { name: "description", content: "Welcome to English Mate!" },
    { name: "msapplication-TileColor", content: "#8E51FF" },
    { name: "theme-color", content: "#8E51FF" },
  ];
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto p-4 pt-16 container">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="p-4 w-full overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
