"use client"
import { useState } from "react"
import { HugeiconsIcon } from '@hugeicons/react'
import { ViewIcon, ViewOffSlashIcon } from "@hugeicons/core-free-icons"

export default function PasswordInput({
    placeholder,
}) {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="relative">
            <input type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-whiteoutline-none focus:border-sky-500 transition" />
            <button
                type="button"
                onClick={() => { setShowPassword(!showPassword) }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400"
            >
                {showPassword?<HugeiconsIcon icon={ViewIcon} color="white" strokeWidth={1.5}/>:<HugeiconsIcon icon={ViewOffSlashIcon} color="white" strokeWidth={1.5}/>}
            </button>
        </div>
    )
}