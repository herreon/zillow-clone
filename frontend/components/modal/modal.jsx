import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SigninFormContainer from '../session_form/signin_form_container';
import JoinFormContainer from '../session_form/join_form_container';


function Modal ({modal, routeType, closeModal}) {

    if (!modal) {
        return null;
    }

    let component;

    switch (modal) {
        case 'signin':
            component = <SigninFormContainer routeType={routeType}/>;
            break;
        case 'join':
            component = <JoinFormContainer routeType={routeType}/>
            break;
        default:
            return null;
    }


    const routeBg = () => {
        if (routeType) {
            return "routeBg";
        } else {
            return "";
        }
    }

    const routeCh = () => {
        if (routeType) {
            return "routeCh";
        } else {
            return "";
        }
    }

    return(
        <div className={`modal-background ${routeBg()}`} onClick={closeModal}>
            <div className={`modal-child ${routeCh()}`} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    modal: state.ui.modal ? state.ui.modal : ownProps.modal,
    routeType: ownProps.modal ? true : false
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);