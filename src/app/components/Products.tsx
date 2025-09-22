import Card from "./Card";

export default function Products() {
  const products = [
    { title: "iPhone 14 Pro Max 128GB Deep Purple", price: "$900", image: "Iphone14pro.png" },
    { title: "Blackmagic Pocket Cinema Camera 6k", price: "$2535", image: "/camera.png" },
    { title: "Apple Watch Series 9 GPS 41mm", price: "$399", image: "/watch.png" },
    { title: "AirPods Max Silver", price: "$549", image: "/headphones2.png" },
    { title: "Samsung Galaxy Watch6 47mm Black", price: "$369", image: "/galaxy.png" },
    { title: "Galaxy Z Fold5 Unlocked 256GB", price: "$1799", image: "/samsung.png" },
    { title: "Galaxy Buds FE Graphite", price: "$99.99", image: "/buds.png" },
    { title: "Apple iPad 10.2 64GB Wi-Fi", price: "$398", image: "/ipad.png" },
  ];

  return (
    <div>
      <div className="products-grid ">
        {products.map((p, index) => (
          <Card key={index} {...p} />
        ))}
      </div>
    </div>
  );
}
