import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip"
import { DirectionProvider } from "@/components/ui/direction";


export const metadata: Metadata = {
  title: "Continuum",
  description: "Continuum is a platform for building and deploying web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="dark">
      <body
        className={`font-sans antialiased`}
      >
        <DirectionProvider dir="ltr" direction="ltr">
          <TooltipProvider>{children}</TooltipProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
