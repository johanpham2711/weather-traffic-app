import moment from "moment";

export const combineDateTime = (date: Date, time: Date): string => {
    return moment(date)
        .set({
            hour: time.getHours(),
            minute: time.getMinutes(),
        })
        .format("YYYY-MM-DD[T]HH:mm:ss");
};
