import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import CustomDatePicker from "./components/CustomDatePicker";
import CustomTimePicker from "./components/CustomTimePicker";
import TrafficCamList from "./components/TrafficCamList";
import { combineDateTime } from "./utils";

const App: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);
    const [dateTime, setDateTime] = useState<string | null>(null);

    useEffect(() => {
        let combinedDateTime = "";
        if (selectedDate && selectedTime) {
            combinedDateTime = combineDateTime(selectedDate, selectedTime);
        } else if (selectedDate) {
            combinedDateTime = combineDateTime(selectedDate, new Date());
        }
        setDateTime(combinedDateTime);
    }, [selectedDate, selectedTime]);

    const renderTrafficCamList = useMemo(() => {
        return dateTime ? <TrafficCamList dateTime={dateTime} /> : <></>;
    }, [dateTime]);

    return (
        <div className="App">
            <h1>Weather and Traffic Cam App</h1>
            <div className="grid-container">
                <div className="picker-container">
                    <CustomDatePicker
                        selectedDate={selectedDate}
                        onDateChange={setSelectedDate}
                    />
                    <CustomTimePicker
                        selectedTime={selectedTime}
                        onTimeChange={setSelectedTime}
                    />
                </div>
                {renderTrafficCamList}
            </div>
        </div>
    );
};

export default App;

