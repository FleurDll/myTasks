import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "1031230901980-j4hnd2nqk7nfrgbnniv78sqbjeq0obqr.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    // is called anytime our authentification status change according to google api
    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            const userId = this.auth.currentUser.get().getId();
            const name = this.auth.currentUser.get().getBasicProfile().getGivenName();
            this.props.signIn(userId, name);
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        // const screenWidth = window.screen.availWidth;

        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button
                    onClick={this.onSignOutClick}
                    className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button
                    onClick={this.onSignInClick}
                    className="ui red google button">
                    <i className="google icon" />
                    Sign In
                </button>
            );
        }
    }

    render() {
        return (
            <>{this.renderAuthButton()}</>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);


// ID client :
// 1031230901980-j4hnd2nqk7nfrgbnniv78sqbjeq0obqr.apps.googleusercontent.com

// code secret client :
// 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