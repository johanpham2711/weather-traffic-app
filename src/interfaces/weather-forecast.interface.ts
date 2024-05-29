import { EForecast } from "../constants";
import { ILocation } from "./location.interface";

export interface IAreaMetadata {
    name: string;
    label_location: ILocation;
}

export interface IForecast {
    area: string;
    forecast: EForecast;
}

export interface IWeatherForecastItem {
    update_timestamp: string;
    timestamp: string;
    valid_period: {
        start: string;
        end: string;
    };
    forecasts: IForecast[];
}

export interface IWeatherForecastsResponse {
    api_info: {
        status: string;
    };
    area_metadata: IAreaMetadata[];
    items: IWeatherForecastItem[];
}
