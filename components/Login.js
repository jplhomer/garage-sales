import { useEffect, useContext } from "react";
import { firebase } from "../src/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { UserContext } from "../src/user-context";

const AUTH_CONFIG = {
  signInSuccessUrl: "<url-to-redirect-to-on-success>",
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false
  }
};

export default function Login() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });

    return listener;
  }, []);

  function logOut() {
    firebase.auth().signOut();
    setUser(false);
  }

  return user ? (
    <p>
      Logged in as <b>{user.displayName}</b>.{" "}
      <a href="#" onClick={logOut}>
        Log out
      </a>
    </p>
  ) : (
    <StyledFirebaseAuth uiConfig={AUTH_CONFIG} firebaseAuth={firebase.auth()} />
  );
}
