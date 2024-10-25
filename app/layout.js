import "./globals.css";

export const metadata = {
  title: "박채연",
  description: "ㅁ니아;미낭;ㅣㅏㅁㄴㅇ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>헤더</h1>
        {children}
        <h1>푸터</h1>
      </body>
    </html>
  );
}
