import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const inputLogin = (event, input) => {
    if (input === "email") {
      setEmail(event.target.value);
      console.log("email", email);
    } else if (input === "password") {
      setPassword(event.target.value);
      console.log("password", password);
    } else if (input === "name") {
      setName(event.target.value);
    }
  };
  const RegisterUser = (ev) => {
    ev.preventDefault();
    fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log("data", data))
      .catch((error) => {
        console.error("Error:", error);
      });

    alert("Registration ok");
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" flex flex-col w-2/5  justify-center  items-center border border-slate-400 rounded-lg">
        <p className="font-semibold pt-5">Sign up </p>
        <hr class="h-px my-5 bg-gray-100 border-t w-full " />
        <div className="px-10 w-full">
          <h2 className=" text-xl py-5 font-semibold">Welcome to Airbnb</h2>
          <form className="flex flex-col" onSubmit={RegisterUser}>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(event) => {
                inputLogin(event, "name");
              }}
            ></input>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(event) => {
                inputLogin(event, "email");
              }}
            ></input>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => {
                inputLogin(event, "password");
              }}
            ></input>
            <button className=" w-full bg-primary rounded-lg py-4 text-white  mt-7">
              Register
            </button>
            <p className="flex items-center justify-center mb-14">
              Already a member?{" "}
              <Link to={"/login"}>
                <span className="text-slate-900 underline font-semibold">
                  Login
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
