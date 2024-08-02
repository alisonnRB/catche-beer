import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/script/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Catche beer",
  description: "Delivery de bebidas em são paulo - SP, o mias rápido da região, peça rapidamente pelo nosso website com uma grande variedade de bebidas para você aproveitar o seu dia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <CartProvider>
        <body className={inter.className}>
          {children}
        </body>
      </CartProvider>
    </html>
  );
}