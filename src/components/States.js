import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getStates} from '../actions/statesAction'
import Wrapper from './Wrapper';
import {VectorMap} from 'react-jvectormap';

const States = (props) => {
    useEffect(() => {
        props.getStates()
    }, [])

    const handleRegionClick = (e, data) => {
        setTimeout(()=> { Array.from(document.getElementsByClassName("jvectormap-tip")).forEach((el) => { el.style.display = 'none' }); },100)
    }
    return (
        <Wrapper {...props}>
            {/* {props.loading ?
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
            } */}
            <div style={{width: 500, height: 500}}>
            <VectorMap 
                map={'us_aea'}
                backgroundColor="#3b96ce"
                useRef='map'
                containerStyle={{
                    width: '100%',
                    height: '100%'
                }}
                containerClassName="map"
                onRegionClick={handleRegionClick}
            />
            </div>
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