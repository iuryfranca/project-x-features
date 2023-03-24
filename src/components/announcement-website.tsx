import { CardAnnouncementWebsite } from './card-announcement'

export const AnnouncementWebsite = () => {
  return (
    <div className="mt-16 flex h-[600px] w-full flex-row gap-5">
      <CardAnnouncementWebsite className="w-full">
        Teste
      </CardAnnouncementWebsite>
      <div className="flex w-full flex-col gap-5">
        <CardAnnouncementWebsite className="h-full">
          Teste
        </CardAnnouncementWebsite>
        <CardAnnouncementWebsite className="h-full">
          Teste
        </CardAnnouncementWebsite>
      </div>
      <div className="flex w-full flex-col gap-5">
        <CardAnnouncementWebsite className="h-full">
          Teste
        </CardAnnouncementWebsite>
        <CardAnnouncementWebsite className="h-full">
          Teste
        </CardAnnouncementWebsite>
      </div>
    </div>
  )
}
