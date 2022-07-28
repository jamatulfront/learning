import { firebaseAuth, googleProvider } from "../lib/firebase";
export default function UserLogin({}) {
  const user = null;
  return (
    <menu>
      <main>
        {user ? (
          !username ? (
            <UsernameForm />
          ) : (
            <SignOutButton />
          )
        ) : (
          <SignInButton />
        )}
      </main>
    </menu>
  );
}
// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await firebaseAuth.signInWithPopup(firebaseAuth.getAuth(), googleProvider);
  };

  return (
    <>
      <button className="btn-google" onClick={signInWithGoogle}>
        <img src={"/google.png"} width="30px" /> Sign in with Google
      </button>
      <button onClick={() => firebaseAuth.signInAnonymously()}>
        Sign in Anonymously
      </button>
    </>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => firebaseAuth.signOut()}>Sign Out</button>;
}
