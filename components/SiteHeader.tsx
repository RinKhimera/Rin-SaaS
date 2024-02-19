import { ModeToggle } from "@/components/ModeToggle"
import Link from "next/link"
import { Button } from "./ui/button"

const SiteHeader = () => {
  return (
    <nav className="flex h-[10vh] items-center border-b bg-background">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">Rin SaaS</h1>
        </Link>

        <div className="flex items-center gap-x-5">
          <ModeToggle />

          <div className="flex items-center gap-x-5">
            <Button>Sign In</Button>
            <Button variant={"secondary"}>Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SiteHeader
