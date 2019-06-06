import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from '../hooks/useInputState';


function ItemForm({addItem}) {
    const [value, handleChange, reset] = useInputState('');
    return (
        <Paper>
            <form onSubmit={e => {
                e.preventDefault();
                addItem(value);
                reset();
            }}>
                <TextField value={value} onChange={handleChange}/>
            </form>
        </Paper>
    )
}

export default ItemForm;
