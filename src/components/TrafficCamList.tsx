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
        <div>
            <div className="flex-container">
                <div className="location-list">
                    {locations.map((location) => (
                        <button
                            className="location-item"
                            key={location.camera_id}
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
            </div>
            <div className="flex-container">
                {selectedImage ? (
                    <div className="traffic-cam-image">
                        <img className="traffic-cam-image" src={selectedImage} alt="Traffic" />
                    </div>
                ) : (
                    <div></div>
                )}
                <div></div>
            </div>
        </div>
    );
};

export default TrafficCamList;
