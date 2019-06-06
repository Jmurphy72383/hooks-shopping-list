import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import ShoppingList from '../components/ShoppingList';
import ItemForm from '../components/ItemForm';
import uuid from 'uuid';

function ShoppingListApp() {
    const initialItems = [
        {id: 1, thing: "Wine", inCart: false},
        {id: 2, thing: "Bread", inCart: true},
        {id: 3, thing: "Pizza", inCart: false}
    ];
    const [items, setItem] = useState(initialItems);

    const addItem = newItemText => {
        setItem([...items, {id: uuid(), thing: newItemText, inCart: false}]);
    };

    const removeItem = itemId => {
        const updatedItems = items.filter(item => item.id !== itemId);
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
                    <ShoppingList items={items} removeItem={removeItem}/>
                </Grid>
            </Grid>
            
        </Paper>
    )
}

export default ShoppingListApp;
