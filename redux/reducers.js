import Immutable from 'immutable';

const initialState = Immutable.Map({
    color: '#66cdaa'
});

export const colors = (state = initialState, action) => {
    switch (action.type) {
        case ('update_color'): {
            return state.set('color', action.color);
        }
        
        default: {
            return state;
        }
    }
}