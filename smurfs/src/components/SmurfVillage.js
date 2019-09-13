import React, {useContext} from 'react';
import VillageContext from './context/village';
import BlueGuy from './smurf';

const SmurfVillage = () => {
    //In SHoppingCart there is const {cart} variable being created here. I went with village because it made more sense. I created this Context in the context/village file. 
    const {Village} = useContext(VillageContext);
    //In the ShoppingCart file there is getCartTotal function right about here. I did not add anything like that because I'm not trying to add the smurfs together.
    return(
        <div className = "Smurf-Village">
            {Village.map(smurf =>  (
                <BlueGuy key={smurf.id} {...smurf} /> //BlueGuy is supposed to be like Item
            ))}

            //There is a child div right about here showing you the total and calling the getCartTotal function. I don't need a button or a total for my smurfs.
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