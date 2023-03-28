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

  const { error, isPending, signIn, signUp, githubSignIn, googleSignIn } =
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
    <div className="relative flex w-full max-w-[360px] flex-col gap-6 rounded-md border border-slate-700 p-10 dark:bg-slate-800">
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

      {error && (
        <Label className="absolute bottom-8 right-10 left-10 text-xs text-red-700">
          {error}
        </Label>
      )}

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
            <svg
              aria-hidden="true"
              className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>{' '}
            <h2 className="text-center text-xl font-semibold text-slate-50 dark:text-slate-800">
              Carregando...
            </h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoginRegisterView
