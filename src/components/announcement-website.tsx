import { Heart, ListChecks, LogIn, ShoppingCart, UserCog } from 'lucide-react'

import { CardAnnouncementWebsite } from './card-announcement'
import { Icons } from './icons'
import { Button } from './ui/button'

export const AnnouncementWebsite = () => {
  return (
    <div className="mt-16 flex h-[700px] w-full flex-row gap-5">
      <CardAnnouncementWebsite className="flex w-full flex-col justify-between p-14 py-28">
        <ShoppingCart size={80} />

        <div>
          <h1 className="text-5xl font-black">Project X</h1>
          <span className="text-sm">by Iury França</span>
        </div>
        <span>Faça compras, salve e favorite seus produtos preferidos!</span>
        <Button className="flex gap-2 rounded-md">
          Conheça agora!
          <Icons.blankLink />
        </Button>
      </CardAnnouncementWebsite>
      <div className="flex w-full max-w-[340px] flex-col gap-5">
        <CardAnnouncementWebsite className="flex h-full justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <LogIn size={40} />
            <h1 className="text-xl font-semibold">Faça Login</h1>
          </div>
          <span className="text-slate-600 dark:text-slate-400">
            Com o login você mantém seu carrinho salvo
          </span>
        </CardAnnouncementWebsite>
        <CardAnnouncementWebsite className="flex h-4/5 justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <ListChecks size={40} />
            <h1 className="text-xl font-semibold">Lista de Pedidos</h1>
          </div>
          <span className="text-slate-600 dark:text-slate-400">
            Tenha acesso a um histórico de pedidos
          </span>
        </CardAnnouncementWebsite>
      </div>
      <div className="flex w-full max-w-[340px] flex-col gap-5">
        <CardAnnouncementWebsite className="flex h-4/5 justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <Heart size={40} />
            <h1 className="text-xl font-semibold">Favorite produtos</h1>
          </div>
          <span className="text-slate-600 dark:text-slate-400">
            Gostou de algum produto? Favorite ele para poder retornar a sua
            pagina posteriormente
          </span>
        </CardAnnouncementWebsite>
        <CardAnnouncementWebsite className="flex h-full justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <UserCog size={40} />
            <h1 className="text-xl font-semibold">Permissões de ADM</h1>
          </div>
          <span className="text-slate-600 dark:text-slate-400">
            ADMs terá acesso a diversas configurações e permissões de usurários
          </span>
        </CardAnnouncementWebsite>
      </div>
    </div>
  )
}
