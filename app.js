
// // // -------------------------------- FIREBASE --------------------------------


import { 
    auth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    sendEmailVerification, 
    signOut, 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs 
  } from "./firebase.js";
  
  const db = getFirestore();
  
  // Sign Up Function
  let signUp = async () => {
    // let email = document.getElementById("email").value;
    // let password = document.getElementById("password").value;
    let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

  
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Successfully Signed Up", user);
  
      // Send email verification
      try {
        await sendEmailVerification(auth.currentUser);
        console.log("Email verification sent!");
  
        // Show alert that email verification was sent successfully
        alert("Sign Up Successful! A verification email has been sent.");
      } catch (error) {
        console.error("Error sending email verification:", error);
        alert("Failed to send verification email. Please try again.");
      }
  
      // Firestore operation - Add user data to Firestore
      try {
        const docRef = await addDoc(collection(db, "users"), {
          email: user.email,
          uid: user.uid,
        });
        console.log("Document written with ID:", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  
    } catch (error) {
      const errorCode = error.code;
      console.log("Error in SignUp:", errorCode);
  
      // Show alert if there's an error during sign-up
      alert("Sign Up Failed! Please try again.");
    }
  };
  
  // Event Listener for Sign Up
  document.getElementById("sign_up").addEventListener("click", signUp);
  
  // Sign In Function
  let signIn = async () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Login Successfully", user);
  
      // Show alert on successful sign-in
      alert("Sign In Successful!");
    } catch (error) {
      const errorCode = error.code;
      console.log("Error in SignIn:", errorCode);
  
      // Show alert on error during sign-in
      alert("Sign In Failed! Please check your credentials.");
    }
  };
  
  // Event Listener for Sign In
  document.getElementById("sign_in").addEventListener("click", signIn);
  
  // Authentication State Listener
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid, "Already logged In");
      // Redirect to dashboard or another page
      // window.location.href = "./dashboard.html";
    } else {
      console.log("No User Here");
    }
  });
  
  // Sign Out Function
  let signOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
  
        // Show alert on successful sign-out
        alert("You have successfully signed out.");
      })
      .catch((error) => {
        console.log("Error during sign-out", error);
  
        // Show alert on error during sign-out
        alert("Sign Out Failed! Please try again.");
      });
  };
  
  // Event Listener for Sign Out
  document.getElementById("sign_out").addEventListener("click", signOutHandler);
  
  // Firestore Read Operation - Fetch Users Data
  let getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data()); // Log user data
    });
  };
  
  // Fetch Users (this would be used to display data in UI or handle further)
  getUsers();