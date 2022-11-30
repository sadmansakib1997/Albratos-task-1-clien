import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Confirmmodal from "../../Shared/Confirmmodal/Confirmmodal";

const Allsellers = () => {
  const [deleteingproduct, setDeletingproduct] = useState(null);

  const canclemodal = () => {
    setDeletingproduct(null);
  };
  /////////////////////////////////////
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  /////////////////////////////////////
  const handledelete = (id) => {
    fetch(` http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Synthia i love you");
          refetch();
        }
      });
  };

  const handleseller = (id) => {
    fetch(` http://localhost:5000/users/seller/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Synthia i love you");
          refetch();
        }
      });
  };
  /////////////////////////////////
  const handledeleteproduct = (user) => {
    console.log(user);
    fetch(` http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          toast.success(`Deleted ${user.name} successfully`);
        }
      });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">ALL USERS EMAIL:</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Seller</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handledelete(user._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role !== "seller" && (
                    <button
                      onClick={() => handleseller(user._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Seller
                    </button>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setDeletingproduct(user)}
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

export default Allsellers;
