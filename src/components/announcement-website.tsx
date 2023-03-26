import { Heart, ListChecks, LogIn, ShoppingCart, UserCog } from 'lucide-react'

import { CardAnnouncementWebsite } from './card-announcement'
import { Icons } from './icons'
import { Button } from './ui/button'

export const AnnouncementWebsite = () => {
  return (
    <div className="mt-16 flex w-full flex-col gap-5 sm:h-[700px] sm:flex-row">
      <CardAnnouncementWebsite className="flex w-full flex-col justify-between gap-10 py-10 sm:gap-0 sm:p-14 sm:py-28">
        <ShoppingCart size={80} />

        <div>
          <h1 className="text-5xl font-black">Project X</h1>
          <span className="text-sm">by Iury França</span>
        </div>
        <span>
          Faça compras, salve favorite seus produtos preferidos na sua própria
          conta!
        </span>
        <Button className="flex gap-2 rounded-md">
          Conheça agora!
          <Icons.blankLink />
        </Button>
      </CardAnnouncementWebsite>
      <div className="flex w-full flex-col gap-5 sm:max-w-[340px]">
        <CardAnnouncementWebsite className="group flex h-full justify-center gap-10">
          <div className=" flex flex-col items-center justify-center gap-2 group-hover:text-emerald-400">
            <LogIn size={40} />
            <h1 className="text-xl font-semibold">Faça Login</h1>
          </div>
          <span className="text-slate-600 dark:text-slate-400">
            Com o <span className="font-semibold text-emerald-400">login</span>{' '}
            você mantém seu carrinho salvo
          </span>
        </CardAnnouncementWebsite>
        <CardAnnouncementWebsite className="group flex h-4/5 justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-2 group-hover:text-green-500">
            <ListChecks size={40} />
            <h1 className="text-xl font-semibold">Lista de Pedidos</h1>
          </div>
          <span className="text-slate-600 dark:text-slate-400">
            Tenha acesso a um{' '}
            <span className="font-semibold text-green-500">histórico</span> de
            pedidos
          </span>
        </CardAnnouncementWebsite>
      </div>
      <div className="flex w-full flex-col gap-5 sm:max-w-[340px]">
        <CardAnnouncementWebsite className="group flex h-4/5 justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-2 group-hover:text-red-500">
            <Heart size={40} />
            <h1 className="text-xl font-semibold">Favorite produtos</h1>
          </div>
          <span className="text-slate-600 dark:text-slate-400">
            Gostou de algum produto?{' '}
            <span className="font-semibold text-red-500">Favorite</span> ele
            para visita-lo novamente mis tarde
          </span>
        </CardAnnouncementWebsite>
        <CardAnnouncementWebsite className="group flex h-full justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-2 group-hover:text-fuchsia-600">
            <UserCog size={40} />
            <h1 className="text-xl font-semibold">Permissões de ADM</h1>
          </div>
          <span className="text-slate-600 dark:text-slate-400">
            ADMs tem acesso a diversas{' '}
            <span className="font-semibold text-fuchsia-600">
              configurações
            </span>{' '}
            e <span className="font-semibold text-fuchsia-600">permissões</span>{' '}
            de usurários
          </span>
        </CardAnnouncementWebsite>
      </div>
    </div>
  )
}
