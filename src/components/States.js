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
            {props.loading ?
            <div class="ui vertically divided grid">
                <div class="one column row">
                    <div class="column">
                        <div class="ui segment">
                            <p></p>
                            <div class="ui active dimmer">
                                <div class="ui loader"></div>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
            :
            props.states.map(state => (
                <Link key={state.id} to={`states/${state.id}`}>
                    <p>{state.name}</p>
                </Link>
            ))
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        states: state.states.states,
        loading: state.states.loadingStates
    }
}
export default connect(mapStateToProps, {getStates})(States);