const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  }
  // More questions...
]

export const config = {
  title: 'Two columns'
}

export default function FAQ7() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl divide-y-2 divide-gray-200 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Frequently asked questions
        </h2>
        <div className="mt-6 pt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
            {faqs.map(faq => (
              <div key={faq.id}>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
