import "./original-styles.css";
import Providers from "./providers";

export const metadata = {
  title: "AAA - Future Edge",
  icons: { icon: { url: "/AAA_Logo.png", type: "image/svg+xml" } },
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
