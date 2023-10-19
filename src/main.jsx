import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import AddProduct from "./Components/AddProduct/AddProduct.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import IndividualBrand from "./Components/Home/BrandsDetails/IndividualBrand/IndividualBrand.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import IndividualProductDetails from "./Components/IndividualProductDetails/IndividualProductDetails.jsx";
import UpdateProduct from "./Components/UpdateProduct/UpdateProduct.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/brand/:id",
        element: <IndividualBrand />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <IndividualProductDetails />,
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
