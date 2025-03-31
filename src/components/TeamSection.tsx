import React, { useState } from 'react';
import MemberDetails from './MemberDetails';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const team = [
    {
      name: "SBAI Walid",
      role: "Développeur Frontend",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Passionné par le développement web depuis plus de 5 ans, je me spécialise dans la création d'interfaces utilisateur modernes et performantes. Mon approche combine créativité et rigueur technique pour offrir la meilleure expérience utilisateur possible.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "Jest", "Cypress"],
      projects: [
        {
          title: "E-commerce Modern",
          description: "Une plateforme e-commerce moderne avec un design épuré et des performances optimisées",
          technologies: ["React", "Next.js", "Stripe", "Tailwind CSS"],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Dashboard Analytics",
          description: "Interface d'administration pour la visualisation de données en temps réel",
          technologies: ["React", "D3.js", "WebSocket", "Material-UI"],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    {
      name: "MALIH Hamza",
      role: "Développeur Frontend",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Lors de mon projet Application Web Météo réalisé en février 2025 au lycée La Tournelle, j'ai développé une application web permettant d'afficher la météo en temps réel en intégrant l'API REST d'OpenWeatherMap. J'ai conçu l'interface en HTML et CSS et mis en place un système permettant à l'utilisateur d'entrer le nom d'une ville pour obtenir des informations météorologiques détaillées telles que la température, l'humidité et la vitesse du vent. Ce projet m'a permis de renforcer mes compétences en développement web, en consommation d'API REST et en gestion de projet, en appliquant des principes d'amélioration continue pour optimiser l'application.",
      skills: ["HTML", "CSS", "JavaScript", "API REST", "Gestion de Projet", "UI/UX Design"],
      projects: [
        {
          title: "Application Web Météo",
          description: "Application météo en temps réel utilisant l'API OpenWeatherMap avec interface utilisateur intuitive",
          technologies: ["HTML", "CSS", "JavaScript", "API REST"],
          image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Portfolio Personnel",
          description: "Site web personnel présentant mes projets et compétences",
          technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
          image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    {
      name: "ARAGRAG Youssef",
      role: "Étudiant en BTS SIO",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Actuellement étudiant en BTS SIO au lycée La Tournelle, je suis passionné par le développement web et la création de sites dynamiques. Au cours de ma formation, j'ai acquis une solide expérience dans la création de sites WordPress et le développement front-end. J'ai notamment réalisé plusieurs projets utilisant MAMP pour la configuration de serveurs locaux, me permettant de développer et tester mes applications web dans un environnement professionnel.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress", "MAMP", "MySQL", "CMS"],
      projects: [
        {
          title: "Application Web Météo",
          description: "Développement d'une application météo en temps réel avec affichage des données météorologiques par ville",
          technologies: ["HTML", "CSS", "JavaScript", "API REST"],
          image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Portfolio Dynamique",
          description: "Développement d'un portfolio personnel avec une interface administrative personnalisée",
          technologies: ["HTML", "CSS", "JavaScript"],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    {
      name: "JEUNE Wesley",
      role: "Expert en Cybersécurité",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Spécialiste en sécurité informatique avec plus de 8 ans d'expérience dans la protection des systèmes d'information. Expert en tests d'intrusion et en mise en place de solutions de sécurité robustes.",
      skills: ["Pentesting", "Cryptographie", "Analyse de Malware", "Security+", "CISSP", "Python", "Kali Linux"],
      projects: [
        {
          title: "Système de Détection d'Intrusion",
          description: "Développement d'un IDS intelligent utilisant l'apprentissage automatique pour détecter les menaces",
          technologies: ["Python", "TensorFlow", "Elasticsearch", "Kibana"],
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Audit de Sécurité Cloud",
          description: "Mise en place d'une méthodologie complète d'audit pour infrastructures cloud",
          technologies: ["AWS Security", "Azure Security", "Docker Security", "Terraform"],
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    {
      name: "GAIMON Nathan",
      role: "Expert DevOps",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Ingénieur DevOps passionné par l'automatisation et l'optimisation des processus de développement. Expert en mise en place de pipelines CI/CD et en gestion d'infrastructures cloud scalables.",
      skills: ["Kubernetes", "Docker", "Jenkins", "Terraform", "AWS", "Azure", "GitLab CI", "Ansible"],
      projects: [
        {
          title: "Pipeline CI/CD Cloud Native",
          description: "Implémentation d'une pipeline de déploiement continu multi-cloud avec monitoring avancé",
          technologies: ["Kubernetes", "ArgoCD", "Prometheus", "Grafana"],
          image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Infrastructure as Code",
          description: "Automatisation complète de l'infrastructure cloud avec gestion des secrets",
          technologies: ["Terraform", "Vault", "AWS", "Azure"],
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
        }
      ]
    }
  ];

  return (
    <section id="team" className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Notre Équipe
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className="bg-gray-900 rounded-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <button
                  onClick={() => setSelectedMember(index)}
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-2 rounded-full text-white font-semibold hover:opacity-90 transition-opacity duration-200"
                >
                  Voir le Profil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal des détails du membre */}
      {selectedMember !== null && (
        <MemberDetails
          member={team[selectedMember]}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
};

export default TeamSection;