'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { Register } from "@/components/register"

export function AppHeader() {
  return (
        <div className="bg-emerald-100/80 sticky top-0 z-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
              <div>
                <Link className="mr-6 hidden lg:flex" href="#">
                  <Logo/>
                </Link>
              </div>
              <div className="ml-auto flex gap-2">
                <div className="ml-auto flex items-center">
                  <Register/>
                </div>          
              </div>
            </header>
          </div>
        </div>
  )
};