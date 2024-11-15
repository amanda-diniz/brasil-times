import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import "../global.css";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

export const metadata = {
  title: "Brasil Times",
  description: "Seu portal de notícias",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
