import clear_sky_day from "../media/clear-day.png";
import clear_sky_night from "../media/clear-night.png";
import maily_cloudy_day from "../media/cloudy-day-1.png";
import maily_cloudy_night from "../media/cloudy-night-1.png";
import partly_cloudy_day from "../media/fair-day.png";
import partly_cloudy_night from "../media/fair-night.png";
import cloudy from "../media/cloudy.png";
import fog_day from "../media/fog-day.png";
import fog_night from "../media/fog-night.png";
import drizzle from "../media/drizzle.png";
import freezing_drizzle from "../media/freezing-drizzle.png";
import light_rain from "../media/rainy-1.png";
import moderate_rain from "../media/rainy-2.png";
import heavy_rain from "../media/rainy-3.png";
import freezing_rain from "../media/freezing-rain.png";
import light_snowfall from "../media/snowy-1.png";
import moderate_snowfall from "../media/snowy-2.png";
import heavy_snowfall from "../media/snow-grain.png";
import snow_grain from "../media/snow-grain.png";
import rainshower_day from "../media/rainy-day.png";
import rainshower_night from "../media/rainy-night.png";
import snowshower_day from "../media/snowy-day.png";
import snowshower_night from "../media/snowy-night.png";
import thunderstorm from "../media/thunder.png";

export const weather_code_int = {
  0: {
    name: "Clear sky",
    icons: {
      day: clear_sky_day,
      night: clear_sky_night,
    },
  },
  1: {
    name: "Mainly cloudy",
    icons: {
      day: maily_cloudy_day,
      night: maily_cloudy_night,
    },
  },
  2: {
    name: "Partly cloudy",
    icons: {
      day: partly_cloudy_day,
      night: partly_cloudy_night,
    },
  },
  3: {
    name: "Cloudy",
    icons: {
      day: cloudy,
      night: cloudy,
    },
  },
  45: {
    name: "Fog",
    icons: {
      day: fog_day,
      night: fog_night,
    },
  },
  48: {
    name: "Fog",
    icons: {
      day: fog_day,
      night: fog_night,
    },
  },
  51: {
    name: "Light drizzel",
    icons: {
      day: drizzle,
      night: drizzle,
    },
  },
  53: {
    name: "Moderate drizzel",
    icons: {
      day: drizzle,
      night: drizzle,
    },
  },
  55: {
    name: "Dence drizzel",
    icons: {
      day: drizzle,
      night: drizzle,
    },
  },
  56: {
    name: "Light freezing drizzel",
    icons: {
      day: freezing_drizzle,
      night: freezing_drizzle,
    },
  },
  57: {
    name: "Dence freezing drizzel",
    icons: {
      day: freezing_drizzle,
      night: freezing_drizzle,
    },
  },
  61: {
    name: "Light rain",
    icons: {
      day: light_rain,
      night: light_rain,
    },
  },
  63: {
    name: "Moderate rain",
    icons: {
      day: moderate_rain,
      night: moderate_rain,
    },
  },
  65: {
    name: "Heavy rain",
    icons: {
      day: heavy_rain,
      night: heavy_rain,
    },
  },
  66: {
    name: "Light freezing rain",
    icons: {
      day: freezing_rain,
      night: freezing_rain,
    },
  },
  67: {
    name: "Heavy freezing rain",
    icons: {
      day: freezing_rain,
      night: freezing_rain,
    },
  },
  71: {
    name: "Light snowfall",
    icons: {
      day: light_snowfall,
      night: light_snowfall,
    },
  },
  73: {
    name: "Moderate snowfall",
    icons: {
      day: moderate_snowfall,
      night: moderate_snowfall,
    },
  },
  75: {
    name: "Heavy snowfall",
    icons: {
      day: heavy_snowfall,
      night: heavy_snowfall,
    },
  },
  77: {
    name: "Snow grain",
    icons: {
      day: snow_grain,
      night: snow_grain,
    },
  },
  80: {
    name: "Light rain showers",
    icons: {
      day: rainshower_day,
      night: rainshower_night,
    },
  },
  81: {
    name: "Moderate rain showers",
    icons: {
      day: rainshower_day,
      night: rainshower_night,
    },
  },
  82: {
    name: "Violent rain showers",
    icons: {
      day: rainshower_day,
      night: rainshower_night,
    },
  },
  85: {
    name: "Light snow showers",
    icons: {
      day: snowshower_day,
      night: snowshower_night,
    },
  },
  86: {
    name: "violent snow showers",
    icons: {
      day: snowshower_day,
      night: snowshower_night,
    },
  },
  95: {
    name: "Thunderstorm",
    icons: {
      day: thunderstorm,
      night: thunderstorm,
    },
  },
  96: {
    name: "Thunderstorm with hail",
    icons: {
      day: thunderstorm,
      night: thunderstorm,
    },
  },
  99: {
    name: "Thunderstorm with hail",
    icons: {
      day: thunderstorm,
      night: thunderstorm,
    },
  },
};
