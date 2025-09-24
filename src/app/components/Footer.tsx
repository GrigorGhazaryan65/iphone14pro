import Link from "next/link";

export default function Footer(){
    return (
        <div className="flex justify-around px-[104px] py-[160px] bg-black text-white ">
            <div>
                <h2 className="text-5xl font-black font-sans mb-6">CYBER</h2>
                <p className="opacity-55">We are a residential interior design firm located <br />
                in Portland. Our boutique-studio offers more than</p>
            </div>
            <div>
                <ul className="decoration-0 leading-8">
                    <h3 className="font-bold">Services</h3>
                    <li>Bonus Program</li>
                    <li>Gift Cards</li>
                    <li>Gift Cards</li>
                    <li>Credit and payment</li>
                    <li>Service contracts</li>
                    <li>Non-cash account</li>
                    <li>Payment</li>
                </ul>
            </div>
            <div>
                <ul className="decoration-0 leading-9">
                    <h3 className="opacity-100 font-bold">Assistance to the buyer</h3>
                    <li>Find an order</li>
                    <li>Terms of delivery</li>
                    <li>Exchange and return of goods</li>
                    <li>Guarantee</li>
                    <li>Frequently asked questions</li>
                    <li>Terms of use of the site</li>
                </ul>
            </div>
        </div>
    )
}