export default function Banner() {
    return (
        <div className="mt-10 flex justify-center items-center w-full h-[400px] bg-[url('/banner.png')] bg-cover bg-center">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-[72px] text-amber-50 font-thin"> Big Summer <b className="font-bold">Sale</b></h2>
                <p className="opacity-55 text-gray-300 mt-2">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                <button className="px-[56px] py-[16px] border border-amber-50 text-white mt-[24px] hover:bg-amber-50 hover:text-black transition-colors duration-300 cursor-pointer">
                    Shop Now
                </button>
            </div>
        </div>
    )
}
