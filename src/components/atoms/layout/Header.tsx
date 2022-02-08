import Link from 'next/link'
import type { VFC } from 'react'

export const NAV_ITEMS = [
  { href: '/', label: 'Index' },
  { href: '/posts', label: 'Posts' },
  { href: '/users', label: 'Users' },
  { href: '/comments', label: 'Comments' },
]

export const Header: VFC = () => {
  return (
    <header>
      <nav className="bg-gray-800 w-screen text-white">
        <div className="flex items-center pl-8 h-14">
          <div className="flex space-x-4">
            {NAV_ITEMS.map((item) => {
              return (
                <Link key={item.href} href={item.href}>
                  <a className="inline-block py-2 px-6 text-xl hover:text-blue-500 focus:text-blue-500 active:text-blue-500">
                    {item.label}
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}
