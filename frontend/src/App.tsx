import { Suspense, lazy } from "react";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Cart = lazy(() => import("./pages/cart"));
const Profile = lazy(() => import("./pages/profile"));
const ProductDetails = lazy(() => import("./pages/productDetails"));

function App() {
  return (
    <main className="bg-gray-100">
      <Suspense fallback={"loading..."}>
        <Outlet />
      </Suspense>
    </main>
  );
}

export default App;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="profile" element={<Profile />} />
      <Route path="productDetails" element={<ProductDetails />} />
    </Route>
  )
);
