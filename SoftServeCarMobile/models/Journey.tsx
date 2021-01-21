export type Journey = null | {
  id: number;
  routeDistance: number;
  departureTime: Date;
  countOfSeats: number;
  comments: string;
  isFree: boolean;
  driverId: number;
  scheduleId: number;
}
