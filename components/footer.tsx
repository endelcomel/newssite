import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background text-foreground dark:bg-gray-900 dark:text-gray-100 dark:border-gray-800">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
        <div className="flex-1 space-y-4">
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="text-sm text-muted-foreground dark:text-gray-300">
            Delivering the latest news and updates from around the world.
          </p>
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <nav className="flex flex-col space-y-2 text-sm text-muted-foreground dark:text-gray-300">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </nav>
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <nav className="flex flex-col space-y-2 text-sm text-muted-foreground dark:text-gray-300">
            <Link href="#">Twitter</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">LinkedIn</Link>
          </nav>
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-lg font-semibold">Subscribe</h2>
          <p className="text-sm text-muted-foreground dark:text-gray-300">
            Get the latest news delivered to your inbox.
          </p>
        </div>
      </div>
      <div className="border-t dark:border-gray-800">
        <div className="container flex h-14 items-center justify-between">
          <p className="text-sm text-muted-foreground dark:text-gray-300">© 2024 News Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

