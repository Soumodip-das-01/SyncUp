import React from 'react'
import { LucideArrowUpRight } from 'lucide-react'
import { Space_Grotesk } from 'next/font/google'

const space = Space_Grotesk({
  subsets: ["latin"],
});

export default function Logo() {
    return (
        <div>
            <h1 className={`text-3xl tracking-tight flex font-bold ${space.className}`}>
                <span className="text-sky-500 flex items-center justify-center">Sync</span>
                <span className="text-violet-500 flex items-center justify-center">Up</span>
            </h1>
        </div>
    )
}


