
export default function PopularProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <div className="flex flex-col justify-between rounded-2xl p-6 hover:bg-gray-800 cursor-pointer duration-300 hover:text-white text-black shadow-md hover:shadow-lg">
            <div className="w-full flex justify-center mt-6">
                <img src="/popular.png" alt="Popular Products" width={200} height={150} className="object-contain" />
            </div>
            <div>
            <h3 className="text-xl font-bold mb-2">Popular Products</h3>
            <p className="text-sm opacity-70 mb-4">
                iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
            </p>
            <button className="cursor-pointer px-4 py-2 rounded-md text-sm font-semibold bg-gray-900 text-white">
                Shop Now
            </button>
            </div>
            
        </div>

        <div className="flex flex-col justify-between rounded-2xl p-6 hover:bg-gray-800 duration-300 cursor-pointer hover:text-white text-black shadow-md hover:shadow-lg">
            <div>
                <div className="w-full flex justify-center mt-6">
                    <img src="/ipad.png" alt="iPad Pro" width={200} height={150} className="object-contain mb-6.5 mt-4" />
                </div>
            <h3 className="text-xl font-bold mb-2">iPad Pro</h3>
            <p className="text-sm opacity-70 mb-4">
                iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
            </p>
            <button className="cursor-pointer px-4 py-2 rounded-md text-sm font-semibold bg-gray-900 text-white">
                Shop Now
            </button>
            </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl p-6 hover:bg-gray-800 hover:text-white duration-300 cursor-pointer text-black shadow-md hover:shadow-lg">
            <div>
            <div className="w-full flex justify-center mt-6 mb-9.5">
                <img src="/samsunggalaxy.png" alt="Samsung Galaxy" width={200} height={150} className="object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-2">Samsung Galaxy</h3>
            <p className="text-sm opacity-70 mb-4">
                iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
            </p>
            <button className="cursor-pointer px-4 py-2 rounded-md text-sm font-semibold bg-gray-900 text-white">
                Shop Now
            </button>
            </div>
            
        </div>
        <div className="flex flex-col justify-between rounded-2xl p-6 hover:bg-gray-800 hover:text-white duration-300 cursor-pointer shadow-md hover:shadow-lg">
            <div>
                <div className="w-full flex justify-center mt-6 mb-6">
                    <img src="/Macbook.png" alt="Macbook Pro" width={200} height={150} className="object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-2">Macbook Pro</h3>
                <p className="text-sm opacity-70 mb-4">
                    iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                </p>
                <button className="cursor-pointer px-4 py-2 rounded-md text-sm font-semibold bg-gray-900 text-white">
                    Shop Now
                </button>
            </div>
            
        </div>
    </div>
  );
}
