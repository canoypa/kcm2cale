import { FC, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";

const Home = lazy(() => import("../../home"));
const SignIn = lazy(() => import("../../sing-in"));
const NewFleet = lazy(() => import("../../new-fleet"));
const Fleet = lazy(() => import("../../fleet"));
const NotFound = lazy(() => import("../../not-found"));

export const RootRouter: FC = () => (
  <>
    <Suspense fallback="">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/new" component={NewFleet} />
        <Route path="/fleet/:fleetId" component={Fleet} />

        <Route path="/fleet">
          <Redirect to="/" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </>
);
