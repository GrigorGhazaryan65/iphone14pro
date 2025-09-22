import Category from "./components/Category";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PopularProducts from "./components/Popular";
import Products from "./components/Products";

export default function Home() {
  return (
// className="font-sans grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
      <div> 
        <Navbar />
        <Header />
        <Category />
        <Products />
        <PopularProducts />
      </div>
  );
}
