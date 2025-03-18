import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm opacity-80 mt-2">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
