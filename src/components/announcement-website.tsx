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
        <span>
          Faça compras, save seus items no carrinho e favorite os preferidos!
        </span>
        <Button className="flex gap-2 rounded-md">
          Conheça agora!
          <Icons.blankLink />
        </Button>
      </CardAnnouncementWebsite>
      <div className="flex w-full max-w-[340px] flex-col gap-5">
        <CardAnnouncementWebsite className="h-full">
          <LogIn size={40} />
          Faça Login
          <span>- com o login vc mantém seu carrinho salvo</span>
        </CardAnnouncementWebsite>
        <CardAnnouncementWebsite className="h-4/5">
          <ListChecks size={40} />
          Lista de Pedidos
          <span>tenha acesso a sum histórico de pedidos</span>
        </CardAnnouncementWebsite>
      </div>
      <div className="flex w-full max-w-[340px] flex-col gap-5">
        <CardAnnouncementWebsite className="h-4/5">
          <Heart size={40} />
          Favorite produtos
          <span>
            gostou de algum produto? favorite ele para poder retornar a sua
            pagina posteriormente
          </span>
        </CardAnnouncementWebsite>
        <CardAnnouncementWebsite className="h-full">
          <UserCog size={40} />
          Permissões de ADM
          <span>
            - se vc for ADM poderá ter acesso a diversa configurações dep
            permissões de usurários
          </span>
        </CardAnnouncementWebsite>
      </div>
    </div>
  )
}
