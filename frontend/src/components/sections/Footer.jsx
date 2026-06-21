import Logo from "../shared/Logo";

export default function Footer(){
    return(
        <footer className="border-t border-gray-800 py-10">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Logo/>
                <p className="text-gray-500">Connect. Share. Sync</p>
            </div>
        </footer>
    )
}