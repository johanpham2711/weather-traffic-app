import React, { useEffect, useState } from "react";
import { ITrafficImagesWithName } from "../interfaces";
import {
    fetchTrafficImages,
    fetchWeatherForecast,
    matchForecastWeather,
    matchNearestArea,
} from "../utils";
import { EForecast, Forecast } from "../constants";

interface TrafficCamListProps {
    dateTime: string;
}

const TrafficCamList: React.FC<TrafficCamListProps> = ({ dateTime }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedForecast, setSelectedForecast] = useState<EForecast | null>(
        null
    );
    const [locations, setLocations] = useState<ITrafficImagesWithName[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const [trafficImagesData, weatherForecastData] = await Promise.all([
                fetchTrafficImages(dateTime),
                fetchWeatherForecast(dateTime),
            ]);

            const cameras = trafficImagesData.items[0].cameras;
            const areaMetadata = weatherForecastData.area_metadata;
            const forecasts = weatherForecastData.items[0].forecasts;
            const locationNameSet = new Set();

            // Using Google Maps API to get location name

            // const locationsPromise = cameras.map(async (camera) => {
            //     const locationName = await fetchAddressFromLocation(
            //         camera.location.latitude,
            //         camera.location.longitude
            //     );

            //     return {
            //         ...camera,
            //         locationName,
            //     };
            // });
            // const locationsWithName = await Promise.all(locationsPromise);

            const locationsWithName = cameras.map((camera) => {
                let locationName = matchNearestArea(
                    areaMetadata,
                    camera.location
                );
                const forecastWeather = matchForecastWeather(
                    forecasts,
                    locationName
                );

                if (locationNameSet.has(locationName)) {
                    locationName = `${locationName} (Cam #${camera.camera_id})`;
                }
                locationNameSet.add(locationName);

                return {
                    ...camera,
                    locationName,
                    forecastWeather,
                };
            });

            setLocations(locationsWithName);
        };

        if (dateTime) {
            fetchImages();
        }
    }, [dateTime]);

    const handleLocationClick = (location: ITrafficImagesWithName) => {
        setSelectedImage(location.image);
        setSelectedForecast(location.forecastWeather);
    };

    return (
        <div className="traffic-cam-list">
            <div className="location-list">
                {locations.map((location) => (
                    <button
                        key={location.camera_id}
                        className="location-item"
                        onClick={() => handleLocationClick(location)}
                    >
                        {location.locationName}
                    </button>
                ))}
            </div>
            {selectedForecast && (
                <div className="weather-forecast">
                    {Forecast[selectedForecast]}
                </div>
            )}
            {selectedImage && (
                <div className="traffic-cam-image">
                    <img src={selectedImage} alt="Traffic" />
                </div>
            )}
        </div>
    );
};

export default TrafficCamList;
