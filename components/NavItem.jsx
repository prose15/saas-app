'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [{
    href: '/',
    label: 'Home'
},
{
    href: '/compansions',
    label: 'Compansions'
},
{
    href: '/my-jorney',
    label: 'My Jorney'
}]

const NavItem = () => {
    const pathName = usePathname()
  return (
    <nav className="flex items-center gap-4">
        {navItems.map((items) => (
            <Link key={items.label} href={items.href} className={cn(items.href === pathName && 'text-primary font-semibold')}>
                {items.label}
            </Link>
        ))}
    </nav>
  )
}

export default NavItem