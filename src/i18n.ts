import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import SeTranslation from "../sv_translation.json";
//import EnTranslation from "../en_translation.json";

i18n.use(initReactI18next).init({
	lng: "se",
	fallbackLng: "se",
	interpolation: {
		escapeValue: false,
	},
	resources: {
		// TODO: Lägg till stöd för engelska
		/* en: {
			translation: EnTranslation,
		}, */
		se: {
			translation: SeTranslation,
		},
	},
});

export default i18n;
