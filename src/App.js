// import { useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import "./App.css";
// import { auth } from "./firebase-config";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Navigate,
  useNavigate
} from "react-router-dom";
import Game from "./Game";
import LogIn from "./LogIn";


function App() {
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  // const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  // const register = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const login = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const logout = async () => {
  //   await signOut(auth);
  // };

    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate("/src/LogIn");
    // }


  return (
    <div className="App">
      {/* <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button> */}

{/* <> */}
      {/* This is the alias of BrowserRouter i.e. Router */}
      {/* <Router>
        <Switch> */}
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          {/* <Route exact path="/LogIn" component={LogIn} /> */}
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          {/* <Route path="/gameplay" component={Game} /> */}
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          {/* <Route path="/contactus" component={ContactUs} /> */}
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          {/* <Redirect to="/LogIn" />
        </Switch>
      </Router>
    </> */}
{/* <button onClick={handleClick} type='button'>go to login</button> */}

{/* <Router>
        <a href='/LogIn'>go to login</a>
          
        </Router> */}

    </div>
  );
}

export default App;
