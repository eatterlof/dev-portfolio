import { LANGUAGES } from "../constants";
import { useTranslation } from "react-i18next";

export const Menu = () => {
	const { i18n, t } = useTranslation();
	const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const lang_code = e.target.value;
		i18n.changeLanguage(lang_code);
	};
	return (
		<nav className="container mx-auto px-6 py-3">
			<div className="flex justify-between items-center">
				<div>
					{/* <a href="#" className="text-2xl font-bold text-gray-800">
						- Erik Atterlöf -
					</a> */}
				</div>
				<div className="flex space-x-4">
					<a href="#about" className="text-gray-800">
						{t("about")}
					</a>
					<a href="#education" className="text-gray-800">
						{t("education")}
					</a>
					<a href="#skills" className="text-gray-800">
						{t("skills")}
					</a>
					<a href="#certificates" className="text-gray-800">
						{t("certificates")}
					</a>
					<a href="#projects" className="text-gray-800">
						{t("projects")}
					</a>
					<a href="#contact" className="text-gray-800">
						{t("contact_me")}
					</a>
				</div>
				<div>
					{/* <select defaultValue={i18n.language} onChange={onChangeLang}>
					{LANGUAGES.map(({ code, label }) => (
						<option key={code} value={code}>
							{label}
						</option>
					))}
				</select> */}
				</div>
			</div>
		</nav>
	);
};
