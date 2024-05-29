export enum EForecast {
    SUNNY = "Sunny",
    CLOUDY = "Cloudy",
    PARTLY_CLOUDY = "Partly Cloudy",
    PARTLY_CLOUDY_DAY = "Partly Cloudy (Day)",
    PARTLY_CLOUDY_NIGHT = "Partly Cloudy (Night)",
    FAIR_DAY = "Fair (Day)",
    FAIR_NIGHT = "Fair (Night)",
    NO_DATA = "No Data",
}

export const Forecast: Record<EForecast, string> = {
    [EForecast.SUNNY]: "☀️",
    [EForecast.CLOUDY]: "☁️",
    [EForecast.PARTLY_CLOUDY]: "⛅",
    [EForecast.PARTLY_CLOUDY_DAY]: "⛅",
    [EForecast.PARTLY_CLOUDY_NIGHT]: "🌫️",
    [EForecast.FAIR_DAY]: "🌤️",
    [EForecast.FAIR_NIGHT]: "🌙",
    [EForecast.NO_DATA]: "No Data",
    // Add more mappings here
};
