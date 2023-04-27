import * as React from 'react'
import Link from 'next/link'
import { useAuthContext } from '@/core/context/auth-context'
import { useUserContext } from '@/core/context/user-context'
import { Label } from '@radix-ui/react-dropdown-menu'
import { LogIn, LogOut, UserCog } from 'lucide-react'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function AuthToggle() {
  const { signOut } = useAuthContext()
  const { user } = useUserContext()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {!user ? (
            <div
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost',
                className: 'relative cursor-pointer',
              })}
              aria-label="Button User"
            >
              <UserCog />
              <span className="sr-only">Perfil</span>
            </div>
          ) : (
            <div
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost',
                className: 'relative flex cursor-pointer gap-2 bg-muted',
              })}
              aria-label="Button User"
            >
              <Label className="font-semibold">{user?.displayName}</Label>
              <Avatar className="h-7 w-7">
                <AvatarImage src={user?.photoURL} alt={user?.displayName} />
                <AvatarFallback className="bg-ring dark:bg-ring">
                  {user?.displayName?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem disabled={!!user}>
            <Link href="/login" className="flex w-full">
              <LogIn className="mr-2 h-4 w-4" />
              <span>Entrar</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={!user}
            className="cursor-pointer"
            onClick={signOut}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
