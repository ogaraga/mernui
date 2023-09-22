import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  //useNavigation
  const navigate = useNavigate();

  //login submit/click
  function loginHandle(event) {
    event.preventDefault();
    const input = document.querySelectorAll("input"),
      spans = document.getElementById("spans"),
      label = document.getElementById("login_exception");
      
//login route logic here
    if (email !== "" && password.length >= 5) {
      input.forEach((item) => (item.style.border = "1px solid green"));
      label.innerHTML = "All inputs are correct!";
      label.style.color = "green";
      setTimeout(() => {
        label.innerHTML = "";
        spans.innerHTML = "pls wait Logging in ...";
        spans.style.color = "green";
      }, 4000);
      setTimeout(() => {
        return navigate("/portfolio");
      }, 7000);
    }
    else if(email !== '' && (password.length < 5 || password === '')){
     spans.innerHTML = "";
     input.forEach((item) => (item.style.border = "1px solid red"))
     label.innerHTML = 'Password must be greater than 4 characters!';
      return navigate("/login");
    }
    else if(email === '' && password.length >= 5){
      spans.innerHTML = "";
      input.forEach((item) => (item.style.border = "1px solid red"))
      label.innerHTML = 'Email input-field must not be empty!';
       return navigate("/login");
     }
    
    else {
      spans.innerHTML = "";
      input.forEach((item) => (item.style.border = "1px solid red"));
      label.innerHTML = "Wrong input(s)! Pls try again or create an account.";
      return navigate("/login");
    }
       
    
  }

  return (
    <main className={styles.login_form} id="login_form">
      <h1>Access login</h1>
      <form action="" onSubmit={loginHandle}>
        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">
          password<span>*</span>
        </label>
        <input
          type="password"
          name="password"
          id="pass-reg"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <span id="spans"></span>
        <i className={styles.login_exception} id="login_exception"></i>
      </form>
    </main>
  );
}

export default Login;
