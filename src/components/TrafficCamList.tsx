import React, { useEffect, useState } from "react";
import { EForecast, Forecast } from "../constants";
import { ITrafficImagesWithName } from "../interfaces";
import { createReport, fetchWeatherTrafficLocation } from "../utils";

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
            setSelectedImage(null);
            setSelectedForecast(null);
            const locationsWithName = await fetchWeatherTrafficLocation(
                dateTime
            );
            setLocations(locationsWithName);
        };

        fetchImages();
    }, [dateTime]);

    const handleLocationClick = (location: ITrafficImagesWithName) => {
        setSelectedImage(location.image);
        setSelectedForecast(location.forecastWeather);
        createReport(dateTime, location);
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
