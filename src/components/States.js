import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getStates} from '../actions/statesAction'
import Wrapper from './Wrapper';

const States = (props) => {
    useEffect(() => {
        props.getStates()
    }, [])


    return (
        <Wrapper {...props}>
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
        </Wrapper>
    )
}
const mapStateToProps = state => {
    return {
        states: state.states.states,
        loading: state.states.loadingStates
    }
}
export default connect(mapStateToProps, {getStates})(States);