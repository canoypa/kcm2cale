import { FC } from "react";
import { useParams } from "react-router";
import { useInitFireFleet, useInitLocalFleet } from "./hooks";

export const InitLocalFleet: FC = () => {
  const { fleetId } = useParams<{ fleetId: string }>();
  useInitLocalFleet(fleetId);

  return null;
};

export const InitFireFleet: FC = () => {
  const { fleetId } = useParams<{ fleetId: string }>();
  useInitFireFleet(fleetId);

  return null;
};
