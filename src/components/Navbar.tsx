import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";
const Navbar = () => {
  return (
    <header className="shadow-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link className="flex items-center gap-3" href="/">
          <Image src={logo} width={40} height={40} alt="Workboard Logo" />
          <span className="text-xl font-bold tracking-tight">Workboard</span>
        </Link>
        {/* asChild 
          Make What Inside Button Looks Like Button But Rinder As What Inside Button
          Here Render As anchor tag
        */}
        <Button asChild>
          <Link href="/jobs/new">Post a Job</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
