
import '../assets/CSS/layout.css';
import { flowers } from './FlowerDB';
import Product from './Product';
import Cart from './Cart';
import{useState} from 'react';


export default function Products(){
    const [cartItems, setCartItems] = useState([]);
   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                        flowers.map(flower => (
                            <Product key={flower.id} flower={flower} />
                        ))
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                <Cart cartItems={cartItems} />
                }
            </div>
        </>
    );

}