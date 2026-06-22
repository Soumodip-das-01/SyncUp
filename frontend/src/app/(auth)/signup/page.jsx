import Link from "next/link";
import AuthCard from "@/components/auth/AuthCard";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import Button from "@/components/ui/Button";

export default function SignupPage(){
    return(
            <AuthCard title="Create Account">
                <div className="space-y-4">
                    <Input type="text" placeholder="Username"/>
                    <Input type="email" placeholder="Email"/>
                    <PasswordInput placeholder="Password"/>
                    <PasswordInput placeholder="Confirm Password"/>
                    <Button className="w-full">Sign Up</Button>
                    <p className="text-center text-gray-400 text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="text-sky-500 hover:text-sky-400">
                        Login
                        </Link>
                    </p>
                </div>
            </AuthCard>

    )
}