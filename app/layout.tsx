import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import '@/styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <div className="body__content-wrapper">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
