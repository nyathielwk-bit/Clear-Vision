import './globals.css';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Clearframe Studio — Fast, professional websites for Toronto businesses',
  description:
    'Clean, credible websites for Toronto and GTA businesses. Designed to build trust and bring in inquiries. Launch Page from $500.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
