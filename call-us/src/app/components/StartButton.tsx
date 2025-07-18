import React from 'react'
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
const StartButton = () => {
  return (
    <>
 <Link
        href="/auth"
        className="inline-flex items-center gap-2 rounded-md bg-[#222] px-6 py-3 text-white font-medium hover:bg-[#333] transition"
      >
        Get Started
        <ArrowRight size={18} />
      </Link>
    </>
  )
}

export default StartButton
