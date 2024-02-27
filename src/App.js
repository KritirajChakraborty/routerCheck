import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import RootLayout from "./Pages/Root.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import ProductDetailsPage from "./Pages/ProductDetailsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductPage /> },
      { path: "products/:productId", element: <ProductDetailsPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
