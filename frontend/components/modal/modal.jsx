import React from 'react';
import {closeModal} from '../../actions/modal';
import DisclosureContainer from '../disclosure/disclosure_container';

Modal(modal) = () => {

    let disclosureModal;
    
    modal = 'disclosure' ? disclosureModal = <DisclosureContainer /> : null

    return (
        <div className="modal-backdrop" onClick={closeModal}>
            <div className="modal" onClick={(e => e.stopPropogation())} >
                {disclosureModal}
            </div>
        </div>
    );
};

export default Modal;