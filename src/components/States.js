import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getStates} from '../actions/statesAction'

const States = (props) => {
    useEffect(() => {
        props.getStates()
    }, [])

    return (
        <div>
            {props.states.map(state => (
                <Link to={`states/${state.id}`}>
                    <p key={state.id}>{state.name}</p>
                </Link>
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