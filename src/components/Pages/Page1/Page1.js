import React from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as page_1_actions from '../../../actions/page_1_actions';

import './Page1.css'

import Btn from '../../Btn/Btn.js'
import Block from '../../Block/Block.js'

const Page1 = ({ pageState, actions }) => {

  const clickHandler = (e) => {
    if (e.target.dataset.action) {
      actions[e.target.dataset.action]()
    }
    console.log(history)
  }

  return (
    <div className="page page_1" onClick={clickHandler}>
      <div className='title'>Page1</div>
      <div className='content' >
        <div className='btn-wrapper'>
          <Btn text={'border'} dataAction={'toggleBorder'} />
          <Btn text={'borderAsync'} dataAction={'toggleBorderAsync'} />
          <Btn text={'background'} dataAction={'toggleBackground'} />
          <Btn text={'backgroundAsync'} dataAction={'toggleBackgroundAsync'} />
          <Btn text={'text'} dataAction={'toggleText'} />
          <Btn text={'textAsync'} dataAction={'toggleTextAsync'} />
        </div>
        <Block text={'Gregory'} className={`${pageState.border && 'border'} ${pageState.background && 'background'} ${pageState.text && 'text'}`} />
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    pageState: state.page_1
  };
}

const mapDispatchProps = (dispatch) => {
  return {
    actions: bindActionCreators(page_1_actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Page1)