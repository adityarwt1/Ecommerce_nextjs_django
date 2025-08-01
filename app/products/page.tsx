import React from "react";

export default function ProductsPage() {
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
              <a href="/products" className="text-blue-800 font-semibold">
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
              <a href="/cart" className="text-blue-600 hover:text-blue-800">
                Cart (0)
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center">
            All Products
          </h2>
          <p className="text-blue-700 text-center mt-2">
            Browse our complete collection
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=250&width=250"
                alt="Wireless Headphones"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Wireless Headphones
                </h3>
                <p className="text-blue-600 mb-2">
                  Premium sound quality with noise cancellation
                </p>
                <p className="text-2xl font-bold text-blue-800 mb-4">$99.99</p>
                <a
                  href="/products/wireless-headphones"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=250&width=250"
                alt="Smartphone"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Smartphone
                </h3>
                <p className="text-blue-600 mb-2">
                  Latest technology with advanced camera
                </p>
                <p className="text-2xl font-bold text-blue-800 mb-4">$699.99</p>
                <a
                  href="/products/smartphone"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=250&width=250"
                alt="Laptop"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Laptop
                </h3>
                <p className="text-blue-600 mb-2">
                  High performance for work and gaming
                </p>
                <p className="text-2xl font-bold text-blue-800 mb-4">
                  $1299.99
                </p>
                <a
                  href="/products/laptop"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=250&width=250"
                alt="Smartwatch"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Smartwatch
                </h3>
                <p className="text-blue-600 mb-2">
                  Fitness tracking and health monitoring
                </p>
                <p className="text-2xl font-bold text-blue-800 mb-4">$299.99</p>
                <a
                  href="/products/smartwatch"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Product 5 */}
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=250&width=250"
                alt="Tablet"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Tablet
                </h3>
                <p className="text-blue-600 mb-2">
                  Perfect for work and entertainment
                </p>
                <p className="text-2xl font-bold text-blue-800 mb-4">$499.99</p>
                <a
                  href="/products/tablet"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Product 6 */}
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=250&width=250"
                alt="Bluetooth Speaker"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Bluetooth Speaker
                </h3>
                <p className="text-blue-600 mb-2">
                  Portable with excellent sound quality
                </p>
                <p className="text-2xl font-bold text-blue-800 mb-4">$79.99</p>
                <a
                  href="/products/bluetooth-speaker"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Product 7 */}
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=250&width=250"
                alt="Gaming Mouse"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Gaming Mouse
                </h3>
                <p className="text-blue-600 mb-2">
                  Precision gaming with RGB lighting
                </p>
                <p className="text-2xl font-bold text-blue-800 mb-4">$59.99</p>
                <a
                  href="/products/gaming-mouse"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Product 8 */}
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=250&width=250"
                alt="Wireless Keyboard"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Wireless Keyboard
                </h3>
                <p className="text-blue-600 mb-2">
                  Comfortable typing experience
                </p>
                <p className="text-2xl font-bold text-blue-800 mb-4">$89.99</p>
                <a
                  href="/products/wireless-keyboard"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
                >
                  View Details
                </a>
              </div>
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
