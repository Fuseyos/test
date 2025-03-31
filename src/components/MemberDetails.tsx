import React from 'react';
import { X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

interface Member {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  projects: Project[];
}

interface MemberDetailsProps {
  member: Member;
  onClose: () => void;
}

const MemberDetails: React.FC<MemberDetailsProps> = ({ member, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl overflow-hidden">
          {/* Header avec bouton de fermeture */}
          <div className="relative p-6 bg-gray-800">
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-white">{member.name}</h2>
                <p className="text-purple-400">{member.role}</p>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="p-6 space-y-8">
            {/* Biographie */}
            <section>
              <h3 className="text-xl font-semibold text-white mb-4">Biographie</h3>
              <p className="text-gray-300">{member.bio}</p>
            </section>

            {/* Compétences */}
            <section>
              <h3 className="text-xl font-semibold text-white mb-4">Compétences</h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Projets */}
            <section>
              <h3 className="text-xl font-semibold text-white mb-4">Projets</h3>
              <div className="grid gap-6">
                {member.projects.map((project, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-6">
                    <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;