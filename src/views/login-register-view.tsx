import { useState } from 'react'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuthContext } from '@/core/context/auth-context'
import { LogIn } from 'lucide-react'

interface PageLoginProps {
  pageType: 'login' | 'register'
}

const LoginRegisterView = ({ pageType }: PageLoginProps) => {
  const { error, isPending, user, signIn, signUp, githubSignIn, googleSignIn } =
    useAuthContext()

  const handlerFormLogin = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      displayName: { value: string }
      email: { value: string }
      password: { value: string }
    }

    const displayName = pageType === 'register' ? target.displayName.value : ''
    const email = target.email.value
    const password = target.password.value

    if (pageType === 'login') {
      signIn({ email, password })
    } else {
      signUp({ email, password, displayName })
    }
  }

  return (
    <div className="relative flex w-full max-w-[340px] flex-col gap-6 rounded-md border border-slate-700 p-10 pb-20 dark:bg-slate-800">
      {pageType === 'login' ? (
        <Label className="text-xl font-semibold">Acesse sua conta</Label>
      ) : (
        <Label className="text-xl font-semibold">Crie uma conta</Label>
      )}

      <form onSubmit={handlerFormLogin} className="flex flex-col gap-3">
        {pageType === 'register' && (
          <div>
            <Label>
              Nome usuário
              <Input
                type="text"
                name="displayName"
                placeholder="Matheus Litt"
                className="font-semibold"
              />
            </Label>
          </div>
        )}

        <div>
          <Label>
            Email
            <Input
              type="email"
              name="email"
              placeholder="m@exemple.com"
              className="font-semibold"
            />
          </Label>
        </div>

        <div>
          <Label>
            Senha
            <Input
              type="password"
              placeholder="*******"
              className="font-semibold"
              name="password"
            />
          </Label>
        </div>
        <Button type="submit">
          {pageType === 'login' ? 'Entrar' : 'Registrar'}
          <LogIn className="ml-2 h-4 w-4" />
        </Button>
      </form>
      <div className="flex justify-center text-xs uppercase">
        <span className="bg-white px-2 text-slate-600">Or continue with</span>
      </div>
      <div className="flex justify-between gap-2">
        <Button onClick={githubSignIn} className="w-full">
          <Icons.gitHub className="mr-2 h-4 w-4" />
          Github
        </Button>
        <Button onClick={googleSignIn} className="w-full">
          <Icons.googleBlack className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>

      {error && (
        <Label className="absolute bottom-8 right-10 left-10 text-xs text-red-700">
          {error}
        </Label>
      )}

      {pageType === 'login' ? (
        <Link href="/register" className="absolute bottom-1 right-2 text-xs">
          Não te conta? Crie uma agora mesmo!
        </Link>
      ) : (
        <Link href="/login" className="absolute bottom-1 right-2 text-xs">
          Já tem uma conta? Entre agora mesmo!
        </Link>
      )}
    </div>
  )
}

export default LoginRegisterView
