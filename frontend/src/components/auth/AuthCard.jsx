export default function AuthCard({
    title,
    children
}){
    return(
        <div className="w-full max-w-md p-8 rounded-3xl border border-zinc-800 bg-zinc-950">
            <h1 className="text-3xl font-bold mb-6">
                {title}
            </h1>
            {children}
        </div>
    )
}