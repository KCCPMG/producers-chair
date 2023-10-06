import Link from "next/link";
import searchIcon from "./../public/iconamoon_search-bold.svg"


const Navbar = () => {
  return (
    <nav className="h-6 w-full sticky inline-flex justify-end  bg-black">
      <Link className="text-white text-xl font-normal font-['Roboto'] capitalize mx-4" href="/">
        Home
      </Link>
      <Link className="text-white text-xl font-normal font-['Roboto'] capitalize mx-4" href="/saved">
        Saved
      </Link>     
      <img className="w-6 h-6 mx-4" alt="search" src="/iconamoon_search-bold.svg" />

    </nav>
  )
}

export default Navbar;