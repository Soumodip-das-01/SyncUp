export default function Input({
    type = "text",
    placeholder,
    value,
    onChange,
}){
    return(
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white outline-none focus:border-sky-500 transition" />
    )
}