import "./original-styles.css";
import Providers from "./providers";
import { siteUrl } from "../lib/seo";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "AAA - Future Edge",
  icons: { icon: { url: "/AAA_Logo.png", type: "image/png" } },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
