import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./compiled.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix 4Chan",
  description: "4Chan if it was built with Remix",
  keywords: "4chan, remix, clone",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "shortcut icon", href: "https://s.4cdn.org/image/favicon.ico" },
    { rel: "apple touch icon", href: "https://s.4cdn.org/image/apple-touch-icon-iphone.png" },
  ];
};

export default function App () {
  return (
    <html lang="en">
    <head>
      <Meta />
      <Links />
    </head>
    <body className={"min-h-screen bg-gradient-to-b from-orange-200 via-amber-50 to-yellow-50"}>
    <Outlet />
    <ScrollRestoration />
    <Scripts />
    <LiveReload />
    </body>
    </html>
  );
}
