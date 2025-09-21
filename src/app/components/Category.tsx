export default function Category(){
    return <div className="flex flex-col items-center pt-10 pb-15">

        <h2 className="text-[25px] font-bold text-black relative inline-block
            after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black 
            after:transition-all after:duration-300 after:mt-1
            hover:after:w-full mb-10 items-center cursor-pointer">
            Browse By Category
        </h2>

        <div className="flex gap-[30px] items-center ">
            <div className="phones bg-gray-200 px-[40px] py-[24px] rounded-2xl shadow-lg hover:bg-gray-400 hover:scale-115 hover:shadow-blue-300 transition-all duration-300 cursor-pointer">
                <img src="/Phones.png" className="ml-1" alt="" />
                <p>Phones</p>
            </div>
            <div className="watches bg-gray-200 px-[40px] py-[24px] rounded-2xl shadow-lg hover:bg-gray-400 hover:shadow-neon-blue hover:scale-115 hover:shadow-blue-300 transition-all duration-300 cursor-pointer">
                <img src="/Watches.png" className="ml-7.5" alt="" />
                <p>Smart Watches</p>
            </div>
            <div className="cameras bg-gray-200 px-[40px] py-[24px] rounded-2xl shadow-lg hover:bg-gray-400 hover:shadow-neon-blue hover:scale-115 hover:shadow-blue-300 transition-all duration-300 cursor-pointer">
                <img src="/Cameras.png" className="ml-2.5" alt="" />
                <p>Cameras</p>
            </div>
            <div className="headphones bg-gray-200 px-[40px] py-[24px] rounded-2xl shadow-lg hover:bg-gray-400 hover:shadow-neon-blue hover:scale-115 hover:shadow-blue-300 transition-all duration-300 cursor-pointer">
                <img src="/Headphones.png" className="ml-5" alt="" />
                <p>Headphones</p>
            </div>
            <div className="computer bg-gray-200 px-[40px] py-[24px] rounded-2xl shadow-lg hover:bg-gray-400 hover:shadow-neon-blue hover:scale-115 hover:shadow-blue-300 transition-all duration-300 cursor-pointer">
                <img src="/Computers.png" className="ml-4" alt="" />
                <p>Computers</p>
            </div>
            <div className="phones bg-gray-200 px-[40px] py-[24px] rounded-2xl shadow-lg hover:bg-gray-400 hover:shadow-neon-blue hover:scale-115 hover:shadow-blue-300 transition-all duration-300 cursor-pointer">
                <img src="/Phones.png" className="ml-1" alt="" />
                <p>Phones</p>
            </div>
        </div>
    </div>
}