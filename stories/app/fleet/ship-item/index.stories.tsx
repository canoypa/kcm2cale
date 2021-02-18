import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { ShipItem } from "../../../../src/components/fleet/molecules/ship-item";
import { SampleShipsData } from "../../../../src/samples";
import { FleetState, ShipsState } from "../../../../src/store/organize/ships";

const fleetPlace = { fleetNo: 0, turnNo: 0, shipId: "ShipId" };

const initState = ({ set }: MutableSnapshot) => {
  set(FleetState, [fleetPlace]);
  set(ShipsState, new Map([[fleetPlace, SampleShipsData[0]]]));
};

export default {
  title: "App/Fleet/ShipItem",
  component: ShipItem,
  decorators: [
    (Child) => <RecoilRoot initializeState={initState} children={<Child />} />,
  ],
} as Meta;

export const Basic: Story<ComponentProps<typeof ShipItem>> = () => (
  <ShipItem fleetPlace={fleetPlace} swapShip={() => {}} />
);
