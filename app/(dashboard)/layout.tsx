// Importing the ThemeProvider from providers directory.
import ThemeProvider from "../providers";

// Importing the Header component from components directory.
import Header from "../components/Header";

/**
 * Type definition for the properties of the DashboardLayout component.
 * @typedef {Object} DashboardLayoutProps
 * @property {React.ReactNode} children - The child components to be rendered within the DashboardLayout.
 */
interface DashboardLayoutProps {
  children?: React.ReactNode;
}
/**
 * The DashboardLayout component that wraps the main content of the dashboard with a common layout.
 * It includes the Header component and applies the theme to all its child components.
 * @param {DashboardLayoutProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the DashboardLayout.
 * @returns {JSX.Element} The rendered DashboardLayout component.
 */
export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className={`h-full min-w-[375px] dark:bg-dark-0`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        {children}
      </ThemeProvider>
    </div>
  );
}
