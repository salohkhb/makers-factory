import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <span className="font-bold text-lg">Makers Factory</span>
      </div>

      <div className="flex gap-4 font-medium">
        <Link href="/en">EN</Link>
        <Link href="/fr">FR</Link>
        <Link href="/ar">AR</Link>
      </div>
    </nav>
  );
}