"use client"

import Link from "next/link"
import { Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu } from "@/components/ui/navigation-menu"
import { useTheme } from "next-themes"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-900 dark:border-gray-800">
      <div className="container flex h-14 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold dark:text-gray-100">NEWS</span>
        </Link>
        <div className="hidden lg:flex">
          <DesktopNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative"
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" className="dark:text-gray-100">
            Sign In
          </Button>
          <Button className="dark:bg-gray-700 dark:text-gray-100">Subscribe</Button>
        </div>
      </div>
    </header>
  )
}

function DesktopNav() {
  return (
    <NavigationMenu>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/news"
          className="transition-colors hover:text-foreground/80 dark:text-gray-300 dark:hover:text-gray-100"
        >
          News
        </Link>
        <Link
          href="/sports"
          className="transition-colors hover:text-foreground/80 dark:text-gray-300 dark:hover:text-gray-100"
        >
          Sports
        </Link>
        <Link
          href="/finance"
          className="transition-colors hover:text-foreground/80 dark:text-gray-300 dark:hover:text-gray-100"
        >
          Finance
        </Link>
        <Link
          href="/tech"
          className="transition-colors hover:text-foreground/80 dark:text-gray-300 dark:hover:text-gray-100"
        >
          Tech
        </Link>
        <Link
          href="/entertainment"
          className="transition-colors hover:text-foreground/80 dark:text-gray-300 dark:hover:text-gray-100"
        >
          Entertainment
        </Link>
      </nav>
    </NavigationMenu>
  )
}

function MobileNav() {
  return (
    <nav className="flex flex-col space-y-4 p-4">
      <Link href="/news" className="text-sm font-medium dark:text-gray-300">
        News
      </Link>
      <Link href="/sports" className="text-sm font-medium dark:text-gray-300">
        Sports
      </Link>
      <Link href="/finance" className="text-sm font-medium dark:text-gray-300">
        Finance
      </Link>
      <Link href="/tech" className="text-sm font-medium dark:text-gray-300">
        Tech
      </Link>
      <Link href="/entertainment" className="text-sm font-medium dark:text-gray-300">
        Entertainment
      </Link>
    </nav>
  )
}

