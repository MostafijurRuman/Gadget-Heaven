
export default function Faq() {
  return (
    <div>
        {/* Header Section */}
      <div className="bg-purple-600 text-white py-10 text-center rounded-2xl">
        <h1 className="text-3xl font-bold mb-4">Gadget Statistics</h1>
        <p className="mb-6 max-w-xl mx-auto">
          Discover detailed insights and data about the latest gadgets. Stay informed and make smarter choices with our comprehensive statistics!
        </p>
      </div>
    {/* FAQ Section */}
    <div className="mt-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-lg font-medium">
          <span className="flex items-center">
            <i className="mr-2 text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </i>
            What is the best gadget for productivity?
          </span>
        </div>
        <div className="collapse-content">
          <p>
            The best gadget for productivity depends on your needs, but popular choices include tablets, smartwatches, and noise-canceling headphones.
          </p>
        </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-lg font-medium">
          <span className="flex items-center">
            <i className="mr-2 text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </i>
            How do I choose the right gadget for my needs?
          </span>
        </div>
        <div className="collapse-content">
          <p>
            Consider your budget, the features you need, and read reviews to make an informed decision. Comparing specifications can also help.
          </p>
        </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-lg font-medium">
          <span className="flex items-center">
            <i className="mr-2 text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </i>
            Are refurbished gadgets worth buying?
          </span>
        </div>
        <div className="collapse-content">
          <p>
            Refurbished gadgets can be a great way to save money, but ensure you buy from a reputable seller and check the warranty.
          </p>
        </div>
        </div>
      </div>
    </div> </div>
  )
}
