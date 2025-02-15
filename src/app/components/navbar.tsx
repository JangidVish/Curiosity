"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import {cn} from '@/app/utils/cn'
import Link from "next/link";

function navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4" />
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-10", className)}
  >
    <Menu setActive={setActive}>
      <Link href={"#aboutUs"}> 
      <MenuItem setActive={setActive} active={active} item="AboutUs">
      </MenuItem>
      </Link>  
      <Link href={"#Services"}>
      <MenuItem setActive={setActive} active={active} item="Services">
      <Link href="/parvi">
      <HoveredLink>Pravi</HoveredLink>
      </Link></MenuItem>
      </Link>
      <Link href={"#Feedback"}>
      <MenuItem setActive={setActive} active={active} item="Testimonals"></MenuItem>
      </Link>
      <Link href={"#Contact"}>
      <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
      </Link>
    </Menu>
   </div>
  );
}

const Nav = [
  {
    title: "About Us",
    link: "#aboutUs"
  },
  {
    title: "Services",
    link: "#Services"
  },
  {
    title: "Projects",
    link: "#Projects"
  },
  {
    title: "Testimonal",
    link: "#testimonal"
  },
  {
    title: "Contact Us",
    link: "Contact"
  },
]

export default navbar