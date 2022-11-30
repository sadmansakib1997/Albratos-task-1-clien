import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/Firebase/Authprovider";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";

const Myorders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/booking?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="mb-5">
      <h1 className="mb-6 text-3xl font-bold text-center my-5">
        Buyers Bookings
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Car name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.username}</td>
                <td>{booking.name}</td>
                <td>{booking.time}</td>
                <td>{booking.price}</td>

                <td>
                  {booking?.price && !booking.paid && (
                    <Link to={`/dash/payment/${booking._id}`}>
                      <button className="btn btn-primary btn-xs">
                        PAY NOW
                      </button>
                    </Link>
                  )}
                  {booking?.price && booking.paid && (
                    <button className="btn btn-success btn-xs">paid</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myorders;
