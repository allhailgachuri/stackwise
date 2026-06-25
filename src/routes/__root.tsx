import { Outlet, createRootRoute } from "@tanstack/react-router";
import { DemoProvider } from "@/contexts/DemoContext";
import { RoleProvider } from "@/contexts/RoleContext";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

import "../styles.css";

import { ThemeProvider } from "@/components/theme-provider";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" storageKey="stackwise-theme" enableSystem disableTransitionOnChange>
      <DemoProvider>
        <RoleProvider>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
          <Toaster position="bottom-right" richColors />
        </RoleProvider>
      </DemoProvider>
    </ThemeProvider>
  );
}
