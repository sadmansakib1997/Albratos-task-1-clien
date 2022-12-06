import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/LOading/Loading";

const Addproduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostkey = process.env.REACT_APP_IMGBB_KEY;
  console.log(imageHostkey);
  const navigate = useNavigate();
  ////////////////////////////////////
  const { data: products, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(
        "https://last-assignment-server-eta.vercel.app/product"
      );
      const data = await res.json();
      return data;
    },
  });
  ////////////////////////////////////
  const handleaddproduct = (data) => {
    console.log(data);
    const photo = data.photo[0];
    const formData = new FormData();
    formData.append("image", photo);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        if (imgdata.success) {
          console.log(imgdata.data.url);
          const product = {
            name: data.name,
            email: data.email,
            product: data.product,
            photo: imgdata.data.url,
          };

          fetch("https://last-assignment-server-eta.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} you are so beautiful`);
              navigate("/dash/myproduct");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div></div>
      <div className="w-96 p-8 bg-slate-400">
        <h1 className="text-5xl font-bold text-center mb-10">Add Product</h1>
        <form onSubmit={handleSubmit(handleaddproduct)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2xl font-semibold">Name:</span>
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
              <span className="label-text text-2xl font-semibold">Email:</span>
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
              <span className="label-text  text-2xl font-semibold">
                Product:
              </span>
            </label>
            <select
              {...register("product")}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Pick a product
              </option>
              {products.map((product) => (
                <option key={product._id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2xl font-semibold">Photo:</span>
            </label>
            <input
              type="file"
              {...register("photo", { required: "photo is required" })}
              className="input input-bordered"
            />
            {errors.photo && (
              <p className="text-red-600" role="alert">
                {errors.photo?.message}
              </p>
            )}
          </div>

          <input
            type="submit"
            className="btn btn-accent w-full mt-5 text-white"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
