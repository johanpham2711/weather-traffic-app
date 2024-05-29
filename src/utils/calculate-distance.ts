import { ILocation } from "../interfaces";

export const calculateDistance = (
    location1: ILocation,
    location2: ILocation
): number => {
    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    const lon1 = (location1.longitude * Math.PI) / 180;
    const lon2 = (location2.longitude * Math.PI) / 180;
    const lat1 = (location1.latitude * Math.PI) / 180;
    const lat2 = (location2.latitude * Math.PI) / 180;

    // Haversine formula
    const dlon = lon2 - lon1;
    const dlat = lat2 - lat1;
    const a =
        Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

    const c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    const r = 6371;

    // calculate the result
    return c * r;
};
