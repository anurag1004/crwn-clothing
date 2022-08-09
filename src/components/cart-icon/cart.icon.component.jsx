import './cart.icon.styles.scss';
import { useContext } from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = ()=>{
    const {isCartOpen, setIsCartOpen, totalQuantity} = useContext(CartContext);

    const onClickHandler = (e)=>{
        setIsCartOpen(!isCartOpen);
    }
    return (
        <div className='cart-icon-container' onClick={onClickHandler}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{totalQuantity}</span>
        </div>
    )
}

export default CartIcon;