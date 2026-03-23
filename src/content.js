// Portfolio content file for Shreesha Bhat

export const content = {
  name: "Shreesha Bhat",
  title: "Software Engineer",
  email: "shreeshabhat510@gmail.com",
  phone: "+91 6362458730",
  linkedin: "https://linkedin.com/in/bhat-shreesha",
  summary: `Software Engineer (Cloud-Native Systems) with 3+ years of experience designing, building, and maintaining scalable cloud-native systems and on-prem datacenters. Strong background in Golang-based microservices, distributed systems, and infrastructure automation with a focus on performance, reliability, and security. Proven track record of delivering production-ready solutions in fast-paced engineering environments.`,
  experience: [
    {
      company: "Hewlett Packard Enterprise",
      role: "Cloud Developer",
      period: "Sep 2022 – Present",
      details: [
        "Currently developing a Morpheus plugin to support server and cluster lifecycle management.",
        "Designed and implemented the \"Remove Server\" functionality, enabling effective server lifecycle management for VME hosts in the PCBE system.",
        "Architected and deployed secure RESTful microservices in Golang using Docker, Kubernetes, and Kafka for infrastructure credential management and automated compliance checks, improving troubleshooting efficiency and security posture by 90%.",
        "Developed robust APIs for password synchronization validation and compliance enforcement with 80%+ unit test coverage, improving system reliability and maintainability.",
        "Enhanced replicated storage systems by enabling configurable data path proximity, improving flexibility and operational performance for large-scale distributed deployments.",
        "Designed and delivered rules for a cloud-based configuration analysis engine, reducing manual system checks by 40% and accelerating compliance validation.",
        "Led cross-functional collaboration across Development, QA, and Support teams, reducing escalation resolution time by 30% and improving customer satisfaction.",
        "Engineered the Remote Plugin feature for dHCI and non-dHCI systems, supporting server lifecycle operations and datastore provisioning.",
        "Resolved 20+ high-priority defects, increasing setup stability by 25% and minimizing deployment failures."
      ]
    },
    {
      company: "Hewlett Packard Enterprise",
      role: "Research and Development Intern",
      period: "Mar 2022 – Sep 2022",
      details: [
        "Developed a functional proof of concept for a remote plugin using the Java Jersey framework.",
        "Analyzed and documented requirements for developing a remote plugin for VMware vCenter."
      ]
    },
    {
      company: "Hewlett Packard Enterprise",
      role: "Project Intern",
      period: "Mar 2021 – Jun 2021",
      details: [
        "Developed a health analysis engine for an NVMe SSD storage device to monitor five critical parameters and detect anomalies."
      ]
    }
  ],
  skills: {
    languages: ["Golang", "Java", "Groovy", "Python", "C", "C++", "JavaScript"],
    cloudDevOps: ["AWS (EC2, S3, IAM, VPC)", "Kubernetes", "Docker", "Jenkins", "Linux"],
    storageVirtualization: ["HPE Alletra MP", "HPE Alletra 6k", "VMware ESXi", "vCenter"],
    concepts: ["System Design", "Data Structures & Algorithms", "OOP", "Scalability", "Agile"],
    tools: ["Git", "GitHub", "Makefile", "Gradle"],
    apisProtocols: ["REST APIs", "gRPC", "SOAP"],
    frameworks: ["Gin", "Jersey", "Spring Boot", "Grails", "MERN"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    practices: ["CI/CD", "Code Reviews", "TDD", "Observability", "Monitoring", "Fault Tolerance"]
  },
  education: [
    {
      institution: "BMS College of Engineering",
      degree: "Bachelor of Engineering in Information Science and Engineering",
      period: "Aug 2018 – Jun 2022",
      cgpa: "8.65"
    }
  ]
};
