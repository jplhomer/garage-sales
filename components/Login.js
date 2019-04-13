import { useEffect, useState } from "react";
import { firebase } from "../src/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// FirebaseUI config.
const AUTH_CONFIG = {
  signInSuccessUrl: "<url-to-redirect-to-on-success>",
  signInFlow: "popup",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false
  }
};

export default function Login() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });

    return listener;
  }, []);

  return user ? (
    <p>Logged in as {user.displayName}</p>
  ) : (
    <StyledFirebaseAuth uiConfig={AUTH_CONFIG} firebaseAuth={firebase.auth()} />
  );
}
