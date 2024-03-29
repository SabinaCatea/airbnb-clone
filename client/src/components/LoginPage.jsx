import { Link, useNavigate } from "react-router-dom";
import CountryCode from "../Library/CountryCode";
import Header from "./Header";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext/userContext";

const LoginPage = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const inputLogin = (event, input) => {
    if (input === "email") {
      setEmail(event.target.value);
    } else if (input === "password") {
      setPassword(event.target.value);
    }
  };
  const loginUser = async (ev) => {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userInfo = await response.json();
    setRedirect(true);
    setUser(userInfo);

    // .then((response) => {
    //   console.log("respone", response.json());
    //   response.json();
    // })
    // .then((data) => {
    //   setRedirect(true);
    //   console.log("data", data), console.log("redirect", redirect);
    //   alert("login successfully");
    // });
    // } catch (e) {
    //   console.error("Error:", error);
    // }

    if (redirect) {
      navigate("/");
    }
  };
  const isEmailPressed = () => {
    setIsEmail(true);
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" flex flex-col w-2/5  justify-center  items-center border border-slate-400 rounded-lg">
        <p className="font-semibold pt-5">Log in or sign up </p>
        <hr className="h-px my-5 bg-gray-100 border-t w-full " />
        <div className="px-10 w-full">
          <h2 className=" text-xl py-5 font-semibold">Welcome to Airbnb</h2>
          {isEmail ? (
            <form className="flex flex-col" onSubmit={loginUser}>
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
              <button className=" w-full bg-primary rounded-lg py-4 text-white mt-3">
                Submit
              </button>
            </form>
          ) : (
            <div>
              <CountryCode />
              <p className="py-3 text-xs text-slate-500">
                We’ll call or text you to confirm your number. Standard message
                and data rates apply.{" "}
                <span className="text-slate-900 underline font-semibold">
                  Privacy Policy
                </span>{" "}
              </p>
              <button className=" w-full bg-primary rounded-lg py-4 text-white">
                Continue
              </button>
            </div>
          )}

          <div class="inline-flex items-center justify-center w-full">
            <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span class="absolute px-3 font-light text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
          </div>
          <div className="flex justify-start border border-slate-400 w-full py-4 rounded-lg pl-10 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="blue"
              class="w-6 h-6"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
            </svg>

            <p className="pl-44 text-sm">Continue with facebook</p>
          </div>
          <div className="flex justify-start border border-slate-400 w-full py-4 rounded-lg pl-10 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              fill="black"
              class="w-6 h-6"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
            <p className="pl-44 text-sm">Continue with Google</p>
          </div>
          <div className="flex justify-start border border-slate-400 w-full py-4 rounded-lg pl-10 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="black"
              class="w-6 h-6"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <p className="pl-44 text-sm">Continue with apple</p>
          </div>
          <div
            className="flex justify-start border border-slate-400 w-full py-4 rounded-lg pl-10 mb-4"
            onClick={isEmailPressed}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="black"
              class="w-6 h-6"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
            </svg>
            <p className="pl-44 text-sm">Continue with email</p>
          </div>
          <Link to="/register">
            <button className="w-full bg-secondary rounded-lg py-4 text-white  mb-4">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
