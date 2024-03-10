import { Suspense } from "react";
import Loading from "@/app/Loading";
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
