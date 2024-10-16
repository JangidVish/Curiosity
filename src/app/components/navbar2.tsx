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
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50  ", className)}
  >
    <Menu setActive={setActive}>
    <Link href={"/"}> 
      <MenuItem setActive={setActive} active={active} item="Home">
      </MenuItem>
      </Link>  
      <Link href={"#aboutUs"}> 
      <MenuItem setActive={setActive} active={active} item="AboutUs">
      </MenuItem>
      </Link>  
      <Link href={"#Services"}>
      <MenuItem setActive={setActive} active={active} item="Services"></MenuItem>
      </Link>
      <Link href={"#catlog"}>
      <MenuItem setActive={setActive} active={active} item="Catalogues"></MenuItem>
      </Link>
    </Menu>
   </div>
  );
}



export default navbar