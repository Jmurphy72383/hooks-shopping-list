import React, { useState, useEffect } from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import ShoppingList from '../components/ShoppingList';
import ItemForm from '../components/ItemForm';
import uuid from 'uuid';

function ShoppingListApp() {
    const initialItems = JSON.parse(window.localStorage.getItem('items')) || "[]";
    // const initialItems = [
    //     {id: 1, thing: "Wine", inCart: false},
    //     {id: 2, thing: "Bread", inCart: true},
    //     {id: 3, thing: "Pizza", inCart: false}
    // ];
    const [items, setItem] = useState(initialItems);

    useEffect(() => {
        window.localStorage.setItem('items', JSON.stringify(items));
    }, [items]);



    const addItem = newItemText => {
        setItem([...items, {id: uuid(), thing: newItemText, inCart: false}]);
    };

    const removeItem = itemId => {
        const updatedItems = items.filter(item => item.id !== itemId);
        setItem(updatedItems);
    } 

    const toggleInCart = itemId => {
        const updatedItems = items.map(item => 
            item.id === itemId ? { ...item, inCart: !item.inCart} : item
        );
        setItem(updatedItems);
    };

    const editItem = (itemId, newItem) => {
        const updatedItems = items.map(item => 
            item.id === itemId ? { ...item, thing: newItem} : item
        );
        setItem(updatedItems);
    }

    return (
        <Paper 
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{height: "64px"}}>
                <Toolbar>
                    <Typography color='inherit'>Shopping List With Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <ItemForm addItem={addItem}/>
                    <ShoppingList 
                        items={items} 
                        removeItem={removeItem} 
                        toggleInCart={toggleInCart}
                        editItem={editItem}
                    />
                </Grid>
            </Grid>
            
        </Paper>
    )
}

export default ShoppingListApp;
