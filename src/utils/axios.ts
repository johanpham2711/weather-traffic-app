import axios from "axios";
import { Config } from "../constants";
import {
    ITrafficImagesResponse,
    IWeatherForecastsResponse,
} from "../interfaces";

export const fetchTrafficImages = async (
    dateTime: string
): Promise<ITrafficImagesResponse> => {
    try {
        const response = await axios.get(Config.TrafficImagesApiUrl, {
            params: {
                date_time: dateTime,
            },
        });
        return response.data as ITrafficImagesResponse;
    } catch (error) {
        console.error("Error fetching traffic images:", error);
        throw error;
    }
};

export const fetchWeatherForecast = async (
    dateTime: string
): Promise<IWeatherForecastsResponse> => {
    try {
        const response = await axios.get(Config.WeatherForecastApiUrl, {
            params: {
                date_time: dateTime,
            },
        });
        return response.data as IWeatherForecastsResponse;
    } catch (error) {
        console.error("Error fetching weather forecast:", error);
        throw error;
    }
};

export const fetchAddressFromLocation = async (
    lat: number,
    lon: number
): Promise<string> => {
    try {
        const response = await axios.get(
            `${Config.GoogleMapsApiUrl}/geocode/json`,
            {
                params: {
                    latlng: `${lat},${lon}`,
                    key: Config.GoogleMapsApiKey,
                },
            }
        );
        return response.data.results[0].formatted_address;
    } catch (error) {
        console.error("Error fetching address from location:", error);
        throw error;
    }
};
