import { useState } from 'react'
import Link from 'next/link'
import { useAuthContext } from '@/core/context/auth-context'
import { Icon } from '@radix-ui/react-select'
import { FolderUp, LogIn } from 'lucide-react'

import { Icons } from '@/components/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface PageLoginProps {
  pageType: 'login' | 'register'
}

const LoginRegisterView = ({ pageType }: PageLoginProps) => {
  const [previewImage, setPreviewImage] = useState<string>()
  const [photoSelected, setPhotoSelected] = useState<File>()

  const { isPending, signIn, signUp, githubSignIn, googleSignIn } =
    useAuthContext()

  const handlerFormLogin = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      photoURL: { value: HTMLInputElement }
      displayName: { value: string }
      email: { value: string }
      password: { value: string }
    }

    const photoURL = photoSelected ? photoSelected : null
    const displayName = pageType === 'register' ? target.displayName.value : ''
    const email = target.email.value
    const password = target.password.value

    if (pageType === 'login') {
      signIn({ email, password })
    } else {
      signUp({ email, password, displayName, photoURL })
    }
  }

  const handleGetFilePreview = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement
    const photoPreview = target?.files?.[0]
    setPhotoSelected(target?.files?.[0])

    if (photoPreview) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(photoPreview)
    }
  }

  return (
    <div className="relative flex w-full max-w-[360px] flex-col gap-6 rounded-md border border-slate-700 p-10 shadow-2xl dark:bg-slate-800 dark:shadow-slate-800">
      {pageType === 'login' ? (
        <Label className="text-xl font-semibold">Acesse sua conta</Label>
      ) : (
        <Label className="text-xl font-semibold">Crie uma conta</Label>
      )}

      <form onSubmit={handlerFormLogin} className="flex flex-col gap-3">
        {pageType === 'register' && (
          <>
            <div className="mt-4 flex flex-col items-center gap-2">
              <label className="flex cursor-pointer flex-col items-center gap-2">
                <div className="rounded-full border-[3px] border-dashed border-slate-900 p-1 dark:border-slate-300">
                  <Avatar className="h-28 w-28">
                    <AvatarImage src={previewImage} alt="Foto de Perfil" />
                    <AvatarFallback className="bg-slate-300 dark:bg-slate-500">
                      <FolderUp size={38} />
                    </AvatarFallback>
                  </Avatar>
                </div>
                Foto de Perfil
                <input
                  id="image"
                  name="photoURL"
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  style={{ display: 'none' }}
                  onChange={handleGetFilePreview}
                />
              </label>
            </div>
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
          </>
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

      {pageType === 'login' ? (
        <Link href="/register" className="flex w-full flex-row gap-1 text-sm">
          Não te conta? Crie uma agora mesmo!
          <Icons.blankLink />
        </Link>
      ) : (
        <Link href="/login" className="flex w-full flex-row gap-1 text-sm">
          Já tem conta? Entre agora mesmo!
          <Icons.blankLink />
        </Link>
      )}

      {isPending && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black/60">
          <div className="fixed flex h-52 w-52 flex-col items-center justify-center gap-5 rounded-md bg-slate-800 shadow-xl dark:bg-slate-200">
            <Icons.spinnerLoading />
            <h2 className="text-center text-xl font-semibold text-slate-50 dark:text-slate-800">
              {pageType === 'login' ? 'Fazendo Login...' : 'Registrando...'}
            </h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoginRegisterView
