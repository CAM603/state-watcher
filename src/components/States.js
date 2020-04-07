import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {VectorMap} from 'react-jvectormap';

import {getStates} from '../actions/statesAction';
import {statesSwitch} from '../utils/statesSwitch';
import Wrapper from './Wrapper';

const States = (props) => {
    useEffect(() => {
        props.getStates()
    }, [])

    const handleRegionClick = (e, data) => {
        setTimeout(()=> { 
            Array.from(document.getElementsByClassName("jvectormap-tip")).forEach((el) => { 
                el.style.display = 'none' 
            }); 
        }, 100)

        let id = statesSwitch(data)
        props.history.push(`/states/${id}`)
    }

    return (
        <Wrapper {...props}>
            {props.loading ?
                
                <div>
                    <div>LOADING</div>
                </div>
                
            :
                <div style={{width: "100%", height: 500}}>
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