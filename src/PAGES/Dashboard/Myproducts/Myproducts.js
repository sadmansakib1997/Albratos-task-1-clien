import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Confirmmodal from "../../Shared/Confirmmodal/Confirmmodal";
import Loading from "../../Shared/LOading/Loading";

const Myproducts = () => {
  const [deleteingproduct, setDeletingproduct] = useState(null);

  const canclemodal = () => {
    setDeletingproduct(null);
  };

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://last-assignment-server-eta.vercel.app/products",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  const handledeleteproduct = (product) => {
    console.log(product);
    fetch(
      `https://last-assignment-server-eta.vercel.app/products/${product._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          toast.success(`Deleted ${product.name} successfully`);
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-3xl">Manage product:{products?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avator</th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12">
                      <img src={product.photo} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.email}</td>
                <td>{product.product}</td>
                <td>
                  <label
                    onClick={() => setDeletingproduct(product)}
                    htmlFor="confirmation-modal"
                    className="btn btn-outline btn-sm btn-error mr-7"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {deleteingproduct && (
          <Confirmmodal
            title={`Are you sure you want to delete`}
            message={`if you delete ${deleteingproduct.name} it cant be undone`}
            canclemodal={canclemodal}
            successaction={handledeleteproduct}
            successbtnName="delete"
            modaldata={deleteingproduct}
          ></Confirmmodal>
        )}
      </div>
    </div>
  );
};

export default Myproducts;
