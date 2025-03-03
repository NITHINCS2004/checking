import React from "react";
import { useNavigate } from "react-router-dom";

const Pay = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    const options = {
      key: "rzp_live_sDDQtMTi6CD1HY", // Replace with Razorpay Key ID
      amount: "100", // 1 INR = 100 paise
      currency: "INR",
      name: "Your Business Name",
      description: "Payment for ₹1",
      image: "https://example.com/your_logo.png",
      order_id: "order_PzxRaHeJKi2wae", // Replace with actual Order ID
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        navigate("/form"); // 🔥 Redirect to Form after payment
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Your Business Address",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
    >
      Pay ₹1
    </button>
  );
};

export default Pay;
