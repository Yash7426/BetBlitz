import React from 'react'
import emoji from '@/assets/emoji.svg'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Image from 'next/image'

const input = () => {
  return (
    <div className="relative mx-4 border-black-2 py-2">
        <Label htmlFor="chatInput"></Label>
        <Image src={emoji} alt="emoji" width={28} height={28} className="absolute right-4 top-7 cursor-pointer" />
        <Input id="chatInput" className="h-16 text-lg pr-12" placeholder="Type Something..." type="text" />
    </div>
  )
}

export default input
