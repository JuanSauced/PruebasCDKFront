import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/config";

export const metadata: Metadata = {
  title: {
    template: `%s | ${ process.env.NEXT_PUBLIC_APP_NAME }`,
    default: `${ process.env.NEXT_PUBLIC_APP_NAME } | ${ process.env.NEXT_PUBLIC_APP_NAME }`,
  },
  description: 'Description',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      {/* <link rel="icon" href="/favicon.png" sizes="64x64" /> */}
      <body className={`${ montserrat.className } theme-evolvenx`}>
        { children }
      </body>
    </html>
  );
}
