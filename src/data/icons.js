import clear_sky_day from "./../media/svg/clear-day.svg";
import clear_sky_night from "./../media/svg/clear-night.svg";
import maily_cloudy_day from "./../media/svg/cloudy-day-1.svg";
import maily_cloudy_night from "./../media/svg/cloudy-night-1.svg";
import partly_cloudy_day from "./../media/svg/fair-day.svg";
import partly_cloudy_night from "./../media/svg/fair-night.svg";
import cloudy from "./../media/svg/cloudy.svg"
import fog_day from "./../media/svg/cloudy-day-1.svg";
import fog_night from "./../media/svg/cloudy-day-1.svg";
import drizzle from "./../media/svg/rainy-4.svg";
import freezing_drizzle from "./../media/svg/rain-and-snow-mix.svg";
import light_rain from "./../media/svg/rainy-1.svg";
import moderate_rain from "./../media/svg/rainy-2.svg";
import heavy_rain from "./../media/svg/rainy-3.svg";
import freezing_rain from "./../media/svg/clear-day.svg";
import light_snowfall from "./../media/svg/snowy-1.svg";
import moderate_snowfall from "./../media/svg/snowy-2.svg";
import heavy_snowfall from "./../media/svg/snowy-3.svg";
import snow_grain  from "./../media/svg/snowy-4.svg";
import light_rainshower_day from "./../media/svg/rainy-1-day.svg"
import light_rainshower_night from "./../media/svg/rainy-1-night.svg";
import moderate_rainshower_day from "./../media/svg/rainy-2-day.svg";
import moderate_rainshower_night from "./../media/svg/rainy-2-night.svg";
import violent_rainshower_day from "./../media/svg/rainy-3-day.svg";
import violent_rainshower_night from "./../media/svg/rainy-3-night.svg";
import light_snowshower_day from "./../media/svg/snowy-1-day.svg";
import light_snowshower_night from "./../media/svg/snowy-1-night.svg";
import violent_snowshower_day from "./../media/svg/snowy-3-day.svg";
import violent_snowshower_night from "./../media/svg/snowy-3-night.svg"
import thunderstorm from "./../media/svg/isolated-thunderstorms.svg";
import thunderstorm_with_hail from "./../media/svg/scattered-thunderstorms.svg"

export const weather_code_int = {
    0: {
        name: "Clear sky",
        icons: {
            day: clear_sky_day,
            night: clear_sky_night
        }
    },
    1: {
        name: "Mainly cloudy",
        icons: {
            day: maily_cloudy_day,
            night: maily_cloudy_night
        }
    },
    2: {
        name: "Partly cloudy",
        icons: {
            day: partly_cloudy_day,
            night: partly_cloudy_night
           
        }
    },
    3: {
        name: "Cloudy",
        icons: {
            day: cloudy,
            night: cloudy
        }
    },
    45: {
        name: "Fog",
        icons: {
            day: fog_day,
            night: fog_night
        }
    },
    48: {
        name: "Fog",
        icons: {
            day: fog_day,
            night: fog_night
        }
    },
    51: {
        name: "Light drizzel",
        icons: {
            day: drizzle,
            night: drizzle
        }
    },
    52: {
        name: "Moderate drizzel",
        icons: {
            day: drizzle,
            night: drizzle
        }
    },
    53: {
        name: "Dence drizzel",
        icons: {
            day: drizzle,
            night: drizzle
        }
    },
    56: {
        name: "Light freezing drizzel",
        icons: {
            day: freezing_drizzle,
            night: freezing_drizzle
        }
    },
    57: {
        name: "Dence freezing drizzel",
        icons: {
            day: freezing_drizzle,
            night: freezing_drizzle
        }
    },
    61: {
        name: "Light rain",
        icons: {
            day: light_rain,
            night: light_rain
        }
    },
    62: {
        name: "Moderate rain",
        icons: {
            day: moderate_rain,
            night: moderate_rain
        }
    },
    65: {
        name: "Heavy rain",
        icons: {
            day: heavy_rain,
            night: heavy_rain
        }
    },
    66: {
        name: "Light freezing rain",
        icons: {
            day: freezing_rain,
            night: freezing_rain
        }
    },
    67: {
        name: "Heavy freezing rain",
        icons: {
            day: freezing_rain,
            night: freezing_rain
        }
    },
    71: {
        name: "Light snowfall",
        icons: {
            day: light_snowfall,
            night: light_snowfall
        }
    },
    72: {
        name: "Moderate snowfall",
        icons: {
            day: moderate_snowfall,
            night: moderate_snowfall
        }
    },
    73: {
        name: "Heavy snowfall",
        icons: {
            day: heavy_snowfall,
            night: heavy_snowfall
        }
    },
    77: {
        name: "Snow grain",
        icons: {
            day: snow_grain,
            night: snow_grain
        }
    },
    80: {
        name: "Light rain showers",
        icons: {
            day: light_rainshower_day,
            night: light_rainshower_night
        }
    },
    81: {
        name: "Moderate rain showers",
        icons: {
            day: moderate_rainshower_day,
            night: moderate_rainshower_night
        }
    },
    82: {
        name: "Violent rain showers",
        icons: {
            day: violent_rainshower_day,
            night: violent_rainshower_night
        }
    },
    85: {
        name: "Light snow showers",
        icons: {
            day: light_snowshower_day,
            night: light_snowshower_night
        }
    },
    86: {
        name: "violent snow showers",
        icons: {
            day: violent_snowshower_day,
            night: violent_snowshower_night
        }
    },
    95: {
        name: "Thunderstorm",
        icons: {
            day: thunderstorm,
            night: thunderstorm
        }
    },
    96: {
        name: "Thunderstarom with hail",
        icons: {
            day: thunderstorm_with_hail,
            night: thunderstorm_with_hail
        }
    },
    99: {
        name: "Thunderstarom with hail",
        icons: {
            day: thunderstorm_with_hail,
            night: thunderstorm_with_hail
        }
    },
}