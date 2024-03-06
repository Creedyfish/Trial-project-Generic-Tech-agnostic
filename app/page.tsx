import Image from "next/image";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex h-full w-full dark:bg-dark-0">
      <ThemeSwitcher />
    </main>
  );
}
