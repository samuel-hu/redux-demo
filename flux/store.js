import { EventEmitter } from 'events';
import Dispatcher from './dispatcher';
import assign from 'object-assign';

let _store = { color: '#66cdaa' };

const Store = assign({}, EventEmitter.prototype, {
    // This is how we get data from the store
    getColor: function() {
        return _store.color;
    },
    
    // A few methods to help with emitting events
    emitChange: function() {
        this.emit('change');
    },
    
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

Dispatcher.register(function(action) {
    // This is where we handle incoming actions
    switch(action.actionType) {
        case 'update_color': {
            _store.color = action.color;
            Store.emitChange();
            break;
        }

        default: {
            // noop
        }
    }
});

export default Store;