import { useTranslation } from "react-i18next";

export type Project = {
	ProjectName: string;
	Description: string;
	TechStack: string[];
};

function ProjectCard(props: { project: Project }) {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col m-3 rounded-xl w-75% justify-center shadow-2xl bg-slate-500 mb-8">
			<div className="flex justify-center font-bold text-xl my-6">
				{props.project.ProjectName}
			</div>

			<div className="flex justify-center mx-12">
				{props.project.Description}
			</div>

			<div className="flex flex-col justify-evenly my-6">
				<h2 className="flex justify-center items-center font-bold">
					{t("techniques")}
				</h2>
				<div className="flex justify-center items-center">
					{props.project.TechStack.map((tech, index) => {
						return (
							<div className="flex font-medium p-4" key={index}>
								{tech}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
