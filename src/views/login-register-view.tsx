import Link from 'next/link'

import { Icons } from '@/src/components/icons'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'

const LoginRegisterView = ({ page }: { page: 'login' | 'register' }) => {
  return (
    <div className="relative flex w-full max-w-xs flex-col gap-6 rounded-md border border-slate-700 p-10 pb-12 dark:bg-slate-800">
      {page === 'login' ? (
        <Label className="text-xl font-semibold">Acesse sua conta</Label>
      ) : (
        <Label className="text-xl font-semibold">Crie uma conta</Label>
      )}

      <div className="flex flex-col gap-3">
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="m@exemple.com"
            className="font-semibold"
          />
        </div>

        <div>
          <Label>Senha</Label>
          <Input
            type="password"
            placeholder="*****"
            className="font-semibold"
          />
        </div>
      </div>
      <div className="flex justify-center text-xs uppercase">
        <span className="bg-white px-2 text-slate-600">Or continue with</span>
      </div>
      <Button>
        <Icons.gitHub className="mr-2 h-4 w-4" />
        Github
      </Button>
      <Button>
        <Icons.googleBlack className="mr-2 h-4 w-4" />
        Google
      </Button>

      {page === 'login' ? (
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
