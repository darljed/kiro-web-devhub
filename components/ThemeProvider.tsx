"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always render children immediately to ensure content is visible
  // regardless of JS hydration state. The suppressHydrationWarning on
  // <html> in layout.tsx handles the class attribute mismatch that
  // next-themes' inline script causes. Child components use useMounted()
  // to defer theme-dependent UI (icons, toggles) until after hydration.
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
