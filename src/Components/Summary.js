import { Field } from "formik";

function Summary() {
  return (
    <div>
      <div>
        <h3>30% off code applied</h3>
      </div>
      <h1>Mike's Tailored Plan</h1>
      Based on what you’ve told us, here is his/her recommended daily intake
      from a balanced diet
      <div>
        <h3>1680 Kcals / 1000g per day</h3>
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
      <p>
        We feed thousands of happy dogs every month so Mike is in good company
      </p>
    </div>
  );
}
export default Summary;
