'use client'
import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"]
})

interface NavbarItamProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItamProps) => {
    return (
        <Link href={href}>
           <Button
  variant={isActive ? "default" : "ghost"}
  className={cn(
    "text-base",
    isActive
      ? "bg-black text-white"
      : "bg-transparent text-black hover:bg-gray-100"
  )}
>
  {children}
</Button>
        </Link>
    )
}

const navbarItems = [
    { href: "/", children: "Home" },
    { href: "/about", children: "About" },
    { href: "/features", children: "Features" },
    { href: "/pricing", children: "Pricing" },
    { href: "/contact", children: "Contact" },
]

const Navbar = () => {
    const  pathname = usePathname()
    return (
        <nav className='h-20 border-b flex items-center justify-between font-medium bg-white px-6'>
            <Link href={"/"} className='items-center flex'>
                <span className={cn("text-5xl font-semibold", poppins.className)}>
                    funroad
                </span>
            </Link>

            <div className='items-center gap-4 hidden md:flex lg:flex'>
                {navbarItems.map((item) => (
                    <NavbarItem key={item.href} {...item}
                    isActive={pathname===item.href} />
                    
                ))}
            </div>
        </nav>
    )
}

export default Navbar
