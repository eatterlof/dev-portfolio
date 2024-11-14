import ProjectCard, { Project } from "./components/ProjectCard";
import { Menu } from "./components/Menu";
import "./i18n";
import { useTranslation } from "react-i18next";

function App() {
	// TODO: Ta inspo från:
	// https://antfu.me/
	// https://brittanychiang.com/

	const { t } = useTranslation();

	const selectedTechniquesList: string[] = [
		"C#",
		"JavaScript & TypeScript",
		"Blazor",
		"React",
		"APIs",
		".NET",
		"MVC",
		"Azure DevOps",
		"SAFe and Scrum",
		"Azure",
	];

	const educationList: string[] = [
		"Systemvetenskap, IT och människa - Göteborgs Universitet, Göteborg",
	];

	const certificateList: string[] = [
		"Microsoft Azure Developer Associate: AZ-204",
	];

	const workProjectList: Project[] = [
		{
			ProjectName: t("skolpraktikssystem"),
			Description: t("skolpraktikDesc"),
			TechStack: [
				"C#",
				"MVC",
				"Entity Framework",
				"Azure DevOps",
				"SQL",
				"Razor Pages",
				".NET",
			],
		},
		{
			ProjectName: t("forestInvoice"),
			Description: t("forestInvoiceDesc"),
			TechStack: [
				"C#",
				"MVC",
				"Entity Framework",
				"Azure",
				"SQL",
				"Minimal Api",
				".NET",
				"Azure DevOps",
				"Razor Pages",
			],
		},
		{
			ProjectName: "Sogeti",
			Description: t("sogetiDesc"),
			TechStack: [
				"React",
				"TypeScript",
				"TailwindCSS",
				"C#",
				"Azure Functions",
				"Azure Storage",
				"Azure DevOps",
				"Twilio",
			],
		},
		{
			ProjectName: t("industryDataApp"),
			Description: t("industryDataDesc"),
			TechStack: [
				"Vite",
				"React",
				"TypeScript",
				"TailwindCSS",
				"C#",
				".NET",
				"Minimal Api",
				"Azure DevOps",
			],
		},
	];

	const hobbyProjectList: Project[] = [
		{
			ProjectName: "GFA (Gamers Free Agency) V1",
			Description: t("gfa1Desc"),
			TechStack: [
				"React",
				"JavaScript",
				"Azure",
				"Node.js",
				"Express",
				"REST",
				"MongoDb",
				"TailwindCSS",
			],
		},
		{
			ProjectName: "GFA (Gamers Free Agency) V2",
			Description: t("gfa2Desc"),
			TechStack: [
				"React",
				"C#",
				"TypeScript",
				"Azure",
				"Minimal Api",
				"REST",
				"MongoDb",
				"TailwindCSS",
			],
		},
		{
			ProjectName: "GFA (Gamers Free Agency) V3",
			Description: t("gfa3Desc"),
			TechStack: [
				"C#",
				"Blazor",
				"Entity Framework",
				"Microsoft Identity",
				"SQL",
				"Azure DevOps",
				"Azure",
			],
		},
		{
			ProjectName: "Chess",
			Description: t("chessDesc"),
			TechStack: ["Unity", "C#"],
		},
		{
			ProjectName: "Mobile Dice Tracker",
			Description: t("diceDesc"),
			TechStack: ["React Native", "Expo", "TailwindCSS", "TypeScript"],
		},
	];

	return (
		<>
			{/* HEADER */}
			<header className="bg-slate-400 sticky top-0 w-full shadow-md">
				<Menu />
			</header>
			{/* END HEADER */}
			<div className="flex flex-col" id="mainPage">
				<div
					className="flex flex-col items-center bg-slate-300"
					id="mainContainer"
				>
					{/* HOME */}
					<section
						className="flex flex-col items-center mb-8 mt-4 w-1/2"
						id="home"
					>
						<h1 className="text-xl mb-2">{t("hello")}</h1>
						<h2 className="font-bold text-2xl">{t("my_name_is")}</h2>
					</section>
					{/* ABOUT */}
					<section className="flex flex-col items-center mb-8 mt-4" id="about">
						<h1 className="font-bold text-2xl mb-4">{t("about")}</h1>
						<div className="flex w-1/2">
							{t("about_me_1")} <br /> <br />
							{t("about_me_2")} <br /> <br />
							{t("about_me_3")} <br /> <br />
							{t("about_me_4")}
						</div>
					</section>
					{/* EDUCATION */}
					<section
						className="flex flex-col items-center mb-8 mt-4 w-1/2"
						id="education"
					>
						<h1 className="font-bold text-2xl mb-4">{t("education")}</h1>
						<div className="flex w-1/2 justify-center mb-4">
							{t("educationDesc")}
						</div>
						{educationList.map((education, index) => {
							return (
								<div key={index} className="">
									{education}
								</div>
							);
						})}
					</section>
					{/* SKILLS */}
					<section
						className="flex flex-col items-center mb-8 mt-4 w-1/2"
						id="skills"
					>
						<h1 className="font-bold text-2xl mb-4">{t("skills")}</h1>
						<div className="flex w-1/2 justify-center mb-4">
							{t("skillsDesc")}
						</div>
						{selectedTechniquesList.map((technique, index) => {
							return (
								<div key={index} className="">
									{technique}
								</div>
							);
						})}
					</section>
					{/* CERTIFICATES */}
					<section
						className="flex flex-col items-center mb-8 mt-4 w-1/2"
						id="certificates"
					>
						<h1 className="font-bold text-2xl mb-4">{t("certificates")}</h1>
						<div className="flex w-1/2 justify-center mb-4">
							{t("certificatesDesc")}
						</div>
						{certificateList.map((certificate, index) => {
							return (
								<div key={index} className="">
									{certificate}
								</div>
							);
						})}
					</section>
					{/* PROJECTS */}
					<section className="flex flex-col items-center mb-8" id="projects">
						<h1 className="font-bold text-2xl mb-4">{t("projects")}</h1>
						<div className="flex-col">
							{workProjectList.map((project, index) => {
								return <ProjectCard key={index} project={project} />;
							})}
							<h2 className="flex justify-center font-bold text-2xl mb-4">
								{t("hobby_projects")}
							</h2>
							{hobbyProjectList.map((project, index) => {
								return <ProjectCard key={index} project={project} />;
							})}
						</div>
					</section>
					{/* CONTACT ME */}
					<section className="flex flex-col mb-8" id="contact">
						<h1 className="font-bold text-xl mb-4">{t("contact_me")}</h1>
						<div className="flex justify-evenly">
							<a
								href="mailto: erik.atterlof@gmail.com"
								className=""
								target="_blank"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="48"
									height="48"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
										fill="currentColor"
									/>
								</svg>
							</a>
							<a
								href="https://github.com/eatterlof"
								className=""
								target="_blank"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="48"
									height="48"
									viewBox="0 0 24 24"
								>
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</a>
						</div>
					</section>
					{/* FOOTER */}
					{/* <div className="flex flex-col mb-8" id="contact">
						<h1 className="font-bold text-xl mb-4">Footer</h1>
						<div className="flex justify-center">
							<div>test</div>
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
}

export default App;
