import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { AuthProvider } from "@/script/authContext";

export const metadata = {
    title: "Catche beer - auth",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">

            <body className={inter.className}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>

        </html>
    );
}