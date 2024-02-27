import { useNavigate, Link } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/products");
  }
  return (
    <>
      <h1>This is my Homepage</h1>;
      <p>
        Go to<Link to="products">Products Page</Link>
      </p>
      <p>
        <button onClick={handleNavigate}>Navigate</button>
      </p>
    </>
  );
}
