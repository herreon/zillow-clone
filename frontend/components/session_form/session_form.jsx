import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.klass = this.klass.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state, {username: `${this.state.email}`});
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul className="error-msgs">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    klass(value) {
        if (value === this.props.formType) {
            return "highlight"
        } else { 
            return ""
        }
    }

    render() {

        const pwRequirements = (this.props.formType === "Join") ? 
        (<div className="pw-requirements">
            <p>At least 8 characters</p>
            <p>Mix of letters and numbers</p>
        </div>) : null
                


        return (
            <div className="modal-form-container">
                <div className="modal-form-container-header">
                    <h1>Welcome to Yillow</h1>
                    <span onClick={this.props.closeModal} className="modal-close">&times;</span>
                </div>
                
                <br />
                
                <div className="modal-form-buttons">
                    <button id="first" className={this.klass("Sign in")} onClick={() => this.props.openModal('signin')}>Sign in</button>
                    <button id="second" className={this.klass("Join")} onClick={() => this.props.openModal('join')}>New account</button>
                </div>
                
                <form className="modal-form-box" onSubmit={this.handleSubmit} >
                    
                    <ul className="modal-form">
                        <br />
                        <label>
                            <input 
                                type="text"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="session-input"
                            />
                        </label>
                        <label>
                            <input 
                                type="password"
                                placeholder={`${this.props.pwStatus} password`}
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="session-input"
                            />
                        </label>

                        {pwRequirements}


                    </ul>
                    <input className="session-submit" type="submit" value={this.props.formSubmitText} />

                    {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);
