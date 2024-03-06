import Image from "next/image";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex ">
      <ThemeSwitcher />
    </main>
  );
}
