import { useState } from 'react';

function useToggle(initialValue = false) {
    //call useState, 'reserve a piece of state'
    const [state, setState] = useState(initialValue);
    const toggle = () => {
        setState(!state);
    };
    //return piece of state AND a function to toggle it
    return [state, toggle];
}

export default useToggle;