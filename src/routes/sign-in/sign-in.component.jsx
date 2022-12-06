import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign IN</h1>
      <button onClick={logGoogleUser}>signIn with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        signIn with google redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
