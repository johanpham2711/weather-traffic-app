import axios from "axios";
import { Config } from "../constants";
import {
    ITrafficImagesResponse,
    ITrafficImagesWithName,
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

export const fetchWeatherTrafficLocation = async (
    dateTime: string
): Promise<ITrafficImagesWithName[]> => {
    try {
        const response = await axios.get(
            `${Config.ServerApiUrl}/weather-traffic`,
            {
                params: {
                    dateTime,
                },
            }
        );
        return response.data.data as ITrafficImagesWithName[];
    } catch (error) {
        console.error("Error fetching weather traffic location:", error);
        throw error;
    }
};

export const createReport = async (
    dateTime: string,
    location: ITrafficImagesWithName
): Promise<ITrafficImagesWithName> => {
    try {
        const response = await axios.post(
            `${Config.ServerApiUrl}/report`,
            {
                time: dateTime,
                location,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data.data as ITrafficImagesWithName;
    } catch (error) {
        console.error("Error create report:", error);
        throw error;
    }
};
