import React, { useState } from "react";
import { Field, useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ShippingDetails() {
  const [deliveryDate, setDeliveryDate] = useState("");

  console.log(deliveryDate);

  return (
    <div>
      <div>
        {/* Your Delivery Details */}
        <h1>What day works best for your first Delivery?</h1>
        <Field name="deliveryDate">
          {({ form: { setFieldValue }, field, meta }) => (
            <DatePicker
              required
              minDate={new Date()}
              selected={(field.value && new Date(field.value)) || null}
              placeholderText="Click here to select your delivery date"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              onChange={(val) => {
                setDeliveryDate(val || "");
                setFieldValue(field.name, val);
              }}
            />
          )}
        </Field>
        <p>
          If you're not in our delivery drivers will always leave it in your
          safe place and you can easily change your delivery day from your
          account.
        </p>
        <h1>Where shall we deliver to?</h1>
        <Field type="text" name="address" placeholder="Address" />
        <Field type="text" name="city" placeholder="City" />
        <Field type="text" name="postcode" placeholder="Postcode" />
        <Field type="text" name="phoneNumber" placeholder="Phone Number" />
        <Field type="text" name="shippingFirstName" placeholder="First Name" />
        <Field type="text" name="shippingLastName" placeholder="Last Name" />
        <Field type="text" name="shippingEmail" placeholder="Email" />
        <Field type="text" name="password" placeholder="Password" />
        <Field name="deliveryInstructions">
          {({ form: { setFieldValue }, field, meta }) => (
            <textarea
              name="deliveryInstructions"
              placeholder="Delivery Instructions"
              value={field.value}
              onChange={(e) => {
                setFieldValue(field.name, e.target.value);
              }}
            />
          )}
        </Field>
      </div>
    </div>
  );
}

export default ShippingDetails;
