import type { ReactNode } from 'react'
import logo from '@/assets/logo.svg'
import { Link } from '@/components/Elements'
import { Head } from '@/components/Head'

type LayoutProps = {
  children: ReactNode
  title: string
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <Link className="flex items-center text-white" to="/">
              <img className="h-24 w-auto" src={logo} alt="Workflow" />
            </Link>
          </div>

          <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
