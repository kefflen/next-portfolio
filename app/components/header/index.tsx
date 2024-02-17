'use client'
import Link from "next/link"
import { NavItem } from "./nav-item"

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "CV",
    href: "/CV",
  },
]

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-4xl text-emerald-500">KF</h1>
        </Link>

        <nav className="flex gap-4 sm:gap-10">
          {NAV_ITEMS.map((item, index) => (
            <NavItem key={item.label} label={item.label} href={item.href} />
          ))}
        </nav>
      </div>
    </header>
  )
}
