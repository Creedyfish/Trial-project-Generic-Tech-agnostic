import ThemeProvider from "../providers";

import Header from "../components/Header";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className={`dark:bg-dark-0 h-full min-w-[375px]`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        {children}
      </ThemeProvider>
    </div>
  );
}
