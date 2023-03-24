import { cn } from '../lib/utils'

interface CardAnnouncementWebsiteProps {
  children: React.ReactNode
  className?: string
}

export const CardAnnouncementWebsite = ({
  children,
  className,
}: CardAnnouncementWebsiteProps) => {
  return (
    <>
      <div
        className={cn(
          'relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-slate-200/80 p-6 text-center shadow-md',
          className
        )}
      >
        {children}
      </div>
    </>
  )
}
