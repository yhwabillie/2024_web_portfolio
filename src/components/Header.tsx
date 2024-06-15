import * as React from 'react'
import useThemeStore from '../store/useThemeStore'
import { Link } from 'gatsby'

export default function Header() {
  const toggleTheme = useThemeStore((state: any) => state.toggleTheme)

  return (
    <header className="w-full bg-white dark:bg-black">
      <div className="container m-auto border-2 border-red flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="w-48 h-20 bg-logo-black dark:bg-logo-white bg-contain bg-no-repeat bg-center">
          <h1 className="sr-only">Logo</h1>
        </Link>

        {/* Navigation */}
        <nav className="bg-pink">
          <ul className="flex gap-x-2.5">
            <li>
              <Link to="">ABOUT ME</Link>
            </li>
            <li>
              <Link to="">CAREER</Link>
            </li>
            <li>
              <Link to="">PROJECTS</Link>
            </li>
            <li>
              <Link to="">PROBLEM_SOLVING</Link>
            </li>
          </ul>
        </nav>

        {/* Theme Toggle Btn */}
        <button onClick={toggleTheme}>Theme</button>
      </div>
    </header>
  )
}
