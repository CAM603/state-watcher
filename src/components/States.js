import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getStates} from '../actions/statesAction'

const States = (props) => {
    useEffect(() => {
        props.getStates()
    }, [])

    console.log(props.states)
    return (
        <div>
            {props.states.map(state => (
                <p key={state.id}>{state.name}</p>
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        states: state.states.states
    }
}
export default connect(mapStateToProps, {getStates})(States);