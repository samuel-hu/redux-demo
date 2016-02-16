import Dispatcher from './dispatcher';

const Actions = {
    // This is how we let the store know we want to make changes
    changeColor: function(color) {
        Dispatcher.dispatch({
            actionType: 'update_color',
            color: color
        });
    }
}

export default Actions;