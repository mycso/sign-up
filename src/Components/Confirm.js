import { Field } from "formik";

function Confirm() {
  return (
    <div>
      <h1>Review Plan & Checkout</h1>
      <p>Mike's Tailored Plan</p>
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center"
        }}
      >
        <div>
          RECIPES <p>7 x 1000g packs</p>
        </div>
        <div>
          <button type="button">Edit</button>
        </div>

        <div>
          TREATS & EXTRAS <p>Mike does not have any treats</p>
        </div>
        <div>
          <button type="button">Edit</button>
        </div>

        <div>DELIVERY DATES</div>
        <div>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <p>Thursday, December 9, 2021 and then Every 2 weeks</p>
      </div>
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center"
        }}
      >
        <label>BILLING ADDRESS</label>
        <div>
          <button type="button">Edit</button>
        </div>
      </div>

      <div>
        Michael Sokan mycso89@gmail.com +447956090843 24 Sandown Avenue,
        Dagenham East, rm10 8xd Delivery Instructions: testing
      </div>

      <label>BILLING ADDRESS</label>
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "4fr 1fr",
          alignItems: "center"
        }}
      >
        <div>Billing Address the same as delivery?</div>
        <Field type="checkbox" name="toggle" />
      </div>

      <label>PAYMENT INFORMATION</label>
      <div>Checkout Payment</div>

      <div
        style={{
          display: "flex",
          gridGap: "10px",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center"
        }}
      >
        <label>
          Discount Code *
          <Field
            type="text"
            name="discount"
            required
            placeholder="discountcode30"
          />
        </label>
        <button type="button">Checked</button>
      </div>
      <div>
        <a href="#">Been referred by a friend?</a>
      </div>
      <div role="group" aria-labelledby="my-radio-group">
        <label>
          <Field type="radio" name="total" value="Today’s Total" />
          Today’s Total
        </label>
        <label>
          <Field type="radio" name="total" value="Ongoing Total" />
          Ongoing Total
        </label>
      </div>
      <div>
        <div>
          <p>TOTAL</p>
          <p>Just £4.00 a day to change your dog's life</p>
        </div>
        <div
          style={{
            display: "flex",
            gridGap: "10px",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center"
          }}
        >
          <div>Hand cooked food</div>
          <div>£56.00</div>
        </div>
        <div
          style={{
            display: "flex",
            gridGap: "10px",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center"
          }}
        >
          <div>Treats & Extras</div>
          <div>£0.00</div>
        </div>
        <div
          style={{
            display: "flex",
            gridGap: "10px",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center"
          }}
        >
          <div>Final Total</div>
          <div>£56.00</div>
        </div>
      </div>
      <div>Delivered every 2 weeks. You can pause or cancel anytime.</div>
    </div>
  );
}
export default Confirm;
