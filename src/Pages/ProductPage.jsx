import { Link } from "react-router-dom";
const PRODUCTS = [
  {
    id: "1",
    title: "product-1",
  },
  {
    id: "2",
    title: "product-2",
  },
  {
    id: "3",
    title: "product-3",
  },
];

export default function ProductPage() {
  return (
    <>
      <h2>This is my product page</h2>
      <ul>
        {" "}
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
