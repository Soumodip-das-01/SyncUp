export default function IconButton({
    children,
}){
    return(
        <button className="p-3 rounded-xl hover:bg-gray-800 transition-all">
            {children}
        </button>
    )
}