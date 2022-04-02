import type { FC } from 'react'

export const config = {
  title: 'Inputs with inset labels and shared borders'
}

interface InputGroup17Props {}

const InputGroup17: FC<InputGroup17Props> = () => {
  return (
    <div className="isolate -space-y-px rounded-md shadow-sm">
      <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="name"
          className="block text-xs font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Jane Doe"
        />
      </div>
      <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="job-title"
          className="block text-xs font-medium text-gray-900"
        >
          Job Title
        </label>
        <input
          type="text"
          name="job-title"
          id="job-title"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Head of Tomfoolery"
        />
      </div>
    </div>
  )
}

export default InputGroup17
