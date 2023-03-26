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
          'relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-slate-200/80 bg-slate-100 p-6 text-center transition-all hover:scale-[1.03] hover:cursor-default dark:border-slate-800 dark:bg-slate-800',
          className
        )}
      >
        {children}
      </div>
    </>
  )
}
