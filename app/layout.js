import './globals.css';

export const metadata = {
  title: 'LaslesVPN — Want anything to be easy',
  description: 'A fast, secure, and easy-to-use virtual private network.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
