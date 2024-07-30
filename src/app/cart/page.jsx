import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "cart",
  description: "Login page",
};

export default function Cart(){
    return(
        <div className={inter.className}>
        </div>
    );
};