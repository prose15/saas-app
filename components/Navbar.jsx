import Image from "next/image"
import Link from "next/link"
import NavItem from "@/components/NavItem.jsx"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href={'/'}>
        <div className="flex items-center gap-2.5 cursor-pointer">
        <Image src="/images/logo.svg" alt="logo" width={46} height={47}/>
        </div>
        </Link>
        <div>
            <NavItem/>
        </div>
    </nav>
  )
}

export default Navbar