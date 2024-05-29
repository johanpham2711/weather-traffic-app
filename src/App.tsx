import React, { useEffect, useState } from "react";
import "./App.css";
import CustomDatePicker from "./components/CustomDatePicker";
import CustomTimePicker from "./components/CustomTimePicker";
import TrafficCamList from "./components/TrafficCamList";
import { combineDateTime } from "./utils";

const App: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);
    const [dateTime, setDateTime] = useState<string>("");

    useEffect(() => {
        if (selectedDate && selectedTime) {
            const combinedDateTime = combineDateTime(
                selectedDate,
                selectedTime
            );
            setDateTime(combinedDateTime);
        } else if (selectedDate) {
            setDateTime(combineDateTime(selectedDate, new Date()));
        }
    }, [selectedDate, selectedTime]);

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
                {dateTime && <TrafficCamList dateTime={dateTime} />}
            </div>
        </div>
    );
};

export default App;

