/* eslint-disable prettier/prettier */
import type { FC } from 'react'
interface Dividers4Props {}

export const config = {
  title: 'With title'
}
const Dividers4: FC<Dividers4Props> = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-lg font-medium text-gray-900">
          Projects
        </span>
      </div>
    </div>
  )
}
export default Dividers4
