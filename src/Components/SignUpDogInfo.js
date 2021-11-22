import React from "react";
import { Field } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { createMuiTheme } from "@material-ui/core/styles";

function SignUpDogInfo({
  setDogWeight,
  setAge,
  setAgeStage,
  setPhysique,
  setExercise
}) {
  return (
    <div>
      <div>
        {/* What’s Your Dog’s Name? */}
        <label>
          What’s Your Dog’s Name? *
          <Field
            type="text"
            name="dogName"
            required
            placeholder="Enter Dog Name"
          />
        </label>
      </div>

      <div>
        {/* Is Your Dog Neutered/spayed? */}
        <div id="neutered-group">Is Your Dog Neutered/spayed? *</div>
        <div role="group" aria-labelledby="neutered-group" required>
          <label>
            <Field type="radio" name="neutered" value="Yes" />
            Yes
          </label>
          <label>
            <Field type="radio" name="neutered" value="No" />
            No
          </label>
        </div>
      </div>

      <div>
        {/* How Old Is Your Dog */}
        <div id="age-stage-group">How Old Is Your Dog? *</div>
        <div
          role="group"
          aria-labelledby="age-stage-group"
          onChange={(e) => {
            setAgeStage(e.target.value);
          }}
          required
        >
          <label>
            <Field type="radio" name="ageStage" value="PUPPY < 1" />
            {`PUPPY < 1`}
          </label>
          <label>
            <Field type="radio" name="ageStage" value="ADULT" />
            ADULT
          </label>
          <label>
            <Field type="radio" name="ageStage" value="SENIOR > 8" />
            {`SENIOR > 8`}
          </label>
        </div>
      </div>

      <div>
        {/* Your Dogs Age */}
        <div id="age-group">Your Dogs Age *</div>
        <Field name="age">
          {({ form: { setFieldValue }, field, meta }) => (
            <DatePicker
              required
              minDate={new Date("01-01-2006")}
              selected={(field.value && new Date(field.value)) || null}
              placeholderText="Select a date of birth"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              onChange={(val) => {
                setAge(val || "");
                setFieldValue(field.name, val);
              }}
            />
          )}
        </Field>
        <div>
          <Field type="number" name="dogWeight">
            {({ form: { setFieldValue }, field, values }) => (
              <>
                <Field
                  type="number"
                  name="dogWeight"
                  required
                  placeholder="0"
                  min={0}
                  max={75}
                  onChange={(e) => {
                    setDogWeight(e.target.value);
                    setFieldValue(field.name, e.target.value);
                  }}
                />{" "}
                KG
                {/* <Slider
                  valueLabelDisplay="auto"
                  name="dogWeight"
                  value={values?.dogWeight}
                  onChange={(event, value) => setFieldValue("dogWeight", value)}
                  step={10}
                  min={0}
                  max={75}
                /> */}
              </>
            )}
          </Field>
        </div>
        <div
          style={{
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center"
          }}
        >
          <div>
            Less than 5 kg: X-Small Breed E.g. Chihuahua, Jack Russell,
            Pomeranian
          </div>
          <img
            width="100%"
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1598273341243x796858794287346400%2F0-9kg.png?w=192&h=&auto=compress&dpr=1.5&fit=max"
          />
        </div>
        <p>
          ⋆ Crumble’s Tip: To find your dogs weight, first weigh yourself, then
          weigh yourself holding your dog.
        </p>

        <a href="#">Find out the average weight for your breed.</a>
      </div>

      <div>
        {/* What Is Your Dog’s Physique?  */}
        <div id="physique-group">What Is Your Dog’s Physique? *</div>
        <div
          role="group"
          aria-labelledby="physique-group"
          onChange={(e) => {
            setPhysique(e.target.value);
          }}
          required
        >
          <label>
            <Field type="radio" name="physique" value="SLIM" />
            {`SLIM`}
          </label>
          <label>
            <Field type="radio" name="physique" value="PERFECT" />
            PERFECT
          </label>
          <label>
            <Field type="radio" name="physique" value="CHUNKY" />
            {`CHUNKY`}
          </label>
        </div>
      </div>

      <div>
        {/* How Much Exercise Does Your Dog Get Per Day? */}
        <div id="exercise-group">
          How Much Exercise Does Your Dog Get Per Day? *
        </div>
        <div
          role="group"
          aria-labelledby="exercise-group"
          onChange={(e) => {
            setExercise(e.target.value);
          }}
          required
        >
          <label>
            <Field type="radio" name="exercise" value="< 1 HOUR" />
            {`< 1 HOUR`}
          </label>
          <label>
            <Field type="radio" name="exercise" value="1 - 2 HOURS" />1 - 2
            HOURS
          </label>
          <label>
            <Field type="radio" name="exercise" value="> 2 HOURS" />
            {`> 2 HOURS`}
          </label>
        </div>
      </div>

      <div>
        {/* Join the Pack */}
        <div id="offers-group">Join the Pack</div>
        <Field
          type="text"
          name="email"
          required
          placeholder="Enter your email"
        />
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

        <p>Got any Questions? Call us on 01743 384 562</p>
      </div>
      {/* <Field type="status">
        {({ form: { setFieldValue }, field, meta }) => (
          <select
            onChange={(e) => {
              if (e.target.value === "student") {
                setSteps(studentPath);
              } else if (e.target.value === "worker") {
                setSteps(workerPath);
              } else {
                setSteps(unemployedPath);
              }
              setFieldValue(field.name, e.target.value);
            }}
          >
            <option value="student">Student</option>
            <option value="worker">Worker</option>
            <option value="unemployed">Unemployed</option>
          </select>
        )}
      </Field> */}
    </div>
  );
}
export default SignUpDogInfo;
