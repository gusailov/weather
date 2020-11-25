import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "Current Weather": "Current Weather ",
      WIND: "WindSpeed",
      "m/s": "m/s",
      "Feels like": "Feels like",
      "Daily Forecast": "Daily Forecast",
      "Hourly Forecast": "Hourly Forecast",
      Evening: "Evening",
      Morning: "Morning",
    },
  },
  uk: {
    translation: {
      "Current Weather": "ЗАРАЗ",
      WIND: "ВІТЕР",
      "m/s": "м/с",
      "Feels like": "Відчувається",
      "Daily Forecast": "ЩОДЕННИЙ ПРОГНОЗ",
      "Hourly Forecast": "ПОГОДИННИЙ ПРОГНОЗ",
      Evening: "РАНОК",
      Morning: "ВЕЧІР",
    },
  },
  ru: {
    translation: {
      "Current Weather": "СЕЙЧАС",
      WIND: "ВЕТЕР",
      "m/s": "м/с",
      "Feels like": "Ощущается",
      "Daily Forecast": "ЕЖЕДНЕВНЫЙ ПРОГНОЗ",
      "Hourly Forecast": "ПОЧАСОВОЙ ПРОГНОЗ",
      Evening: "УТРО",
      Morning: "ВЕЧЕР",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
