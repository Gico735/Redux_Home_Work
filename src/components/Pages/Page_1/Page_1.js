import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as page_1_actions from '../../actions/page_1_actions';

import './Page_1.css'

import Btn from '../../Btn/Btn.js'
import Block from '../../Block/Block.js'

const Page_1 = ({ pageState, actions }) => {

  const clickHandler = (e) => {
    if (e.target.dataset.action) {
      actions[e.target.dataset.action]()
    }
  }

  return (
    <div className="page page_1" onClick={clickHandler}>
      <div className='title'>Page_1</div>
      <div className='content' >
        <Block text={'Gregor'} className={`${pageState.border && 'border'} ${pageState.background && 'background'} ${pageState.text && 'text'}`} />
        <div className='btn-wrapper'>
          <Btn text={'border'} dataAction={'toggleBorder'} />
          <Btn text={'borderAsinc'} dataAction={'toggleBorderAsinc'} />
          <Btn text={'background'} dataAction={'toggleBackground'} />
          <Btn text={'backgroundAsinc'} dataAction={'toggleBackgroundAsinc'} />
          <Btn text={'text'} dataAction={'toggleText'} />
          <Btn text={'textAsinc'} dataAction={'toggleTextAsinc'} />
        </div>
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

export default connect(mapStateToProps, mapDispatchProps)(Page_1)