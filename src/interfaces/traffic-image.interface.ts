import { EForecast } from "../constants";
import { ILocation } from "./location.interface";

interface IImageMetadata {
    height: number;
    width: number;
    md5: string;
}

export interface ITrafficImage {
    camera_id: string;
    image: string;
    image_metadata: IImageMetadata;
    location: ILocation;
    timestamp: string;
}

export interface ITrafficImagesWithName extends ITrafficImage {
    locationName: string;
    forecastWeather: EForecast;
}

export interface ITrafficImagesResponse {
    api_info: {
        status: string;
    };
    items: {
        cameras: ITrafficImage[];
    }[];
}
