/* This example requires Tailwind CSS v2.0+ */
import { Menu, Transition } from '@headlessui/react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon
} from '@heroicons/react/solid'
import clsx from 'clsx'
import { Fragment } from 'react'
import type { FC } from 'react'

interface PageHeading11Props {}
export const config = {
  title: 'With meta, actions, and breadcrumbs on dark'
}

const PageHeading11: FC<PageHeading11Props> = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-300 hover:text-white"
                >
                  Jobs
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-500"
                  aria-hidden="true"
                />
                <a
                  href="#"
                  className="ml-4 text-sm font-medium text-gray-300 hover:text-white"
                >
                  Engineering
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <h2 className="mt-2 text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl">
          Back End Developer
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <BriefcaseIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
              aria-hidden="true"
            />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <LocationMarkerIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
              aria-hidden="true"
            />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <CurrencyDollarIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
              aria-hidden="true"
            />
            $120k – $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <CalendarIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500"
              aria-hidden="true"
            />
            Closing on January 9, 2020
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <PencilIcon
              className="mr-2 -ml-1 h-5 w-5 text-gray-300"
              aria-hidden="true"
            />
            Edit
          </button>
        </span>
        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <LinkIcon
              className="mr-2 -ml-1 h-5 w-5 text-gray-300"
              aria-hidden="true"
            />
            View
          </button>
        </span>
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <CheckIcon className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            Publish
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="span" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
            More
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 mt-2 -ml-1 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={clsx(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={clsx(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}
export default PageHeading11
