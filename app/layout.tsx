import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-8 max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
