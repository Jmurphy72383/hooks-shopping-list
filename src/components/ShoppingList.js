import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Item from './Item';

function ShoppingList(props) {
    return (
        <Paper>
            <List>
                {props.items.map(item => (
                    <>
                        <Item thing={item.thing} key={item.id} inCart={item.inCart}/>
                        <Divider />
                    </>
                ))} 
            </List>
           
        </Paper>
    )
};

export default ShoppingList;
