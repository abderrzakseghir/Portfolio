import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  "personal": {
    "name": "Abderrazak Seghir",
    "title": "Développeur Full Stack",
    "status": "Étudiant en Master 2 MIAGE-SID",
    "objective": "Recherche un poste en CDI pour mettre en valeur mes compétences et apprendre de nouvelles technologies",
    "description": "Développeur Full Stack avec des compétences en .NET, Blazor, et SQL Server. Actuellement en dernière année de Master 2 MIAGE spécialité SID, je recherche un poste en CDI pour appliquer mes compétences et continuer à apprendre. J'ai une expérience en gestion de projets, et je suis certifié AWS Certified Cloud Practitioner (CLF-C02)",
    "avatar": "/assets/image/avatar.jpg"
  },
  "projects": [
{
      "id": 1,
      "title": "TRD - Paris Sportifs (Microservices)",
      "images": [
        "/assets/image/trd_architecture.jpg",
        "/assets/image/trd_swagger.jpg"
      ],
      "description": "Conception et développement d'une architecture distribuée pour une application de paris sportifs (Coupe du Monde 2026).",
      "technologies": [".NET 10", "Docker", "PostgreSQL", "RabbitMQ", "DDD"],
      "achievements": [
        "Architecture en Microservices suivant l'approche Domain-Driven Design (DDD)",
        "Conteneurisation complète de l'infrastructure backend avec Docker",
        "Mise en place d'APIs REST performantes et communication asynchrone",
        "Gestion de la cohérence des données et déploiement CI/CD"
      ]
    },
    {
      "id": 2,
      "title": "Prigra",
      "images": [
        "/assets/image/prigra/prigra.png",
        "/assets/image/prigra/prigra_frame_1.svg",
        "/assets/image/prigra/prigra_frame_2.svg",
        "/assets/image/prigra/prigra_frame3.svg",
        "/assets/image/prigra/prigra_frame4.svg"
      ],
      "description": "Plateforme web pour la gestion des projets de fin d'étude en Algérie.",
      "technologies": ["Django", "ReactJS"],
      "achievements": [
        "Conception et développement des fonctionnalités principales",
        "Intégration du front-end avec le back-end",
        "Utilisation des pratiques de la méthodologie Agile Scrum"
      ]
    },
    {
      "id": 3,
      "title": "JARVIS",
      "images": [
        "/assets/image/jarvis/jarvis_1.svg",
        "/assets/image/jarvis/jarvis_fram3.svg",
        "/assets/image/jarvis/jarvis_frame4.svg",
        "/assets/image/jarvis/jarvis_frame5.svg",
        "/assets/image/jarvis/jarvis_frame6.svg"
      ],
      "description": "Application mobile de gestion de projets basée sur l'IA.",
      "technologies": ["Flutter", "NodeJS"],
      "achievements": [
        "2ème place lors du Hackathon national de 48 heures GDG Devfest",
        "Développement d'une application mobile basée sur l'IA"
      ]
    }, 
    {
      "id": 4,
      "title": "MByte - Intégration de Stockage Externe",
      "images": [
        "/assets/image/storage_integration.jpg"
      ],
      "description": "Intégration transparente de stockages externes (S3, WebDAV) avec chiffrement des données.",
      "technologies": ["S3", "WebDAV", "Encryption", "Backend"],
      "achievements": [
        "Intégration d'Amazon S3 et WebDAV pour une flexibilité de stockage multi-backend",
        "Implémentation du chiffrement des fichiers avant stockage externe pour la sécurité",
        "Gestion transparente des fichiers sur plusieurs solutions de stockage",
        "Architecture multi-backend avec redondance et load balancing",
        "Stockage intelligent et récupération optimale pour performance et fiabilité"
      ]
    },
        {
      "id": 5,
      "title": "Comiteplus",
      "images": [
        "/assets/image/esiway/Group 53.png",
        "/assets/image/esiway/Group 54.png",
        "/assets/image/esiway/Group 55.png",
        "/assets/image/esiway/Group 56.png"
      ],
      "description": "Intégration du site web dans une application mobile et réalisation des tests unitaires.",
      "technologies": ["UI", "HTML", "CSS", "PHP", "JavaScript"],
      "achievements": [
        "Intégration réussie du site web dans une application mobile",
        "Réalisation complète des tests unitaires",
        "Appréhension de l'activité d'un développeur indépendant"
      ]
    },
  ],
  "education": [
    {
      "school": "Institut des sciences du Digital, Management Cognition",
      "degrees": [
        { "degree": "Master Miage SID", "period": "2024 - 2026", "description": "Systèmes d'information, Business Intelligence, analyse de données, maîtrise d'ouvrage." },
        { "degree": "Licence Miage", "period": "2023 - 2024", "description": "Informatique et gestion des entreprises." }
      ]
    },
    {
      "school": "École nationale supérieure d'informatique (ESI) - Algérie",
      "degrees": [
        { 
          "degree": "Classes Préparatoires & 1ère année Cycle Ingénieur", 
          "period": "2020 - 2022", 
          "description": "Formation intensive en Mathématiques, Algorithmique, Recherche Opérationnelle (RO), Électronique et Réseaux." 
        }
      ]
    }
  ],
  "experience": [
    {
      "position": "Développeur Full Stack - Alternance",
      "company": "Afludia",
      "period": "2024 - Présent",
      "description": "Développement d'applications web en utilisant .NET, Blazor et SQL Server.",
      "achievements": ["Travail sur plusieurs projets en utilisant .NET et Blazor", "Gestion de bases de données avec SQL Server", "Collaboration en équipe"]
    },
    {
      "position": "Développeur Full Stack - Stage",
      "company": "Solutions Développement Informatique",
      "period": "Avril 2024 - Juin 2024",
      "description": "Développement de la partie front-end et back-end d'une application web.",
      "achievements": ["Développement complet de l'application web", "Intégration du site web dans une application mobile", "Réalisation des tests unitaires"]
    },
    {
      "position": "Équipier Polyvalent",
      "company": "McDonald's Nancy",
      "period": "Février 2024 - Décembre 2025",
      "description": "Travail en temps partiel aux côtés de mes études dans divers domaines (accueil, caisse, cuisine).",
      "achievements": ["Service client et gestion des commandes", "Travail en équipe dans un environnement dynamique", "Gestion du temps entre études et travail"]
    }
  ],
  "contact": {
    "email": "abderrazakseghir1@gmail.com",
    "phone": "+33 7 66 72 99 78",
    "linkedin": "https://linkedin.com/in/abderrazak-seghir",
    "github": "https://github.com/abderrazak-seghir",
    "location": "France"
  },
  "skills": [
    ".NET", 
    "C#", 
    "Blazor", 
    "Microservices", 
    "Docker", 
    "PostgreSQL", 
    "RabbitMQ", 
    "JavaScript", 
    "React", 
    "Flutter", 
    "Python", 
    "Java", 
    "SQL Server", 
    "Git", 
    "AWS", 
    "Agile/Scrum"
  ]
};