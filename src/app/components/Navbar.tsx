import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#f55a5a] px-4">
      <div className="container flex items-center justify-between gap-2 mx-auto min-h-[60px] ">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={"30"}
            height={"30"}
            className="fill-white"
          />
        </Link>
        <Link href={"/new-post"} className="font-medium text-[15px] text-white">
          Create Post
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
