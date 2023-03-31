import React, { useState } from "react";
import appleLogo from "./../assets/images/appleLogo.png";
import googleLogo from "./../assets/images/googleLogo.png";
import line from "./../assets/images/line.png";
import at from "./../assets/images/@.png";
import lock from "./../assets/images/lock.png";
import eye from "./../assets/images/eye.png";
import smile from "./../assets/images/smile.png";
import recwhite from "./../assets/images/Rectangle1.png";
import greenRec from "./../assets/images/Rectangle6.png";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");

  const hanleRegister = () => {
    axios
      .post("https://reqres.in/api/register", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
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
    <div className="">
      <Header />
      <p className="text-center	pt-[126px] text-[#323B4B] text-[26px] font-bold leading-8">
        Getting Started
      </p>
      <p className="text-center text-[#8A94A6] text-[18px] font-medium leading-5 pt-3">
        Create an account to continue!
      </p>

      <div className="pt-5 m-auto w-[540px]">
        <div className="flex justify-between">
          <div className="flex bg-[#F0F5FA] w-[255px] justify-center rounded-2xl	h-[58px] items-center	">
            <img className="h-[25px] w-[25px]" src={googleLogo} alt="" />
            <p className="pl-2 text-base text-[#8A94A6] font-medium	">
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

      {/* line */}
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
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full h-[58px] border border-[##F3F3F3] rounded-2xl pl-12"
            />
          </div>
          {errors.email && (
            <span className="text-xs text-[#FF5630]">
              Please enter a valid email address.
            </span>
          )}
          <div className="relative pt-5">
            <img src={smile} alt="" className="absolute left-4 bottom-4" />
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoComplete="off"
              placeholder="Your Name"
              className="w-full h-[58px] border border-[##F3F3F3] rounded-2xl pl-12"
            />
          </div>

          <div className="relative pt-5">
            <img src={lock} alt="" className="absolute left-4 bottom-4" />
            <input
              type="password"
              name="password"
              {...register("password", { required: true, min: 6 })}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create Password"
              className="w-full h-[58px] border border-[##F3F3F3] rounded-2xl pl-12"
            />

            <img src={eye} alt="" className="absolute right-5 bottom-4" />
          </div>
          {errors.password && (
            <span className="text-xs text-[#FF5630]">
              Password Must Contain Six Characters.
            </span>
          )}
          <div className="w-full flex justify-around pt-8">
            <img src={greenRec} alt="" />
            <img src={greenRec} alt="" />
            <img src={greenRec} alt="" />
            <img src={greenRec} alt="" />
            <img src={recwhite} alt="" />
          </div>
          <div className="flex pt-5 pb-5">
            <input
              type="checkbox"
              className="w-[24px] h-[24px] checked:bg-[#EDEFF1]"
              required
            />
            <span className="pl-4 text-[#B0B7C3] font-medium text-base">
              I agree to the Terms & Conditions
            </span>
          </div>
          <div
            onClick={hanleRegister}
            className="w-full cursor-pointer rounded-2xl bg-[#377DFF] text-center h-[58px] flex justify-center items-center"
          >
            <button type="submit" className="text-base text-white font-medium	">
              Sign Up
            </button>
          </div>

          <div className="pt-5 text-center">
            <span className="text-base text-[#B0B7C3] font-medium	">
              Already have an account?{" "}
            </span>
            <span className="text-[#377DFF] text-base font-medium">
              <Link to="/signin">Sign In</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;

// name: "",
// email: "",
// password: "",
// });

// const { name, email, password } = formData;

// const { user, isError, isSuccess, message } = useSelector(
// (state) => state.auth
// );

// const navigate = useNavigate();
// const dispatch = useDispatch();

// useEffect(() => {
// if (isSuccess || user) {
//   navigate("/dashboard");
// }
// dispatch(reset());
// }, [user, isError, isSuccess, message, navigate, dispatch]);

// const onChange = (e) => {
// setFormData((prevState) => ({
//   ...prevState,
//   [e.target.name]: e.target.value,
// }));
// };

// const onSubmit = (e) => {
// e.preventDefault();

// const userData = {
//   name,
//   email,
//   password,
// };
// dispatch(register(userData));
// };
