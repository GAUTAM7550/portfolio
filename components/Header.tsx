"use client"
import React from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import Link from "next/link";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-black h-24">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-white">AK-Port</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              color="foreground"
              href={item.href}
              className={`text-gray-300 font-[family-name:var(--font-geist-sans)] relative
                hover:after:opacity-30 transition-all duration-200
                ${pathname === item.href ? 'after:opacity-100' : 'after:opacity-0'}
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:w-full after:h-[2px] after:bg-white after:transition-opacity`}
            >
              {item.name.toUpperCase()}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="/contact"
            variant="flat"
            className="bg-zinc-900 text-white"
          >
            Let&apos;s Talk
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-zinc-900/95 backdrop-blur-sm mt-8 pt-5">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className={`w-full text-white py-2 relative
                hover:after:opacity-30 transition-all duration-200
                ${pathname === item.href ? 'after:opacity-100' : 'after:opacity-0'}
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:w-full after:h-[2px] after:bg-white after:transition-opacity`}
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}