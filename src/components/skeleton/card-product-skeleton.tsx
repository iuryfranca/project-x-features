const CardProductSkeleton = () => {
  return (
    <div className="relative flex h-[350px] w-full max-w-[160px] flex-col items-center justify-between rounded-lg border border-slate-200/80 bg-slate-200 text-center transition-all hover:scale-[1.02] hover:cursor-default dark:border-slate-800 dark:bg-slate-700 md:h-[350px] md:w-52 md:max-w-none">
      <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-400 dark:bg-slate-500">
        <span className="text-xs font-bold text-slate-200 dark:text-slate-700"></span>
      </div>

      <div className="flex h-12 w-full items-center justify-start p-2 py-3">
        <div className="h-full w-full animate-pulse rounded-sm bg-gray-400 dark:bg-gray-500"></div>
      </div>
      <div className="relative flex h-40 w-full animate-pulse items-center justify-center overflow-hidden bg-gray-300 dark:bg-gray-400"></div>
      <div className="flex h-20 w-full items-center justify-start p-2">
        <div className="h-full w-full animate-pulse rounded-sm bg-gray-400 dark:bg-gray-500"></div>
      </div>

      <div className="flex w-full items-center justify-between gap-2 p-2 pt-0">
        <div className="flex flex-row gap-2">
          <div className="flex h-10 w-full items-center">
            <div className="h-8 w-8 animate-pulse rounded-sm bg-gray-400 dark:bg-gray-500"></div>
          </div>
          <div className="flex h-10 w-full items-center">
            <div className="h-8 w-8 animate-pulse rounded-sm bg-gray-400 dark:bg-gray-500"></div>
          </div>
        </div>
        <div className="flex h-10 w-full items-center">
          <div className="h-8 w-full animate-pulse rounded-sm bg-gray-400 dark:bg-gray-500"></div>
        </div>
      </div>
    </div>
  )
}

export default CardProductSkeleton
