import Confirm from "./Components/Confirm";
import ParentDetail from "./Components/ParentDetails";
import FullDiet from "./Components/ChoosePlan/FullDiet";
import FullDietTopper from "./Components/ChoosePlan/FullDietTopper";
import Topper from "./Components/ChoosePlan/Topper";
import Summary from "./Components/Summary";
import Recipes from "./Components/Recipes/Recipes";
import Treats from "./Components/Treats/Treats";
import ShippingDetails from "./Components/ShippingDetails/ShippingDetails";
import { Switch, Route } from "react-router";

export const smallBreedRoute = () => {
  return (
    <Switch>
      <Route path="/form/summary" component={Summary} />
      <Route path="/form/pup-parent-details" component={ParentDetail} />
      <Route path="/form/full-diet" component={FullDiet} />
      <Route path="/form/recipes" component={Recipes} />
      <Route path="/form/treats" component={Treats} />
      <Route path="/form/shipping-details" component={ShippingDetails} />
      <Route path="/form/confirm" component={Confirm} />
    </Switch>
  );
};
export const mediumBreedRoute = () => {
  return (
    <Switch>
      <Route path="/form/summary" component={Summary} />
      <Route path="/form/pup-parent-details" component={ParentDetail} />
      <Route path="/form/full-diet-topper" component={FullDietTopper} />
      <Route path="/form/recipes" component={Recipes} />
      <Route path="/form/treats" component={Treats} />
      <Route path="/form/shipping-details" component={ShippingDetails} />
      <Route path="/form/confirm" component={Confirm} />
    </Switch>
  );
};
export const largeBreedRoute = () => {
  return (
    <Switch>
      <Route path="/form/summary" component={Summary} />
      <Route path="/form/pup-parent-details" component={ParentDetail} />
      <Route path="/form/topper" component={Topper} />
      <Route path="/form/recipes" component={Recipes} />
      <Route path="/form/treats" component={Treats} />
      <Route path="/form/shipping-details" component={ShippingDetails} />
      <Route path="/form/confirm" component={Confirm} />
    </Switch>
  );
};

console.log(ShippingDetails);
