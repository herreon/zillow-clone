import { connect } from 'react-redux';
import React from 'react';
import { signup, login, removeErrors} from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formSubmitText: 'Submit',
        pwStatus: 'Create',
        formType: 'Join'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        processDemo: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal)),
        clearErrors: () => dispatch(removeErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
