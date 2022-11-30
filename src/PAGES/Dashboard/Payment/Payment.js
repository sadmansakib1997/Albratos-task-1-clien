import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/LOading/Loading";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-5xl font-bold">Payment for: {booking.treatment}</h1>
      <p>
        please pay <strong>$ {booking.price}</strong> for your appointment on{" "}
        {booking.appointmentDate} at {booking.slot}
      </p>
      <div className="w-96 my-6">
        <Elements stripe={stripePromise}>
          <Checkoutform booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
