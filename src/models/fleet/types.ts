export const FleetType = {
  Normal: 'normal',
  Carrier: 'carrier',
  Surface: 'surface',
  Transport: 'transport',
  Striking: 'striking',
} as const
export type FleetType = (typeof FleetType)[keyof typeof FleetType]
