import clsx from 'clsx'
import type { FC } from 'react'
interface VerticalNavigation2Props {}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false }
]

const VerticalNavigation2: FC<VerticalNavigation2Props> = () => {
  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {navigation.map(item => (
        <a
          key={item.name}
          href={item.href}
          className={clsx(
            item.current
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'flex items-center rounded-md px-3 py-2 text-sm font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <span className="truncate">{item.name}</span>
        </a>
      ))}
    </nav>
  )
}
export default VerticalNavigation2
