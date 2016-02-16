import React from 'react';
import { connect } from 'react-redux';
import { changeColor } from './actions';

const Zoidberg = React.createClass({
    
    propTypes: {
        color: React.PropTypes.string.isRequired
    },

    render: function() {
        const styles = {
            backgroundColor: this.props.color,
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

const ZoidbergEdit = React.createClass({

    propTypes: {
        color: React.PropTypes.string.isRequired,
        dispatchChangeColor: React.PropTypes.func.isRequired
    },

    render: function() {
        return (
            <div>
                <div>Your color: { this.props.color }</div>
                <input 
                    type='text' 
                    onBlur={ (e) => {
                        this.props.dispatchChangeColor(e.target.value); 
                    } }
                    defaultValue={ this.props.color }
                >
                </input>
            </div>
        );
    }
});

let ZoidbergContainer = React.createClass({
    propTypes: {
        color: React.PropTypes.string.isRequired,
        dispatchChangeColor: React.PropTypes.func.isRequired
    },
    
    render: function() {
        return (
            <div>
                <ZoidbergEdit { ...this.props }></ZoidbergEdit>
                <hr/>
                <Zoidberg color={ this.props.color }></Zoidberg>
            </div>
        );
    }
});

const mapStateToProps = (state) => {
    return { color: state.get('color') };
};

const mapDispatchToProps = (dispatch) => {
    return { 
        dispatchChangeColor: (color) => {
            dispatch(changeColor(color)) 
        }
    };
};

ZoidbergContainer = connect(mapStateToProps, mapDispatchToProps)(ZoidbergContainer);
export { ZoidbergContainer };