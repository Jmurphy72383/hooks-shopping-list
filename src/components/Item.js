import React from 'react';
import useToggleState from '../hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


function Item({id, thing, inCart, removeItem, toggleInCart}) {
    const [isEditing, toggle] = useToggleState(false);
    return (
        <ListItem>
            {isEditing ? <h1>Editing</h1> : 
            <>
            <Checkbox tabIndex={-1} checked={inCart} onClick={() => toggleInCart(id)} />
            <ListItemText style={{textDecoration: inCart ? 'line-through' : 'none'}}>{thing}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Edit' onClick={toggle}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label='Delete' onClick={() => removeItem(id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
};

export default Item;
