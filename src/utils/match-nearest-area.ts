import { IAreaMetadata, ILocation } from "../interfaces";
import { calculateDistance } from "./calculate-distance";

export const matchNearestArea = (
    areaMetadata: IAreaMetadata[],
    location: ILocation
) => {
    const sortedAreaMetadata = areaMetadata;
    sortedAreaMetadata.sort((a, b) => {
        const distanceA = calculateDistance(location, a.label_location);
        const distanceB = calculateDistance(location, b.label_location);

        // Compare the 2 distances
        if (distanceA < distanceB) return -1;
        if (distanceA > distanceB) return 1;
        return 0;
    });

    return sortedAreaMetadata[0]
        ? sortedAreaMetadata[0].name
        : "Unknown Location";
};
