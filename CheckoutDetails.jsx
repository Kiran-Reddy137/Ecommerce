import React from "react";

const CheckoutDetails = () => {
  return (
    <div className="checkout-details-container">
      <h2>Checkout Details</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="name">Mobile No</label>
        <input type="text" name="name" id="mobileNo" required />
        <label htmlFor="name">Place</label>
        <input type="text" name="name" id="Place" required />
        {/* Add more fields as needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutDetails;
