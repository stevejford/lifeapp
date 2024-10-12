"use client"

import * as React from "react"
import Link from "next/link"
import { useAuth, UserButton } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

export function MainNav() {
  const { isSignedIn } = useAuth()

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold">Memorial App</span>
      </Link>
      <nav className="flex gap-6">
        {isSignedIn && (
          <>
            <Link
              href="/dashboard"
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                "hover:text-primary"
              )}
            >
              Dashboard
            </Link>
            <Link
              href="/create-memory"
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                "hover:text-primary"
              )}
            >
              Create Memory
            </Link>
            <Link
              href="/life-story"
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                "hover:text-primary"
              )}
            >
              Life Story
            </Link>
            <Link
              href="/biography"
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                "hover:text-primary"
              )}
            >
              Biography
            </Link>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        {!isSignedIn && (
          <>
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Sign Up</Button>
            </Link>
          </>
        )}
      </nav>
    </div>
  )
}
