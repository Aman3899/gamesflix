import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from './components/LoadingScreen';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GamesFlex",
  description: "This is an Gaming website named as GamesFlex where you can find the details for the games with their images, genres, & Download Links.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
