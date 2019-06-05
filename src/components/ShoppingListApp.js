import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import ShoppingList from '../components/ShoppingList';

function ShoppingListApp() {
    const initialItems = [
        {id: 1, thing: "Wine", inCart: false},
        {id: 2, thing: "Bread", inCart: false},
        {id: 3, thing: "Pizza", inCart: false}
    ];
    const [items, setItem] = useState(initialItems);

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

            <ShoppingList items={items} />
        </Paper>
    )
}

export default ShoppingListApp;
