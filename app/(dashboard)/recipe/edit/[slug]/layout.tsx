import { Suspense } from "react";
import Loading from "@/app/Loading";

/**
 * This function component represents a layout for a dashboard.
 * It uses the `Suspense` component from React to handle loading state.
 * While the children components are loading, it displays a `Loading` component.
 * Once the children components have loaded, they replace the `Loading` component.
 *
 * @param children - The children components to be rendered once they have loaded.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
