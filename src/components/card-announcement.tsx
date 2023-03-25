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
          'hover: relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-slate-200/80 bg-slate-200 p-6 text-center shadow-md transition-all hover:scale-[1.02] dark:border-slate-800 dark:bg-slate-800',
          className
        )}
      >
        {children}
      </div>
    </>
  )
}
