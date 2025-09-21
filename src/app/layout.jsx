import { Poppins, Raleway} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/molecules/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata = {
  title: "Rasa Bandoeng",
  description: "Temukan kulineran terbaik di Rasa Bandoeng",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${raleway.variable} antialiased`}
      >
        <Navbar />
          {children}
      </body>
    </html>
  );
}
