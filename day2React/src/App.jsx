import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/client/HomePage"
import ProductPage from "./pages/client/ProductPage"
import AboutPage from "./pages/client/AboutPage"
import ContactUs from "./pages/client/ContactUs"
import LoginPage from "./pages/auth/LoginPage"
import Register from "./pages/auth/Register"
import Headers from "./component/header"
import ErrorPage from "./pages/client/error"
import SingleProductPage from "./pages/client/snigleproduct"
import Dashboard from "./pages/admin/Dashboard"
import MainDashboard from "./pages/admin/mainDashboard"
import AllProductsAdmin from "./pages/admin/AllProductsAdmin"
import BlogPage from "./pages/client/blog"
const App = () => {
  return (
    <>
    <Headers />
    <Routes>
      <Route path="/" element= {<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/singleproduct/:id" element={< SingleProductPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Dashboard />}> 
          <Route index element={<MainDashboard />} />
          <Route path="allProductAdmin" element={<AllProductsAdmin />} />
          <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  )
}
export default App
