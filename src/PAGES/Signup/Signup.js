import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Firebase/Authprovider";

const Signup = () => {
  const [signuperror, setsignuperror] = useState("");
  const { signup, updateUser } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handlesignup = (data) => {
    console.log(data);
    setsignuperror("");
    signup(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("user create successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            // sakibuser(data.name, user.email);
          })

          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
        setsignuperror(error.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 bg-slate-700 p-8">
        <h1 className="text-3xl mb-10 font-semibold text-center text-red-600">
          SIGNUP
        </h1>
        <form onSubmit={handleSubmit(handlesignup)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2xl font-semibold text-white">
                Name:
              </span>
            </label>
            <input
              type="text"
              {...register("name", { required: "name is required" })}
              className="input input-bordered"
            />
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2xl font-semibold text-white">
                Email:
              </span>
            </label>
            <input
              type="email"
              {...register("email", { required: "email is required" })}
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text  text-2xl font-semibold text-white">
                Password:
              </span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: { value: 6, message: "atleast 6 characters" },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,

                  message: "password strong",
                },
              })}
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            type="submit"
            className="btn btn-success w-full font-bold text-xl text-white"
            value="Sign Up"
          />
          <div>
            {signuperror && (
              <p className="text-red-600" role="alert">
                {signuperror}
              </p>
            )}
          </div>
        </form>
        <p className="text-white">
          Already have an account?
          <Link className="text ml-2  text-secondary font-bold" to={"/login"}>
            Login
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

export default Signup;
