export default function AuthLayout({children}){
    return(
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
            {children}
        </main>
    )
}