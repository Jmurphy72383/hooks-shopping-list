import React from 'react';
import EditItemForm from './EditItemForm';
import useToggleState from '../hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


function Item({id, thing, inCart, removeItem, toggleInCart, editItem}) {
    const [isEditing, toggle] = useToggleState(false);
    return (
        <ListItem style={{ height: '64px'}}>
            {isEditing ? <EditItemForm editItem={editItem} id={id} thing={thing} toggleEditForm={toggle}/> : 
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
