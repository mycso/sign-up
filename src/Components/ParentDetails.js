import { Field } from "formik";

function ParentDetails() {
  return (
    <div>
      <div>
        <h3>30% off code applied</h3>
      </div>
      <h1>Pup Parent Details</h1>
      <div>
        {/* What’s Your Dog’s Name? */}
        <label>
          First Name *
          <Field
            type="text"
            name="firstName"
            required
            placeholder="Enter First Name"
          />
        </label>
      </div>
      <div>
        <label>
          Last Name *
          <Field
            type="text"
            name="lastName"
            required
            placeholder="Enter Last Name"
          />
        </label>
      </div>
      <div>
        <label>
          Email Address *
          <Field
            type="text"
            name="email"
            required
            placeholder="Enter Email Address"
          />
        </label>
      </div>
      <div>
        <p>Receive exclusive offers, tips and tricks from our vet.</p>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <Field type="radio" name="offers" value="Yes" />
            Yes
          </label>
          <label>
            <Field type="radio" name="offers" value="No" />
            No
          </label>
        </div>
        <a href="#">Privacy Policy</a>
      </div>
      <div
        style={{
          display: "flex",
          gridGap: "10px",
          gridTemplateColumn: "1fr 1fr"
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
      The Benefits Of Our Food
      <div
        style={{
          display: "flex",
          gridGap: "10px",
          gridTemplateColumn: "1fr 1fr 1fr"
        }}
      >
        <div>
          <p>Support Joint</p>
        </div>

        <div>
          <p>Shiny Coat</p>
        </div>

        <div>
          <p>Improve digestion</p>
        </div>
      </div>
    </div>
  );
}
export default ParentDetails;
