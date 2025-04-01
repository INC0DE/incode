"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import Modalnav from "./modal";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(() => false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const menuItems = [
    { item: "Inicio", href: "/" },
    { item: "Website", services: "Servicio", href: "/website" },
    { item: "Community", services: "Servicio", href: "/community" },
  ];

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        className="sm:hidden"
      />

      <NavbarBrand>
        <Link href="/">
          <Image
            src="/incodelogo.png"
            alt="incode"
            width={80}
            height={40}
            priority
            unoptimized={true}
          />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map(({ item, href }) => (
          <NavbarItem key={href}>
            <Link
              href={href}
              className={`transition-all duration-300 px-2 py-2 rounded-lg ${
                pathname === href
                  ? "bg-black text-white shadow-lg"
                  : "text-black hover:bg-white hover:text-black"
              }`}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Modalnav />
        </NavbarItem>
      </NavbarContent>

      {typeof window !== "undefined" && (
        <NavbarMenu className="sm:hidden bg-white shadow-lg rounded-lg p-4">
          {menuItems.map(({ item, services, href }, index) => (
            <NavbarMenuItem key={`${href}-${index}`}>
              <Link
                href={href}
                className="block w-full rounded-lg transition-all duration-300 hover:bg-black"
              >
                <div className="p-6 border border-gray rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                  <p className="text-sm text-gray">{services || ""}</p>
                  <p className="text-3xl font-semibold text-gold">{item}</p>
                </div>
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
