import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {/* <h3>Dare XD</h3> */}
        <Image src="/vercel.svg" width={128} height={77} />
      </div>

      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/users/">Users</Link>
      </div>
    </nav>
  );
};

export default Navbar;


