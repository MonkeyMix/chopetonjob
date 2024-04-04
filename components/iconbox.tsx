"use client"
import Image from "next/image"
import { inter, lusitana } from '@/components/ui/fonts';

interface IconBoxProps {
    icon: string;
    title: string;
    description: string;
  }

export function IconBox({icon, title, description}: IconBoxProps) {

  return (
    <div className="flex flex-col items-center">
        <Image
            src={icon}
            width={50}
            height={50}
            className="h-20 w-20 text-muted-foreground rounded-xl bg-emerald-100 p-5 hover:bg-pink-300 transition-colors duration-500"
            alt="logo"
        />      
      <div className="flex flex-col pt-5">
        <h4 className={`${lusitana.className} font-[100] text-[20px] leading-[1.2] tracking-[-0.027em] text-center`}>
          <span>{title}</span>
        </h4>
        <div className={`${lusitana.className} font-[100] text-[20px] leading-[1.2] tracking-[-0.027em] text-center text-slate-500/80 pt-5`}>
          <p >{description}</p>
        </div>
      </div>
    </div>
  );
}