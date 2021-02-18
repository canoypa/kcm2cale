import { FC } from "react";
import { Route } from "react-router";
import { Details } from "../organisms/details";
import { Map } from "../organisms/map";
import { Organize } from "../organisms/organize";

export const FleetPageRouter: FC = () => (
  <>
    <Route exact path="/fleet/:fleetId" component={Organize} />
    <Route exact path="/fleet/:fleetId/details" component={Details} />
    <Route exact path="/fleet/:fleetId/map" component={Map} />
  </>
);
