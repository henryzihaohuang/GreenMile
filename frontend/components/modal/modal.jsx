import React from 'react';
import DisclosureContainer from '../disclosure/disclosure';

const Modal= ({modal, closeModal}) => {
    if (!modal){
        return null
    }
    let disclosureModal;
    
    switch(modal){
        case 'disclosure':
            debugger
            disclosureModal = <DisclosureContainer />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background-wrapper" onClick={closeModal}>
            <div className="modal-block" onClick={(e => e.stopPropogation())} >
                <div className="modal-element">
                    {disclosureModal}
                </div>
            </div>
        </div>
    );
};

export default Modal;