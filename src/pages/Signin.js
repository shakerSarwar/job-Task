import React, { useState } from "react";
import Header from "../components/Header";
import line from "./../assets/images/line.png";
import appleLogo from "./../assets/images/appleLogo.png";
import googleLogo from "./../assets/images/googleLogo.png";
import { Link, useNavigate } from "react-router-dom";
import at from "./../assets/images/@.png";
import lock from "./../assets/images/lock.png";
import eye from "./../assets/images/eye.png";
import axios from "axios";

import { useForm } from "react-hook-form";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const hanleLogin = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Header />
      <div>
        <p className="text-center	pt-[126px] text-[#323B4B] text-[26px] font-bold leading-8">
          Sign In
        </p>
        <p className="text-center text-[#8A94A6] text-[18px] font-medium leading-5 pt-3">
          Welcome back, you’ve been missed!
        </p>
      </div>
      <div className="pt-5 m-auto w-[540px]">
        <div className="flex justify-between">
          <div className="flex bg-[#F0F5FA] w-[255px] justify-center rounded-2xl	h-[58px] items-center	">
            <img className="h-[25px] w-[25px]" src={googleLogo} alt="" />
            <p className="pl-2 text-base text-[#8A94A6] font-medium">
              Sign Up with Google
            </p>
          </div>

          <div className="flex bg-[#F0F5FA] w-[255px] justify-center rounded-2xl	h-[58px] items-center">
            <img className="h-[25px] w-[25px]" src={appleLogo} alt="" />
            <p className="pl-2 text-base text-[#8A94A6] font-medium	">
              Sign Up with Apple ID
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto w-[540px] flex justify-between pt-10 h-[24px]">
        <img className="h-[2px] w-[230px]" src={line} alt="" />
        <p className="-mt-[15px] text-[20px] text-[#B0B7C3]">OR</p>
        <img className="h-[2px] w-[230px]" src={line} alt="" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[540px] m-auto pt-10">
          <div className="relative">
            <img src={at} alt="" className="absolute left-4 top-5" />
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full h-[58px] border border-[##F3F3F3] rounded-2xl pl-12"
            />
            {errors.email && (
              <span className="text-xs text-[#FF5630]">
                Please enter a valid email address.
              </span>
            )}
          </div>

          <div className="relative pt-5">
            <img src={lock} alt="" className="absolute left-4 bottom-4" />
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full h-[58px] border border-[##F3F3F3] rounded-2xl pl-12"
            />
            <img src={eye} alt="" className="absolute right-5 bottom-4" />
          </div>

          <div className="flex pt-5 pb-5">
            <input
              type="checkbox"
              className="w-[24px] h-[24px] bg-[#F0F5FA]"
              required
            />
            <span className="pl-4 text-base font-medium text-[#B0B7C3]">
              Remember Me
            </span>
          </div>
          <div
            onClick={hanleLogin}
            className="w-full rounded-2xl bg-[#377DFF] text-center h-[58px] flex justify-center items-center"
          >
            <button type="submit" className="text-base text-white font-medium	">
              Sign In
            </button>
          </div>

          <div className="pt-5 text-center">
            <span className="text-base text-[#B0B7C3] font-medium	">
              Don't have an account?
            </span>
            <span className="text-[#377DFF] text-base font-medium">
              <Link to="/">Sign Up</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
