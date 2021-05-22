import { FC, lazy, Suspense } from "react";
import { Route, Switch } from "react-router";

const Home = lazy(() => import("../../home"));
const About = lazy(() => import("../../about"));
const SignIn = lazy(() => import("../../sing-in"));
const NewFleet = lazy(() => import("../../new-fleet"));
const Fleet = lazy(() => import("../../fleet"));
const NotFound = lazy(() => import("../../not-found"));

export const RootRouter: FC = () => (
  <>
    <Suspense fallback="">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/new" component={NewFleet} />
        <Route path={["/fleet/:fleetId", "/fleet"]} component={Fleet} />

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </>
);
