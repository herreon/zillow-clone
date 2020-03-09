import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SigninFormContainer from '../session_form/signin_form_container';
import JoinFormContainer from '../session_form/join_form_container';


function Modal ({modal, closeModal}) {
    if (!modal){
        return null;
    }

    let component;

    switch (modal) {
        case 'signin':
            component = <SigninFormContainer />;
            break;
        case 'join':
            component = <JoinFormContainer />
            break;
        default:
            return null;
    }

    return(
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);