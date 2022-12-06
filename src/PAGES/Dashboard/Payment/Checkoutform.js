import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkoutform = ({ booking }) => {
  const { price, email, patient, _id } = booking;
  const stripe = useStripe();
  const elements = useElements();
  const [carderror, setcarderror] = useState();
  const [proceing, setprocesing] = useState(false);
  const [success, setSuccess] = useState();
  const [transictonID, setTransictionID] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://last-assignment-server-eta.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setcarderror(error.message);
    } else {
      setcarderror("");
    }
    setSuccess("");
    setprocesing(true);
    const { paymentIntent, error: confirmerror } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      });

    if (confirmerror) {
      setcarderror(confirmerror.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info:", card);
      const payment = {
        price,
        transictonID: paymentIntent.id,
        email,
        bookingId: _id,
      };
      setSuccess("Congrats your payment confirm");
      setTransictionID(paymentIntent.id);
      navigate("/dash");

      fetch("https://last-assignment-server-eta.vercel.app/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.inserteId) {
            setSuccess("Congrats your payment confirm");
            setTransictionID(paymentIntent.id);
          }
        });
    }
    setprocesing(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-xs btn-primary mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || proceing}
        >
          Pay
        </button>
      </form>
      <p className="3xl text-red-300">{carderror}</p>
      {success && (
        <div className="mt-5">
          <h1 className="text-xl  text-green-600">{success}</h1>
          <h2>
            your transictonID:{" "}
            <span className="text-red-400 font-bold"> {transictonID}</span>
          </h2>
        </div>
      )}
    </>
  );
};

export default Checkoutform;
