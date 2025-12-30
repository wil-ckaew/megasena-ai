// frontend/src/app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen w-full font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
