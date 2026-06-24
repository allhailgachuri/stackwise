import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { DemoProvider } from "@/contexts/DemoContext";
import { RoleProvider } from "@/contexts/RoleContext";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

import appCss from "../styles.css?url";
import faviconUrl from "../assets/hero-box.png?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Stackwise" },
      {
        name: "description",
        content:
          "Manage inventory with real-time stock tracking, supplier management, purchase orders, and AI-powered demand forecasting. Includes role-based access, barcode support, and analytics.",
      },
      { name: "author", content: "Stackwise" },
      { property: "og:title", content: "Stackwise" },
      {
        property: "og:description",
        content:
          "Manage inventory with real-time stock tracking, supplier management, purchase orders, and AI-powered demand forecasting. Includes role-based access, barcode support, and analytics.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@stackwise" },
      { name: "twitter:image", content: "" },
      { name: "twitter:title", content: "Stackwise" },
      {
        name: "twitter:description",
        content:
          "Manage inventory with real-time stock tracking, supplier management, purchase orders, and AI-powered demand forecasting. Includes role-based access, barcode support, and analytics.",
      },
    ],
    links: [
      {
        rel: "icon",
        href: faviconUrl,
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <DemoProvider>
      <RoleProvider>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
        <Toaster position="bottom-right" richColors />
      </RoleProvider>
    </DemoProvider>
  );
}
