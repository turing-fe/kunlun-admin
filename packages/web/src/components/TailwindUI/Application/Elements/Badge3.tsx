import type { FC } from 'react'

interface Badge3Props {}

export const config = {
  title: 'Badge with dot'
}

const Badge3: FC<Badge3Props> = () => {
  return (
    <>
      <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
        <svg
          className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
        Small
      </span>
      <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800">
        <svg
          className="-ml-1 mr-1.5 h-2 w-2 text-indigo-400"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
        Large
      </span>
    </>
  )
}

export default Badge3
