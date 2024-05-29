import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomDatePickerProps {
    selectedDate: Date | null;
    onDateChange: (date: Date | null) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    selectedDate,
    onDateChange,
}) => {
    return (
        <div className="date-picker">
            <DatePicker
                className="date-picker-component"
                selected={selectedDate}
                onChange={(date: Date) => onDateChange(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select Date"
            />
        </div>
    );
};

export default CustomDatePicker;
