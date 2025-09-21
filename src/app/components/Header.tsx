export default function Header(){
    return <div className="bg-gray-900 w-full h-[632px]">
        <div>
            <div className="iphone-div flex items-center justify-around gap-[40px]">
                <div className="left-div">
                    <h2 className="text-[25px] font-bold text-white opacity-40">Pro.Beyond.</h2>
                    <h1 className="text-[96px] space-x-3 text-white font-thin"><i>IPhone 14</i> <b>Pro</b></h1>
                    <p className="text-gray-500">Created to change everything for the better. For everyone</p>
                    <button className="px-[56px] py-[16px] border-amber-50 text-white mt-[24px] border-[1px] hover:bg-amber-50 hover:text-black transition-colors duration-300 cursor-pointer">Shop Now</button>
                </div>
                <div>
                    <img src="/Iphone.png" />
                </div>
            </div>
        </div>
    </div>
}