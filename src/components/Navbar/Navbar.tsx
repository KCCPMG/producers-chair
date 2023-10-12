import Link from "next/link";
import searchIcon from "./../public/iconamoon_search-bold.svg"
import UserIcon from "../UserIcon/UserIcon";
import { roboto } from "../../fonts";


const Navbar = () => {
  return (
    <nav className={`h-14 leading-14 w-full sticky inline-flex justify-between bg-black py-6 px-7 ${roboto.variable} font-wdc`}>

      <UserIcon />
      <div className="inline-flex align-middle">
        <Link className="text-white text-xl font-normal mx-4 my-auto" href="/">
          Home
        </Link>
        <Link className="text-white text-xl font-normal mx-4 my-auto" href="/saved">
          Saved
        </Link>     
        <img className="w-6 h-6 mx-4 my-auto" alt="search" src="/iconamoon_search-bold.svg" />
      </div>

    </nav>
  )
}

export default Navbar;