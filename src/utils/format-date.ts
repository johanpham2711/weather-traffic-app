import moment from "moment-timezone";

export const formatDate = (date: Date): string => {
    const formattedDate = moment(date)
        .tz("Asia/Singapore")
        .format("YYYY-MM-DD[T]HH:mm:ss");
    return formattedDate;
};
