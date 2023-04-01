import Link from 'next/link'
import {
  Heart,
  Key,
  Lightbulb,
  ListChecks,
  LogIn,
  Settings,
  ShoppingCart,
  UserCog,
} from 'lucide-react'
import Tilt from 'react-parallax-tilt'

import { CardAnnouncementWebsite } from './card-announcement'
import { Icons } from './icons'
import { Button } from './ui/button'

export const AnnouncementWebsite = () => {
  return (
    <div className="mt-16 flex w-full flex-col gap-5 sm:h-[700px] sm:flex-row">
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        gyroscope
        className="relative flex w-full flex-col items-center justify-between gap-10 rounded-lg border border-slate-200/80 bg-slate-100 p-6 py-10 text-center hover:cursor-default dark:border-slate-800 dark:bg-slate-800 sm:gap-0 sm:p-14 sm:py-28"
      >
        <ShoppingCart size={80} />

        <div>
          <h1 className="text-5xl font-black">Project X</h1>
          <span className="text-sm">by Iury França</span>
        </div>
        <span>
          Faça compras, salve favorite seus produtos preferidos na sua própria
          conta!
        </span>
        <Link
          href="/shopping"
          aria-label="Acessar página de listagem de produtos"
        >
          <Button className="flex gap-2 rounded-md">
            Conheça agora!
            <Icons.blankLink />
          </Button>
        </Link>
      </Tilt>
      <div className="flex w-full flex-col gap-5 sm:max-w-[340px]">
        <CardAnnouncementWebsite className="h-full cursor-pointer p-0">
          <Link
            href="/login"
            className="flex h-full flex-col justify-center gap-10 p-6"
            aria-label="Acessar página de login"
          >
            <div className=" flex flex-col items-center justify-center gap-2">
              <Key size={40} className="animate-wiggle text-emerald-400" />
              <h1 className="text-xl font-semibold text-emerald-400">
                Faça Login
              </h1>
            </div>
            <span className="text-slate-600 dark:text-slate-400">
              Com o{' '}
              <span className="font-semibold text-emerald-400">login</span> você
              mantém seu carrinho salvo
            </span>
          </Link>
        </CardAnnouncementWebsite>
        <CardAnnouncementWebsite className="h-4/5 gap-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <Lightbulb className="animate-pulse text-amber-400" size={40} />
            <h1 className="text-xl font-semibold text-amber-400">
              Lista de Pedidos
            </h1>
          </div>
          <span className="text-slate-600 dark:text-slate-400">
            Tenha acesso a um{' '}
            <span className="font-semibold text-amber-400">histórico</span> de
            pedidos
          </span>
        </CardAnnouncementWebsite>
      </div>
      <div className="flex w-full flex-col gap-5 sm:max-w-[340px]">
        <CardAnnouncementWebsite className="h-4/5 gap-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <Heart
              size={40}
              strokeWidth={2}
              className="bg-text-red-500 animate-beat text-red-500"
            />
            <h1 className="text-xl font-semibold text-red-500">
              Favorite produtos
            </h1>
          </div>
          <span className="text-slate-600 dark:text-slate-400">
            Gostou de algum produto?{' '}
            <span className="font-semibold text-red-500">Favorite</span> ele
            para visita-lo novamente mis tarde
          </span>
        </CardAnnouncementWebsite>
        <CardAnnouncementWebsite className="h-full gap-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <Settings size={40} className="animate-spin-slow text-violet-500" />
            <h1 className="text-xl font-semibold text-violet-500">
              Permissões de ADM
            </h1>
          </div>
          <span className="text-slate-600 dark:text-slate-400">
            ADMs tem acesso a diversas{' '}
            <span className="font-semibold text-violet-500">configurações</span>{' '}
            e <span className="font-semibold text-violet-500">permissões</span>{' '}
            de usurários
          </span>
        </CardAnnouncementWebsite>
      </div>
    </div>
  )
}
