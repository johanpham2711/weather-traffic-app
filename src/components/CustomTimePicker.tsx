import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomTimePickerProps {
    selectedTime: Date | null;
    onTimeChange: (time: Date | null) => void;
}

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
    selectedTime,
    onTimeChange,
}) => {
    return (
        <div className="date-picker">
            <DatePicker
                className="date-picker-component"
                selected={selectedTime}
                onChange={(time: Date) => {
                    onTimeChange(time);
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="HH:mm"
                placeholderText="Select Time"
            />
        </div>
    );
};

export default CustomTimePicker;
