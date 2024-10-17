import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SidebarWrapper from '@/components/SidebarWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '나만의 블로그',
  description: 'Next.js로 만든 SEO 최적화된 개인 블로그',
  // ... (나머지 메타데이터는 그대로 유지)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <SidebarWrapper>
              <main className="flex-grow p-4 md:p-6 lg:p-8">{children}</main>
            </SidebarWrapper>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}