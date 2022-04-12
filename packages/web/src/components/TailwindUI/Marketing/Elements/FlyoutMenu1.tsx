import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { Fragment } from 'react'

const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon }
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Webinars', href: '#', icon: DesktopComputerIcon }
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80'
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80'
  }
]

export const config = {
  title: 'Full-width two-columns'
}

export default function FlyoutMenu1() {
  return (
    <Popover className="relative z-0">
      {({ open }) => {
        return (
          <>
            <div className="relative z-10 bg-white shadow">
              <div className="mx-auto flex max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <Popover.Button
                  className={clsx(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  )}
                >
                  <span>Solutions</span>
                  <ChevronDownIcon
                    className={clsx(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 z-10 transform shadow-lg">
                <div className="absolute inset-0 flex" aria-hidden="true">
                  <div className="w-1/2 bg-white" />
                  <div className="w-1/2 bg-gray-50" />
                </div>
                <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                  <nav
                    className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                    aria-labelledby="solutions-heading"
                  >
                    <h2 id="solutions-heading" className="sr-only">
                      Solutions menu
                    </h2>
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                        Company
                      </h3>
                      <ul role="list" className="mt-5 space-y-6">
                        {company.map(item => (
                          <li key={item.name} className="flow-root">
                            <a
                              href={item.href}
                              className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-4">{item.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                        Resources
                      </h3>
                      <ul role="list" className="mt-5 space-y-6">
                        {resources.map(item => (
                          <li key={item.name} className="flow-root">
                            <a
                              href={item.href}
                              className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-4">{item.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                  <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                        From the blog
                      </h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {blogPosts.map(post => (
                          <li key={post.id} className="flow-root">
                            <a
                              href={post.href}
                              className="-m-3 flex rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-100"
                            >
                              <div className="hidden flex-shrink-0 sm:block">
                                <img
                                  className="h-20 w-32 rounded-md object-cover"
                                  src={post.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1 sm:ml-8">
                                <h4 className="truncate text-base font-medium text-gray-900">
                                  {post.name}
                                </h4>
                                <p className="mt-1 text-sm text-gray-500">
                                  {post.preview}
                                </p>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
                      >
                        View all posts <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )
      }}
    </Popover>
  )
}
