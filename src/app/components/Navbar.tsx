import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
            <div className="flex items-center space-x-2">
                <img src="/Logo.png" width={40} height={40} alt="" />
            </div>
            <div className="flex-1 px-6 hidden md:block"> 
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />            
            </div>
            <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
                <Link href="/" className="hover:text-blue-600 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:mt-1 hover:after:w-full">Home</Link>
                <Link href="/about" className="hover:text-blue-600 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black  after:transition-all after:duration-300 after:mt-1 hover:after:w-full">About</Link>
                <Link href="/contact" className="hover:text-blue-600 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black  after:transition-all after:duration-300 after:mt-1 hover:after:w-full">Contact</Link>
                <Link href="/blog" className="hover:text-blue-600 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black  after:transition-all after:duration-400 after:mt-1 hover:after:w-full">Blog</Link>
            </div>

            <div className="flex items-center space-x-4 ml-4">
                <img src="/Favorites.png" width={22} className="cursor-pointer" />
                <img src="/Cart1.png" width={22 } className="cursor-pointer" />
                <img src="/User.png" width={22} className="cursor-pointer" />
            </div>
        </div>
    </nav>


  );
}
