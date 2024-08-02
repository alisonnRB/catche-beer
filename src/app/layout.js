import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/script/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Catche Beer - Delivery de Bebidas em SP",
  description: "Delivery de bebidas em São Paulo - SP, o mais rápido da região. Peça rapidamente pelo nosso website com uma grande variedade de bebidas para você aproveitar o seu dia.",
  keywords: "delivery, bebidas, São Paulo, cerveja, vinho, refrigerantes, destilados",
  openGraph: {
    title: "Catche Beer - Delivery de Bebidas",
    description: "Descubra a melhor forma de receber bebidas em São Paulo com Catche Beer.",
    url: "https://www.catchebeer.com",
    // images: [
    //   {
    //     url: "https://www.catchebeer.com/og-image.jpg",
    //     width: 800,
    //     height: 600,
    //     alt: "Catche Beer Logo",
    //   },
    // ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <CartProvider>
        <body className={inter.className}>
          {children}
        </body>
      </CartProvider>
    </html>
  );
}