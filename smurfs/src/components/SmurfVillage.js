import React, {useContext} from 'react';
import VillageContext from './context/village';
import BlueGuy from './smurf';

const SmurfVillage = () => {
    const {Village} = useContext(VillageContext);
    
    return(
        <div className = "Smurf-Village">
            {Village.map(smurf =>  (
                <BlueGuy key={smurf.id} {...smurf} />
            ))}
        </div>
    );
};

export default SmurfVillage;


// const ShoppingCart = () => {
// 	const {cart} = useContext(CartContext);
// 	const getCartTotal = () => {
// 		return cart.reduce((acc, value) => {
// 			return acc + value.price;
// 		}, 0).toFixed(2);
// 	};

// 	return (
// 		<div className="shopping-cart">
// 			{cart.map(item => (
// 				<Item key={item.id} {...item} />
// 			))}

// 			<div className="shopping-cart__checkout">
// 				<p>Total: ${getCartTotal()}</p>
// 				<button>Checkout</button>
// 			</div>
// 		</div>
// 	);
// };
// //SmurfVillage.js
// export default ShoppingCart;