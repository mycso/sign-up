import "./App.css";
import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { Redirect, Switch, Route } from "react-router";
import SignUpDogInfo from "./Components/SignUpDogInfo";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./actions/userActions";
import { useHistory } from "react-router-dom";
import { smallBreed, mediumBreed, largeBreed } from "./Paths";
import { smallBreedRoute, mediumBreedRoute, largeBreedRoute } from "./Routes";

function App(props) {
  let history = useHistory();
  const [steps, setSteps] = useState(smallBreed);
  const [activeStep, setActiveStep] = useState(0);
  const [age, setAge] = useState(null);
  const [ageStage, setAgeStage] = useState("");
  const [dogWeight, setDogWeight] = useState("");
  const [physique, setPhysique] = useState("");
  const [exercise, setExercise] = useState("");

  const redirect = props?.location?.search
    ? props?.location?.search.split("=")[1]
    : "/";

  // const data = [{

  // }];

  const handleRoute = (values) => {
    if (values.dogWeight <= 10) {
      return smallBreedRoute();
    }

    if (values.dogWeight > 10 && values.dogWeight <= 20) {
      return mediumBreedRoute();
    }

    if (values.dogWeight > 20 && values.dogWeight <= 70) {
      return largeBreedRoute();
    }
  };

  const next = () => {
    let routeTo = steps[activeStep + 1];
    setActiveStep(activeStep + 1);
    history.push(`/form/${routeTo}`);
  };

  const previous = () => {
    let routeTo = steps[activeStep - 1];
    setActiveStep(activeStep - 1);
    history.push(`/form/${routeTo}`);
  };

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();

  const handleSubmit = async (values, bag) => {
    // e.preventDefault();
    // if (password !== confirmPassword) {
    //   alert("Password and confirm password do not match");
    // } else {
    //   dispatch(register(dogName, age, password, confirmPassword));
    // }

    console.log(values, "hello");

    dispatch(register(values));

    if (activeStep + 1 === steps.length) {
      // submit form
      window.confirm(JSON.stringify(values, null, 2));
    } else {
      bag.setTouched({});
      next();
    }
  };

  const handleRouteSignUp = () => {
    if (dogWeight <= 10) {
      setSteps(smallBreed);
      console.log("smallBreed");
    }

    if (dogWeight > 10 && dogWeight <= 20) {
      setSteps(mediumBreed);
      console.log("mediumBreed");
    }

    if (dogWeight > 20 && dogWeight <= 70) {
      setSteps(largeBreed);
      console.log("largeBreed");
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div className="App">
      <Formik
        initialValues={{
          // User Info
          dogName: "",
          neutered: "",
          age: "",
          ageStage: "",
          dogWeight: "",
          status: "smallBreed",
          physique: "",
          exercise: "",
          offers: "",
          email: "",

          //Parent Details
          firstName: "",
          lastName: "",
          discount: "",

          //ShippingDetails
          deliveryDate: "",
          address: "",
          city: "",
          postcode: "",
          phoneNumber: "",
          shippingFirstName: "",
          shippingLastName: "",
          shippingEmail: "",
          password: "",
          deliveryInstructions: ""
        }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, isValid }) => (
          <Form>
            <div className="container">
              <div className="form">
                <Switch>
                  <Redirect from="/" exact to={`/form/dog-info`} />
                  <Route
                    path="/form/dog-info"
                    render={() => (
                      <SignUpDogInfo
                        dogWeight={dogWeight}
                        setDogWeight={setDogWeight}
                        physique={physique}
                        setPhysique={setPhysique}
                        age={age}
                        setAge={setAge}
                        ageStage={ageStage}
                        setAgeStage={setAgeStage}
                        exercise={exercise}
                        setExercise={setExercise}
                        setSteps={setSteps}
                      ></SignUpDogInfo>
                    )}
                  ></Route>
                  {handleRoute(values)}
                </Switch>
                <div>
                  {activeStep > 0 && activeStep !== 1 && activeStep !== 7 && (
                    <button type="button" onClick={() => previous()}>
                      Back
                    </button>
                  )}

                  {activeStep !== 1 &&
                    activeStep !== 2 &&
                    activeStep !== 3 &&
                    activeStep !== 4 &&
                    activeStep !== 5 &&
                    activeStep !== 6 &&
                    activeStep !== 7 && (
                      <button
                        type="submit"
                        onClick={handleRouteSignUp}
                        disabled={!isValid}
                      >
                        {activeStep + 1 === steps.length
                          ? "submit"
                          : "calculate"}
                      </button>
                    )}

                  {activeStep === 1 && (
                    <button type="button" onClick={() => previous()}>
                      Edit
                    </button>
                  )}

                  {activeStep === 1 && <button type="submit">Continue</button>}

                  {activeStep === 2 && (
                    <button type="submit">Choose a Plan</button>
                  )}

                  {activeStep === 3 && (
                    <button type="submit">Choose a Recipe</button>
                  )}

                  {activeStep === 4 && <button type="submit">Next</button>}

                  {activeStep === 5 && <button type="submit">Next</button>}

                  {activeStep === 6 && <button type="submit">Next</button>}

                  {activeStep === 7 && (
                    <>
                      <button type="submit">Confirm</button>
                      <p>
                        By submitting your order you are agreeing to our{" "}
                        <a href="#">terms and conditions.</a>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
