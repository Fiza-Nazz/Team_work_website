import { Search, ShoppingBag, User } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 lg:px-10 py-4 bg-white border-b border-gray-100">
      {/* Left Navigation */}
      <div className="hidden md:flex gap-8 items-center">
        <a className="font-medium text-gray-900 hover:text-gray-700" href="#">
          Home
        </a>
        <a className="font-medium text-gray-700 hover:text-gray-900" href="#">
          Product
        </a>
        <a className="font-medium text-gray-700 hover:text-gray-900" href="#">
          Categories
        </a>
        <a className="font-medium text-red-500 hover:text-red-600" href="#">
          SALE
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Center Logo */}
      <div className="text-center">
        <h1 className="font-bold text-xl lg:text-2xl text-gray-900 tracking-wider">MEJIWOO</h1>
        <p className="text-sm text-gray-600 tracking-wide">미지우</p>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-3 lg:gap-4">
        <div className="hidden sm:flex items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-200 px-3 py-1.5 rounded-md text-sm w-24 lg:w-32 focus:outline-none focus:border-gray-300"
          />
          <Search className="absolute right-2 h-4 w-4 text-gray-400" />
        </div>
        <Search className="sm:hidden h-5 w-5 text-gray-600" />
        <ShoppingBag className="h-5 w-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
        <User className="h-5 w-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
      </div>
    </nav>
  )
}