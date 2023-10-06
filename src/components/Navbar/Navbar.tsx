import Link from "next/link";
import searchIcon from "./../public/iconamoon_search-bold.svg"
import UserIcon from "../UserIcon/UserIcon";


const Navbar = () => {
  return (
    <nav className="h-14 w-full sticky inline-flex justify-between bg-black px-4">
      <div>
        <UserIcon />
      </div>
      <div className="inline">
        <Link className="text-white text-xl font-normal font-['Roboto'] capitalize mx-4" href="/">
          Home
        </Link>
        <Link className="text-white text-xl font-normal font-['Roboto'] capitalize mx-4" href="/saved">
          Saved
        </Link>     
        <img className="w-6 h-6 mx-4" alt="search" src="/iconamoon_search-bold.svg" />
      </div>

    </nav>
  )
}

export default Navbar;