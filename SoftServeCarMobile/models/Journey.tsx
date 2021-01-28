import { User } from "./User";
import { Stop } from "./Stop";

export type Journey = null | {
  id: number;
  routeDistance: number;
  departureTime: Date;
  countOfSeats: number;
  comments: string;
  isFree: boolean;
  scheduleId: number;
  participants: User[];
  stops: Stop[];
  driver: User;
};
