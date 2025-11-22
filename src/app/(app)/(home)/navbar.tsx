'use client'
import React, { useState } from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import NavbarSidebar from './navbar-sidebar'
import { MenuIcon } from 'lucide-react'

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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const pathname = usePathname()

    return (
        <nav className='h-20 border-b flex items-center justify-between font-medium bg-white px-6'>

            {/* Hides logo when sidebar is open */}
            <Link href={"/"} className={`items-center flex ${isSidebarOpen ? "hidden" : ""}`}>
                <span className={cn("text-5xl font-semibold", poppins.className)}>
                    funroad
                </span>
            </Link>

            <NavbarSidebar open={isSidebarOpen} items={navbarItems} onOpenChange={setIsSidebarOpen} />

            {/* Hide desktop nav items when sidebar is open */}
            <div className={`items-center gap-4 hidden lg:flex ${isSidebarOpen ? "hidden" : ""}`}>
                {navbarItems.map((item) => (
                    <NavbarItem key={item.href} {...item} isActive={pathname === item.href} />
                ))}
            </div>


            <div className={`hidden lg:flex h-full ${isSidebarOpen ? "hidden" : ""}`}>
                <Button variant={"secondary"} className='border-l w-52  border-b-0 border-r-0 rounded-none bg-white h-full
                 hover:bg-pink-400 transition-colors text-lg'>
                    <Link href={"/sign-in"}>
                        <p>Login in</p>
                    </Link>
                </Button>

                <Button
                    asChild
                    variant={"secondary"} className='border-l w-52  border-b-0 border-r-0 h-full rounded-none bg-black text-white
                hover:bg-pink-400 hover:text-black transition-colors text-lg'>
                    <Link href={"/sign-up"}>
                        <p>Start selling</p>
                    </Link>
                </Button>
            </div>

            {/* Mobile hamburger button */}
            <div className='flex lg:hidden items-center justify-center z-50'>
                <Button
                    variant="ghost"
                    className='size-12 border-transparent bg-white'
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <MenuIcon />
                </Button>
            </div>
        </nav>
    )
}

export default Navbar
