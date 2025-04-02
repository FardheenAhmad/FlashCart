import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './Home';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import PurchaseHistory from "./PurchaseHistory";
import Cart from "./Cart";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
import "./app.css";
 
import {  GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "./GoogleLoginButton";
import { useSelector } from "react-redux";
import Cravings from "./Cravings";

function App()
{

const data= useSelector(state => state.cart);

const count=data.items.reduce((total,item) => total + item.quantity, 0);
  return(
    <>
    <GoogleOAuthProvider clientId={"950963480569-t3th1uiplg22bp3iopj77c44pmv3dn1m.apps.googleusercontent.com"}>
 <GoogleLoginButton> </GoogleLoginButton>
</GoogleOAuthProvider>
<BrowserRouter>
<nav><Link to="/">Home 🏠</Link>
<Link to="/veg">Veg 🥬 </Link>
<Link to="/nonveg">NonVeg 🍗</Link>
<Link to="/cravings">Cravings</Link>
<Link to="/cart">Cart  🛒 <span style={{backgroundColor:"yellow", padding:"6px",borderRadius:"30%", color:"red"}}>{count}</span></Link>
<Link to="/purchasehistory">PurchaseHistory</Link>
<Link to="/aboutus">AboutUs📖</Link>
<Link to="/contactus">ConactUs 📞</Link>

</nav>
<div className="container mt-4">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/veg" element={<Veg/>} />
<Route path="/nonveg" element={<NonVeg/>} />
<Route path="/cravings" element={<Cravings/>} />
<Route path="/purchasehistory" element={<PurchaseHistory/>} />
<Route path="/cart" element={<Cart/>}/>
<Route path="/contactus" element={<ContactUs/>} />
<Route path="/aboutus" element={<AboutUs/>} />
</Routes>
</div>

</BrowserRouter>
    


    </>
  );
} 
export default App;


