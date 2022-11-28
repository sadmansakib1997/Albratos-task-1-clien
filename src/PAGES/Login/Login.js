import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Firebase/Authprovider";

const Login = () => {
  const [loginerror, setLoginerror] = useState("");
  const { login } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handlelogin = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
        setLoginerror(error.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 bg-slate-700 p-8">
        <h1 className="text-3xl mb-10 font-semibold text-center text-red-600">
          LOGIN
        </h1>
        <form onSubmit={handleSubmit(handlelogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2xl font-semibold text-white ">
                Email:
              </span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-white" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white  text-2xl font-semibold">
                Password:
              </span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: { value: 6, message: "At least 6 characters" },
              })}
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-white" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text text-white ">Forgot Password?</span>
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-success w-full text-white font-bold text-xl"
            value="Login"
          />
          <div>
            {loginerror && (
              <p className="text-red-600" role="alert">
                {loginerror}
              </p>
            )}
          </div>
        </form>
        <p className="text-white">
          New to synthetic car's
          <Link className="text ml-2 text-secondary font-bold" to={"/sign"}>
            Create an account
          </Link>
        </p>
        <div className="divider text-white">OR</div>
        <button className="btn btn-primary w-full font-bold">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
