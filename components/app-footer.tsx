'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"

export function AppFooter() {
  return (
        <div className="bg-black top-0 z-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <footer className="flex h-80 w-full shrink-0 items-center px-4 md:px-6 justify-between">
              <div className="text-white">
                Démarquez vous en entretien
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-white">
                  Contact
                </div>
                <div className="text-white">
                  admin@chopetonjob.com
                </div>
              </div>
            </footer>
          </div>
        </div>
  )
};