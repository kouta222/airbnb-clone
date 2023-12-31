import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./ClientOnly";
import Modals from "./components/modals/Modals";
import ToasterProvider from "./providers/ToasterProvider";

import LoginModal from "./components/modals/LoginModal";
import ResisterModal from "./components/modals/ResisterModal";
import RentModal from "./components/modals/RentModal";

import getCurrentUser from "./actions/getCurrentUser";
import SearchModal from "./components/modals/SearchModal";

const font = Nunito({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone"
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RentModal />
          <SearchModal />
          <ResisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-20">{children}</div>
      </body>
    </html>
  );
}
