
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './Store';

function Cravings()
 {
    const dispatch=useDispatch();
    const cravingsProducts = useSelector(state => state.products.cravings);
    const cartItems=useSelector(state => state.cart.items);
    
    const handleAddToCart=(product) => {
        dispatch(addToCart(product));
    };
    const handleRemoveFromCart = (product) => { 
        dispatch(removeFromCart(product));
    };
    const items=cravingsProducts.map((product, index) => {

        const cartItem=cartItems.find(item => item.name === product.name);
        const quantity=cartItem? cartItem.quantity : 0;
        return (
            <div className="card" key={index}>
                <img src={product.image} alt={product.name} className="card-img" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: ${product.price.toFixed(2)}</p>
                
                    <p className="card-text" hidden={quantity==0} >Quantity:   <button onClick={() => handleAddToCart(product)} className="btnp" hidden={quantity<1} >+</button>{quantity}  <button onClick={() => handleRemoveFromCart(product)} className="btnm" hidden={quantity==0}>-</button></p>
                    <button onClick={() => handleAddToCart(product)} className="btnadd" hidden={quantity>=1}>Add to Cart</button>  </div>
            </div>
            
  );});
  return (
 <>
        <h1>This is Cravings Page</h1>
        <div className="flex-container">
            {items}
        </div>
        <CartSummary />
        </>
);
}

function CartSummary() {
const cartItems = useSelector(state => state.cart.items);

if (cartItems.length === 0) {
    return <p>Cart is empty</p>;
}

return (
    <>
        <h2>Cart Summary in cravings</h2>
        <ul>
            {cartItems.map((item, index) => (
                <li key={index}>
                    {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                </li>
            ))}
        </ul>
    </>
);
}


export default Cravings;
