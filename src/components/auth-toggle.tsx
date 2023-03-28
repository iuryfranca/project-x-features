import * as React from 'react'
import Link from 'next/link'
import { useAuthContext } from '@/core/context/auth-context'
import { Label } from '@radix-ui/react-dropdown-menu'
import { User as UserTypes } from 'firebase/auth'
import { LogIn, LogOut, UserCog } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function AuthToggle() {
  const { user, signOut } = useAuthContext()
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {!user ? (
            <Button variant="ghost" size="sm">
              <UserCog className="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100" />
              <span className="sr-only">Perfil</span>
            </Button>
          ) : (
            <Button variant="subtle" size="sm" className="flex gap-2">
              <Label className="font-semibold">{user.displayName}</Label>
              <Avatar className="h-7 w-7">
                <AvatarImage src={user.photoURL} alt={user.displayName} />
                <AvatarFallback className="bg-slate-300 dark:bg-slate-500">
                  {user.displayName.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </Button>
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
