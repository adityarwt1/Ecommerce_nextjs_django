export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">ShopEasy</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-blue-600 hover:text-blue-800">
                Home
              </a>
              <a href="/products" className="text-blue-600 hover:text-blue-800">
                Products
              </a>
              <a href="/about" className="text-blue-600 hover:text-blue-800">
                About
              </a>
              <a href="/contact" className="text-blue-600 hover:text-blue-800">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="/signin" className="text-blue-600 hover:text-blue-800">
                Sign In
              </a>
              <a
                href="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
              >
                Sign Up
              </a>
              <a href="/cart" className="text-blue-600 hover:text-blue-800">
                Cart (0)
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Sign Up Content */}
      <section className="py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-blue-100 rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Create Account
              </h2>
              <p className="text-blue-700">
                Join ShopEasy and start shopping today
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-blue-900 font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-blue-900 font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-blue-900 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-blue-900 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-blue-900 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Create a password"
                />
                <p className="text-blue-600 text-sm mt-1">
                  Must be at least 8 characters long
                </p>
              </div>

              <div>
                <label className="block text-blue-900 font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-blue-700">
                    Subscribe to our newsletter for deals and updates
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="ml-2 text-blue-700">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-blue-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-blue-600">
                    Or sign up with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-2 px-4 border border-blue-300 rounded-lg bg-white text-blue-700 hover:bg-blue-50">
                  <span className="sr-only">Sign up with Google</span>
                  <div className="w-5 h-5 bg-blue-600 rounded"></div>
                  <span className="ml-2">Google</span>
                </button>
                <button className="w-full inline-flex justify-center py-2 px-4 border border-blue-300 rounded-lg bg-white text-blue-700 hover:bg-blue-50">
                  <span className="sr-only">Sign up with Facebook</span>
                  <div className="w-5 h-5 bg-blue-600 rounded"></div>
                  <span className="ml-2">Facebook</span>
                </button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-blue-700">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
            Member Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Exclusive Deals
              </h4>
              <p className="text-blue-700">
                Access to member-only discounts and sales
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎁</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Reward Points
              </h4>
              <p className="text-blue-700">Earn points with every purchase</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📦</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Order Tracking
              </h4>
              <p className="text-blue-700">
                Track your orders and delivery status
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💌</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Early Access
              </h4>
              <p className="text-blue-700">
                Be first to know about new products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">ShopEasy</h5>
              <p className="text-blue-200">
                Your trusted online shopping destination
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-blue-200 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-blue-200 hover:text-white"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-blue-200 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-blue-200 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Customer Service</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <p className="text-blue-200">Email: info@shopeasy.com</p>
              <p className="text-blue-200">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200">
              &copy; 2024 ShopEasy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
