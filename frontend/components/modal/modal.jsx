import React from 'react';
import FirstDisclosureContainer from '../disclosures/first_disclosure';
import FooterDisclosureContainer from '../disclosures/footer_disclosure_container'

const Modal= ({modal, closeModal}) => {
    if (!modal){
        return null
    }
    let disclosureModal;
    let modalClass;
    switch(modal){
        case 'disclosure':
            disclosureModal = <FirstDisclosureContainer />
            modalClass= "modal-block";
            break;
        case 'footer':
            disclosureModal = <FooterDisclosureContainer />
            modalClass= "footer-modal-block";
            break;
        default:
            return null;
    }

    return (
        <section className="modal-background-wrapper" onClick={closeModal}>
            <span className={modalClass} onClick={(e => {e.stopPropogation();})} >
                <span className="modal-element">
                    {disclosureModal}
                </span>
            </span>
        </section>
    );
};

export default Modal;