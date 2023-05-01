import * as React from 'react'
import Link from 'next/link'
import { useAuthContext } from '@/core/context/auth-context'
import { useUserContext } from '@/core/context/user-context'
import { Label } from '@radix-ui/react-dropdown-menu'
import { LogIn, LogOut, Settings, UserCog } from 'lucide-react'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
            <Button
              size="sm"
              variant="ghost"
              className="relative cursor-pointer"
            >
              <UserCog />
              <span className="sr-only">Perfil</span>
            </Button>
          ) : (
            <Button
              size="sm"
              variant="ghost"
              className="relative flex cursor-pointer gap-2 bg-muted"
            >
              <Label className="font-semibold">{user?.displayName}</Label>
              <Avatar className="h-7 w-7">
                <AvatarImage src={user?.photoURL} alt={user?.displayName} />
                <AvatarFallback className="bg-ring dark:bg-ring">
                  {user?.displayName?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </Button>
          )}
        </DropdownMenuTrigger>
        {user ? (
          <>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Link href={`/account`} className="flex w-full">
                  <UserCog className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/settings`} className="flex w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={signOut}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </>
        ) : (
          <>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Crie uma conta!</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/login" className="flex w-full">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Entrar</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </>
        )}
      </DropdownMenu>
    </>
  )
}
