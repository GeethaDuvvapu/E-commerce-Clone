
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Blog from './Pages/Blog/Blog'
import Privacy from './Pages/Privacy/Privacy'
import Error from './Pages/Error/Error'
import Shop from './Pages/Shop/Shop'
import Ourstory from './Pages/Ourstory/Ourstory'
import ContactUs from './Pages/Contact/ContactUs'
import ResetPassword from './Pages/RestPassword/Password'
import MyAccount from './Pages/Myaccount/Account'
import Checkout from './Pages/Checkout/Checkout'
import Orderconformation from './Pages/Orderconformation/Orderconformation'
import ProductPage from './Pages/ProductPage/ProductPage'
import ProductPage2 from './Pages/ProductPage2/ProductPage2'
import ProductPage3 from './Pages/ProductPage3/ProductPage3'
import ProductPage4 from './Pages/ProductPage4/ProductPage4'
import ProductPage5 from './Pages/ProductPage5/ProductPage5'
import ProductPage6 from './Pages/ProductPage6/ProductPage6'
import Account from './Pages/Account/Account'
import ViewOrder from './Pages/ViewOrder/ViewOrder'
import Cart from './Pages/Cart/Cart'
import ShoppingBag from './Pages/ShoppingBag/ShoppingBag'




import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CartPart from './Pages/Component/CartPart'
// import TopSection from './Pages/Component/TopSection/TopSection'
// import { CartProvider } from './Pages/Component/Contexts/CartContext';
import CartPart from "../../Shopping/src/Pages/Component/CartPart"
import { CartProvider } from './Pages/Component/Context/CartContext'
import TopSection from "../../Shopping/src/Pages/Component/TopSection/TopSection"
import Signup from './Pages/Signup/Signup'
import Logout from './Pages/Logout/Logout'


function App() {
  

  return (
    <>
    <BrowserRouter>
     <CartProvider>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path="/navbar" element={<Navbar />}/>
        <Route path="/footer" element={<Footer />}/>
        <Route path="/shop" element={<Shop/>}/> 
        <Route path="/blog" element={<Blog/>}/> 
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/error" element={<Error/>}/> 
        <Route path="/ourstory" element={<Ourstory/>}/>  
        <Route path="/contact"  element={<ContactUs/>}/>
        <Route path="/password"  element={<ResetPassword/>}/>
        <Route path="/myaccount"  element={<MyAccount/>}/>
        <Route path="/checkout"  element={<Checkout/>}/>
        <Route path="/orderconformation"  element={<Orderconformation/>}/>
        <Route path="/productpage"  element={<ProductPage/>}/>
        <Route path="/productpage2"  element={<ProductPage2/>}/>
        <Route path="/productpage3"  element={<ProductPage3/>}/>
        <Route path="/productpage4"  element={<ProductPage4/>}/>
        <Route path="/productpage5"  element={<ProductPage5/>}/>
        <Route path="/productpage6"  element={<ProductPage6/>}/>
        <Route path="/account"  element={<Account/>}/>
        <Route path="/vieworder"  element={<ViewOrder/>}/>
        <Route path="/cart"  element={<Cart/>}/> 
        <Route path="/topsection" element={<TopSection />} />
        <Route path="/cartpart"  element={<CartPart/>}/> 
        {/* <Route path="/cartcontexts"  element={<CartContexts/>}/>  */}
        <Route path="/shoppingbag" element={<ShoppingBag/>}/>
        <Route path="/signup"  element={<Signup/>}/> 
        <Route path="/logout"  element={<Logout/>}/> 
            


 






      </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
