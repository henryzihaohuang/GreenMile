import React from 'react';
import {connect} from 'react-redux';
import Disclosure from './disclosure';

import { closeModal } from '../../actions/modal';

const mStP = (state, ownProps) => {
 
}

const mDtP = (dispatch) => {
    closeModal: () => dispatch(closeModal());
};

export default connect(mStP, mDtP)(Disclosure);