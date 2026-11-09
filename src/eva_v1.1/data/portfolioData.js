export const navigationItems = [
  { id: "intro", label: "Home / About", code: "00" },
  { id: "skills", label: "Skills", code: "01" },
  { id: "timeline", label: "Background", code: "02" },
  { id: "projects", label: "Publications / Projects", code: "03" },
  { id: "other", label: "Other", code: "04" },
];

export const skillGroups = [
  {
    title: "AI / ML",
    jp: "人工知能",
    tone: "eva02",
    items: [
      "PyTorch",
      "Hugging Face Transformers",
      "CUDA",
      "Deep Learning",
      "Neural Networks",
      "Graph ML",
      "Reinforcement Learning",
      "Trustworthy ML",
    ],
  },
  {
    title: "Generative AI",
    jp: "生成AI",
    tone: "eva02",
    items: [
      "LLMs",
      "RAG",
      "LoRA / PEFT",
      "Diffusion Models",
      "GANs",
      "VAEs",
      "Domain-Specific LLMs",
      "Prompt Evaluation",
    ],
  },
  {
    title: "AI Security",
    jp: "AI セキュリティ",
    tone: "eva01",
    items: [
      "Adversarial ML",
      "LLM Security",
      "VLA / Embodied AI Security",
      "Jailbreak Evaluation",
      "Threat Modeling",
      "Security Evaluation",
      "Robustness Benchmarking",
      "Inference-Time Defense",
    ],
  },
  {
    title: "Privacy / Cryptography",
    jp: "プライバシー",
    tone: "eva01",
    items: [
      "Fully Homomorphic Encryption",
      "Privacy-Preserving LLM Inference",
      "Secure AI Agents",
      "Encrypted Inference",
      "Private Intermediate Representations",
      "Cryptographic Evaluation",
    ],
  },
  {
    title: "Cybersecurity",
    jp: "サイバーセキュリティ",
    tone: "eva01",
    items: [
      "VAPT",
      "Network Security",
      "Information Security",
      "Digital Forensics",
      "Automated Pentesting",
      "Smart-Contract Security",
      "Kali Linux",
      "OpenSSH",
    ],
  },
  {
    title: "NLP / Document AI",
    jp: "文書AI",
    tone: "eva02",
    items: [
      "NLP",
      "OCR",
      "Document Understanding",
      "Information Extraction",
      "PDF-to-Markdown",
      "Retrieval Pipelines",
      "Document Benchmarking",
    ],
  },
  {
    title: "Programming / Tools",
    jp: "開発",
    tone: "neutral",
    items: [
      "Python",
      "C",
      "C++",
      "Java",
      "SQL",
      "React",
      "Git",
      "Jupyter",
      "LaTeX",
      "AWS",
    ],
  },
  {
    title: "Research",
    jp: "研究",
    tone: "neutral",
    items: [
      "Literature Review",
      "Experimental Design",
      "Ablation Studies",
      "Benchmarking",
      "Quantitative Analysis",
      "Technical Writing",
      "Research Prototyping",
      "Reproducible Evaluation",
    ],
  },
];

export const timelineItems = [
  {
    kind: "work",
    date: "Dec 2025 — Present",
    title: "Cybersecurity Research Engineer",
    org: "ST Engineering",
    place: "Singapore",
    logo: {
      src: "https://www.cmgassets.com/s3fs-public/styles/opengraph/public/2024-05/st-engineering-logo.png?h=c3bb58ce&itok=PVWjhR9i",
      fallback: "ST",
    },
    points: [
      "Research adversarial VLA security and privacy-preserving LLM / AI-agent inference.",
      "Build Python / PyTorch evaluation pipelines and investigate FHE-based protection for private inference.",
    ],
  },
  {
    kind: "work",
    date: "May 2025 — Aug 2025",
    title: "AI Engineer Intern",
    org: "Integro Technologies Pte Ltd",
    place: "Singapore",
    logo: {
      src: "https://www.integrosys.com/wp-content/uploads/2022/11/integrosys-Logo-Color-3.png",
      fallback: "INTEGRO",
    },
    points: [
      "Built a domain-specific LLM / RAG workflow for corporate lending across ~1,500 financial documents.",
      "Developed OCR and PDF-to-Markdown pipelines for scanned, handwritten, and structured documents.",
      "Added protected retrieval, role-based access control, encryption, and secure model I/O handling.",
    ],
  },
  {
    kind: "work",
    date: "Jul 2023 — Jul 2024",
    title: "Artificial Intelligence Research Intern",
    org: "Armur.AI",
    place: "",
    logo: {
      src: "",
      fallback: "ARMUR AI",
    },
    points: [
      "Worked on AI models for smart-contract vulnerability detection, automated penetration testing, and network security.",
      "Focused on practical security automation and production-oriented model development.",
    ],
  },
  {
    kind: "education",
    date: "Aug 2024 — Jan 2026",
    title: "Master of Computing in Artificial Intelligence",
    org: "National University of Singapore",
    place: "Singapore",
    logo: {
      src: "https://download.logo.wine/logo/National_University_of_Singapore/National_University_of_Singapore-Logo.wine.png",
      fallback: "NUS",
    },
    points: [
      "Coursework in deep learning, graph ML, trustworthy ML, uncertainty modelling, planning, and decision making.",
      "Dissertation: Revealing Learned Concepts in LoRA Text-to-Image Models.",
    ],
  },
  {
    kind: "education",
    date: "Jun 2020 — Jul 2024",
    title: "B.Tech. Computer Science — Cyber Security",
    org: "SRM Institute of Science & Technology",
    place: "India",
    logo: {
      src: "https://promilo-prod.s3.ap-south-1.amazonaws.com/campaign/8a2080849a774eac019a7cc124fc14e9/campaign_image/profile.png?v=1763183044350",
      fallback: "SRM",
    },
    points: [
      "GPA 9.43 / 10; ranked in the top 10% of the cohort.",
      "Thesis: Ethical Implications of AI in Cybersecurity: Machine Learning-Based Firewalls.",
    ],
  },
];

const publications = [
  {
    id: "paper-vla",
    kind: "publication",
    tabLabel: "VLA Security",
    mobileLabel: "VLA",
    title: "Spectral Detection and Defense against Adversarial Attacks in Vision-Language-Action Policies",
    eyebrow: "IEEE TDSC · UNDER REVIEW",
    abstract:
      "Studies adversarial attacks against Vision-Language-Action policies and develops inference-time detection and mitigation methods. The work evaluates attack and defense configurations across embodied-AI settings, with spectral signals used to identify adversarial behavior while preserving task utility.",
    figures: [
      { src: "/publications/vla-security-overview.webp", alt: "Robot rollouts under patch and text attacks, and with the proposed defense", label: "Attack and defense overview" },
      { src: "/publications/vla-security-method.webp", alt: "Calibration, spectral detection, and mitigation for visual and text inputs", label: "Detection and mitigation pipeline" },
    ],
    tags: ["VLA", "Adversarial Security", "Detection", "Robustness"],
    rows: [
      ["Venue", "IEEE Transactions on Dependable and Secure Computing"],
      ["Status", "Under review"],
      ["Focus", "Visual/text attacks, spectral detection, inference-time defense"],
    ],
  },
  {
    id: "paper-lora",
    kind: "publication",
    tabLabel: "LoRA Concepts",
    mobileLabel: "LoRA",
    title: "Undisclosed Concept Discovery in LoRA Adapters for Diffusion-Based AIGC Models",
    eyebrow: "USENIX SECURITY 2027 · UNDER REVIEW",
    abstract:
      "Investigates whether concepts encoded inside LoRA adapters for diffusion-based image generation can be discovered from the learned adapter behavior. The study focuses on identifying hidden or undisclosed concepts while analyzing how LoRA adaptation changes model representations.",
    figure: "/publications/lora-concept-discovery.webp",
    figureAlt: "Evolutionary prompt search followed by gradient-based optimization",
    tags: ["LoRA", "Diffusion", "AIGC Security", "Representation Analysis"],
    rows: [
      ["Venue", "USENIX Security 2027"],
      ["Status", "Under review"],
      ["Focus", "Concept discovery in LoRA adapters for diffusion models"],
    ],
  },
  {
    id: "paper-solana",
    kind: "publication",
    tabLabel: "Solana",
    mobileLabel: "SOL",
    title: "Automated Vulnerability Detection in Solana Smart Contracts Using a Fine-Tuned Language Model",
    eyebrow: "JETIR · 2024",
    abstract:
      "Explores fine-tuned language models for automating vulnerability detection in Solana smart contracts. The work treats source-code security review as a language-model task and applies model-based analysis to common smart-contract security weaknesses.",
    year: 2024,
    figure: "/publications/solana.svg",
    figureAlt: "Solana code examples, model fine-tuning, and vulnerability assessment",
    link: "https://www.jetir.org/papers/JETIR2404C60.pdf",
    tags: ["Smart Contracts", "Language Models", "Vulnerability Detection"],
    rows: [
      ["Venue", "JETIR"],
      ["Issue", "Vol. 11, Issue 4 · April 2024"],
      ["Focus", "Fine-tuned language models for Solana vulnerability detection"],
    ],
  },
  {
    id: "paper-pentest",
    kind: "publication",
    tabLabel: "Auto Pentest",
    mobileLabel: "PT",
    title: "Automated Penetration Testing using Large Language Models",
    eyebrow: "IJSR · 2024",
    abstract:
      "Examines the use of large language models to support and automate parts of penetration-testing workflows. The project focuses on turning natural-language reasoning into repeatable security-assessment steps and reducing manual effort across common testing tasks.",
    year: 2024,
    figure: "/publications/auto-pentest.svg",
    figureAlt: "User test objective, language-model command generation, and tool execution",
    link: "https://www.ijsr.net/archive/v13i4/SR24427043741.pdf",
    tags: ["LLM", "Penetration Testing", "Cybersecurity"],
    rows: [
      ["Venue", "IJSR"],
      ["Issue", "Vol. 13, Issue 4 · April 2024"],
      ["Focus", "LLM-assisted automated penetration testing"],
    ],
  },
  {
    id: "paper-phishing",
    kind: "publication",
    tabLabel: "Phishing",
    mobileLabel: "PH",
    title: "Advancing Cybersecurity Through AI: A Multilayered Phishing Detection Approach",
    eyebrow: "IJCRT · 2023",
    abstract:
      "Presents a multilayered AI-based approach for phishing detection. The work combines multiple detection signals rather than relying on a single classifier, with the aim of improving resilience across varied phishing patterns and attack characteristics.",
    year: 2023,
    figure: "/publications/phishing.svg",
    figureAlt: "Text preprocessing, feature extraction, and comparison of phishing classifiers",
    link: "https://ijcrt.org/papers/IJCRT2312102.pdf",
    tags: ["Phishing", "AI Security", "Detection"],
    rows: [
      ["Venue", "IJCRT"],
      ["Issue", "Vol. 11, Issue 12 · December 2023"],
      ["Focus", "Multilayered AI-based phishing detection"],
    ],
  },
];

const projects = [
  {
    id: "financial-rag",
    kind: "project",
    tabLabel: "Financial RAG",
    mobileLabel: "RAG",
    title: "Financial Document Analysis with RAG",
    eyebrow: "INTEGRO TECHNOLOGIES",
    abstract:
      "A domain-specific RAG workflow for corporate lending that combines OCR, document conversion, retrieval, and model-based analysis. The system was built around a large financial-document collection and included protected retrieval, access controls, encryption, and secure handling of model inputs and outputs.",
    figure: "/projects/financial-rag.svg",
    figureAlt: "Financial documents are converted with OCR, retrieved with access controls, and analyzed by a language model for corporate lending.",
    tags: ["RAG", "OCR", "Documents", "Access Control"],
    stats: [
      { label: "Answer accuracy", value: 95, display: ">95%" },
      { label: "Analysis time reduction", value: 70, display: "~70%" },
      { label: "Extraction accuracy", value: 90, display: ">90%" },
      { label: "Structure preserved", value: 98, display: "~98%" },
    ],
    rows: [
      ["Documents", "~1,500 financial documents"],
      ["Document types", "10+ including scanned and handwritten content"],
      ["Security", "Protected retrieval, RBAC, encryption, secure model I/O"],
    ],
  },
  {
    id: "jailbreak-defense",
    kind: "project",
    tabLabel: "LLM Defense",
    mobileLabel: "LLM",
    title: "Defending Large Language Models Against Jailbreak Exploits",
    eyebrow: "ACADEMIC PROJECT",
    abstract:
      "A multi-layer LLM security framework combining prompt sanitization, inference-time activation steering, and a domain-specific multi-agent defense. The evaluation used aligned and unaligned Llama-based models on XSTest and in-the-wild jailbreak benchmarks.",
    figure: "/projects/jailbreak-defense.webp",
    figureAlt: "Taxonomy of prompt, model, training, and agent-level jailbreak defenses",
    link: "https://arxiv.org/abs/2511.18933",
    tags: ["LLM Security", "Jailbreaks", "Activation Steering", "Agents"],
    stats: [
      { label: "ASR reduction", value: 43, display: "43%" },
      { label: "Multi-agent ASR", value: 0, display: "0%" },
    ],
    rows: [
      ["Models", "Aligned and unaligned Llama-based models"],
      ["Benchmarks", "XSTest and in-the-wild jailbreak benchmarks"],
      ["Defense", "Sanitization, activation steering, multi-agent defense"],
    ],
  },
  {
    id: "game-generation",
    kind: "project",
    tabLabel: "Game Gen",
    mobileLabel: "GAME",
    title: "Diffusion-Based Adaptive Game Level Generation",
    eyebrow: "ACADEMIC PROJECT",
    abstract:
      "Difficulty-conditioned procedural game-level generation comparing Stable Diffusion fine-tuning, LoRA, scratch-trained diffusion, and conditional VAEs. A solver-based metric using shortest-path length and search complexity provides the difficulty signal.",
    figure: "/projects/game-generation-diffusion-architecture.webp",
    figureAlt: "Comparison of Stable Diffusion architectures with and without LoRA adapters for game-level generation.",
    tags: ["Diffusion", "LoRA", "VAE", "Procedural Generation"],
    statCards: [
      { value: "25K", label: "generated mazes" },
      { value: "4", label: "model approaches" },
    ],
    rows: [
      ["Models", "Stable Diffusion FT, LoRA, scratch diffusion, conditional VAE"],
      ["Condition", "Maze difficulty"],
      ["Metric", "Shortest-path length and search complexity"],
    ],
  },
];

const currentResearch = {
  id: "current-research",
  kind: "current",
  tabLabel: "Current Research",
  mobileLabel: "Research",
  title: "Privacy-Preserving LLM & AI-Agent Inference",
  abstract:
    "Investigating how fully homomorphic encryption can protect prompts, intermediate representations, and tool interactions during LLM and agent inference. The goal is to reduce cryptographic overhead while preserving model utility.",
  tags: ["FHE", "LLM", "Agents", "Privacy"],
};

export const archivedPublications = publications.filter((item) => item.year);

export const browserTabs = [
  ...publications.filter((item) => !item.year),
  {
    id: "publication-archive",
    kind: "archive",
    tabLabel: "2023–24",
    mobileLabel: "23–24",
    title: "Publication Archive",
  },
  ...projects,
  currentResearch,
  {
    id: "collab",
    kind: "collab",
    tabLabel: "+",
    mobileLabel: "+",
    title: "Collaborate",
    abstract:
      "If you want to work together on research, an AI/security project, or something experimental, send me an email and tell me what you have in mind.",
    tags: [],
    rows: [],
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/Kuro0911" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dhananjai-sharma09/" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=ycrg2zcAAAAJ&hl=en" },
  { label: "Email", href: "mailto:dhananjaisharma09@gmail.com" },
];
