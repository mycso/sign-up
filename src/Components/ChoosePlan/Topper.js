import { Field } from "formik";

function Topper() {
  return (
    <div>
      <div>
        <h3>30% off code applied</h3>
      </div>
      <h1>Choose Mike's Plan</h1>
      <div>
        Choose a plan that works for you. You can amend, pause or cancel at
        anytime
      </div>
      <div role="group" aria-labelledby="radio-group">
        <label>
          <Field type="radio" name="topper" value="topper" />
          Topper
        </label>
      </div>
      <div>
        <div>Change your dog's life with 500g a day</div>
        <p>
          <a href="">Free delivery & empty bowl guarantee</a>
        </p>
        <div
          style={{
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center"
          }}
        >
          <img
            width="100%"
            src="https://differentdog.wpengine.com/wp-content/uploads/2019/09/turkey-fricassee-raw.jpg"
          />
          <div>
            <ul style={{ textAlign: "left" }}>
              <li>7 x 1000g packs</li>
              <li>every 2 weeks</li>
              <li>Choice of 12 real food</li>
              <li>recipes</li>
              <li>Free vet support</li>
            </ul>
          </div>
        </div>
      </div>
      <p>
        Click <a href="">here</a> to customise your order.
      </p>
      <div>
        <div>Our empty bowl guarantee</div>
        <p>
          We feed thousands of happy dogs each month and we think your pooch
          will be one of them. If they aren’t, we’ll give you your money back!
        </p>
      </div>
      All our food is
      <div style={{ display: "flex", gridTemplateColumn: "1fr 1fr 1fr" }}>
        <div>
          <p>Handcooked by chefs</p>
        </div>

        <div>
          <p>Frozen for freshness</p>
        </div>

        <div>
          <p>Free from nasties</p>
        </div>
      </div>
    </div>
  );
}
export default Topper;
