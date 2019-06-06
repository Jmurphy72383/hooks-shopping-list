import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Item from './Item';

function ShoppingList({items, removeItem}) {
    return (
        <Paper>
            <List>
                {items.map(item => (
                    <>
                        <Item 
                            thing={item.thing} 
                            id={item.id}
                            key={item.id} 
                            inCart={item.inCart}
                            removeItem={removeItem}
                        />
                        <Divider />
                    </>
                ))} 
            </List>
           
        </Paper>
    )
};

export default ShoppingList;
