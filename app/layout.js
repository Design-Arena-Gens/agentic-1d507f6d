import "./globals.css";

export const metadata = {
  title: "Sehat Info Assistant",
  description: "AI medical information assistant for Pakistan in Urdu"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ur">
      <body>{children}</body>
    </html>
  );
}
