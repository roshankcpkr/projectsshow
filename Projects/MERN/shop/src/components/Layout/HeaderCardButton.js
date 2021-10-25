import {useContext, useEffect, useState} from "react";

import CardIcon from "../Cart/CardIcon";
import CartContext from "../../store/cart-context";
import classes from './HeaderCardButton.module.css';

const HeaderCardButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ?  classes.bump : ''}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CardIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
};

export default HeaderCardButton;
