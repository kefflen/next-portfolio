'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { NavItem } from './nav-item'

export const Header = () => {
  const t = useTranslations()
  const NAV_ITEMS = [
    {
      label: t('header.home'),
      href: '/',
    },
    {
      label: t('header.projects'),
      href: '/projects',
    },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white p-4 absolute top-0 w-full z-10 h-24 flex items-center justify-center"
    >
      <div className="container flex items-center justify-between">
        <Link href={'/'}>
          <h1 className="text-4xl text-emerald-500">KF</h1>
        </Link>

        <nav className="flex gap-4 sm:gap-10">
          {NAV_ITEMS.map((item, index) => (
            <NavItem key={item.label} label={item.label} href={item.href} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
