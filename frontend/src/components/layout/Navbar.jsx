import Button from "../ui/Button";
import Logo from "../shared/Logo";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between px-8 py-5 text-white max-w-7xl mx-auto">
            <Logo />
            <div className="flex gap-4 items-center justify-center text-xl">
                <Link href="/">Home</Link>

                <Link href="/explore">
                    Explore
                </Link>

                <Link href="/features">
                    Features
                </Link>
            </div>
            <div className="flex gap-4">
                <Button variant="ghost">
                    Login
                </Button>
                <Button>
                    Get Started
                </Button>
            </div>
        </nav>
    )
}