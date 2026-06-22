import AuthCard from "@/components/auth/AuthCard";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import PasswordInput from "@/components/ui/PasswordInput";
import Link from "next/link";

export default function LoginPage(){
    return(
            <AuthCard title="Welcome Back">
                <div className="space-y-4">
                    <Input type="email" placeholder="Email"/>
                    <PasswordInput placeholder="Password"/>
                    <Button className="w-full">
                        Login
                    </Button>
                    <p className="text-center text-gray-400 text-sm">
                        New to SyncUp?{" "}
                        <Link href="/signup" className="text-sky-500 hover:text-sky-400">
                        Sign Up Now
                        </Link>
                    </p>
                </div>
            </AuthCard>
        
    )
}