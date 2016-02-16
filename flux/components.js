import React from 'react';
import Actions from './actions';
import Store from './store';

function getColorState() {
    return {
        color: Store.getColor()
    };
}

const Zoidberg = React.createClass({
    
    getInitialState: function() {
        return getColorState();
    },

    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },

    render: function() {
        const styles = {
            backgroundColor: this.state.color,
            backgroundImage: 'url(../zoidberg.png)',
            height: 420,
            width: 540
        };

        return (
            <div style={ styles }>
                A simple component
            </div>
        );
    },

    _onChange: function() {
        this.setState(getColorState);    
    }
});

const ZoidbergEdit = React.createClass({

    getInitialState: function() {
        return getColorState();
    },

    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div>
                <div>Your color: { this.state.color }</div>
                <input 
                    type='text' 
                    onBlur={ this._changeColor }
                    defaultValue={ this.state.color }
                >
                </input>
            </div>
        );
    },

    _changeColor: function(e) {
        Actions.changeColor(e.target.value);
    },

    _onChange: function() {
        this.setState(getColorState);    
    }
});

export { Zoidberg, ZoidbergEdit };