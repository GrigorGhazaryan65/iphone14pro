interface CardProps {
  title: string;
  price: string;
  image: string;
}

export default function Card({ title, price, image }: CardProps) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price}</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
}
