import React from 'react';
import ReactDOM from 'react-dom';

/******************** Basic React ********************/

const Zoidberg = React.createClass({
    render: () => {
        const styles = {
            backgroundColor: 'red',
            backgroundImage: 'url(../zoidberg.png)',
            height: 420,
            width: 540
        };

        return (
            <div style={ styles }>
                A simple component
            </div>
        );
    }
});

/*****************************************************/

/***************** Example with state ****************/

const ZoidbergWithState = React.createClass({
    
    propTypes: {
        colors: React.PropTypes.array.isRequired
    },

    getInitialState: () => {
        return { colorIndex: 0 };
    },
    
    render: function() {
        return (
            <div 
                style={ this._getStyles() }
                onClick={ this._changeColor }
            >
                A component with state
            </div>
        );
    },
    
    _changeColor: function() {
        this.setState({ colorIndex: ++this.state.colorIndex });
    },
    
    _getStyles: function() {
        const colors = this.props.colors;
        return {
            backgroundColor: colors[this.state.colorIndex % colors.length],
            backgroundImage: 'url(../zoidberg.png)',
            height: 420,
            width: 540
        };
    }
});

/*****************************************************/

const myColors = ['#66cdaa', '#6495ed', '#ffa500'];

ReactDOM.render(
    <div>
        <Zoidberg></Zoidberg>
        <ZoidbergWithState colors={ myColors }></ZoidbergWithState>
    </div>,
    document.getElementById('app')
);
