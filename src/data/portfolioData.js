export const profile = {
  name: 'Krishna Babu Nadella',
  role: 'Data Scientist & AI Specialist',
  eyebrow: 'DATA SCIENCE · AI/ML · FULL-STACK',
  location: 'India',
  phone: '+91 8688986581',
  email: 'kishnababunadella@gmail.com',
  linkedin: 'https://www.linkedin.com/in/krishna-nadella1805/',
  github: 'https://github.com/krishnanadella9999',
  formspreeUrl: 'https://formspree.io/f/kishnababunadella@gmail.com',
  facebook: 'https://www.facebook.com/share/1XADQ8TiSw/',
  x: 'https://x.com/KrishnaNadella9',
  summary:
    "B.Tech graduate in Computer Science & Artificial Intelligence (CGPA 7.71/10, 2026) specializing in Data Science, Machine Learning, and Full-Stack AI Applications. Proficient in extracting actionable insights from complex datasets, building predictive ML pipelines, data visualization, and shipping modern web apps powered by LLMs, RAG, and cloud infrastructure.",
  profileImage: '/profile.png',
  aboutImage: '/about.png',
  stats: [
    { label: 'CGPA', value: '7.71/10' },
    { label: 'Projects Shipped', value: '03' },
    { label: 'Certifications', value: '05' },
    { label: 'Grad Year', value: '2026' },
  ],
}

export const skillGroups = [
  {
    title: 'Programming Languages',
    tag: 'lang',
    items: ['Python', 'SQL', 'R (Basic)'],
  },
  {
    title: 'Data Analysis',
    tag: 'data',
    items: ['Pandas', 'NumPy', 'Data Cleaning', 'Exploratory Data Analysis (EDA)'],
  },
  {
    title: 'Machine Learning',
    tag: 'ml',
    items: ['Scikit-learn', 'TensorFlow', 'Keras', 'Predictive Modeling', 'Model Evaluation'],
  },
  {
    title: 'Data Visualization',
    tag: 'viz',
    items: ['Power BI', 'Streamlit', 'Matplotlib', 'Seaborn', 'Plotly'],
  },
  {
    title: 'Databases',
    tag: 'db',
    items: ['MySQL', 'SQLite'],
  },
  {
    title: 'Cloud & Tools',
    tag: 'cloud',
    items: ['AWS · S3', 'AWS · EC2', 'AWS · SageMaker', 'Git', 'Jupyter Notebook'],
  },
  {
    title: 'AI / LLM',
    tag: 'llm',
    items: ['LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'OpenAI APIs'],
  },
  {
    title: 'Web & Full-Stack',
    tag: 'web',
    items: ['HTML', 'CSS', 'React', 'Node.js', 'Flask', 'Django'],
  },
]

export const projects = [
  {
    id: 'virtual-tryon',
    title: 'Text-Guided Color Rendering for Virtual Try-On',
    period: 'Jan 2026 – Apr 2026',
    stack: ['Python', 'SAM', 'NLP', 'OpenCV', 'Flask'],
    summary:
      'AI-based garment recoloring system that segments clothing from complex backgrounds and repaints it from natural-language color descriptions.',
    points: [
      'Built high-precision garment segmentation with the Segment Anything Model (SAM) and Grounding DINO — no manual annotations required.',
      'Trained an LSTM-based Text-to-Color NLP model to interpret natural-language color names into accurate RGB values.',
      'Applied HSV blending to preserve fabric texture, lighting, and shadow detail during recoloring.',
      'Shipped an interactive web interface for real-time try-on with manual color input, palette extraction, and auto harmony-based palettes.',
    ],
  },
  {
    id: 'event-portal',
    title: 'Student Event Portal',
    period: 'Aug 2025 – Dec 2025',
    stack: ['Python', 'Flask', 'MySQL', 'REST APIs', 'SQL'],
    summary:
      'Full-stack web application for managing college events end-to-end — registration, scheduling, and live seat availability.',
    points: [
      'Built a full-stack Flask app covering student registration, event scheduling, and real-time seat tracking.',
      'Designed a MySQL relational schema with optimized queries for lookups, registrations, and dashboard aggregations.',
      'Applied joins, aggregations, and indexing to keep event-day traffic fast.',
      'Implemented REST APIs with JSON handling, input validation, and structured error responses.',
    ],
  },
  {
    id: 'predictive-analytics-rag',
    title: 'Predictive Analytics & RAG Document Intelligence Platform',
    period: 'Mar 2025 – Jul 2025',
    stack: ['Python', 'Scikit-learn', 'LangChain', 'RAG', 'Power BI', 'Streamlit', 'Flask'],
    summary:
      'End-to-end Data Science and Conversational AI platform combining predictive ML classification models, customer sentiment forecasting, and RAG semantic document intelligence.',
    points: [
      'Trained and evaluated supervised ML classification models (XGBoost, Random Forest, Logistic Regression) for predictive scoring and behavioral churn segmentation.',
      'Architected a Retrieval-Augmented Generation (RAG) pipeline using LangChain, vector embeddings, and OpenAI APIs for semantic search across complex technical documents.',
      'Designed interactive analytics dashboards in Power BI and Streamlit to visualize key business metrics, feature importance, and model evaluation curves.',
      'Deployed all predictive microservices as a RESTful Flask app on AWS EC2 with continuous integration and real-time inference endpoints.',
    ],
  },
]

export const education = [
  {
    school: 'Sri Vasavi Engineering College',
    degree: 'B.Tech — Computer Science & Artificial Intelligence',
    score: '7.71 / 10 CGPA',
    period: '2022 – 2026',
  },
  {
    school: 'Sasi Junior College',
    degree: 'Intermediate — MPC',
    score: '720 / 1000',
    period: '2020 – 2022',
  },
  {
    school: 'Sasi English Medium High School',
    degree: 'SSC',
    score: '568 / 600',
    period: '2019 – 2020',
  },
]

export const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Andrew Ng · Stanford University · Coursera',
  },
  {
    title: 'Data Science',
    issuer: 'Oracle',
  },
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
  },
  {
    title: 'Salesforce Certified Agentforce Specialist',
    issuer: 'Salesforce',
  },
  {
    title: 'Google Ads Search Certification',
    issuer: 'Google',
  },
]

export const achievements = [
  {
    title: 'Tech-Euphoria College Fest',
    detail:
      'Volunteered and coordinated the annual technical fest at Sri Vasavi Engineering College — managing event logistics, team coordination, and participant engagement across cross-functional student teams.',
  },
  {
    title: 'Silver Medalist — Powerlifting',
    detail:
      'Won two silver medals in powerlifting competitions, building discipline, goal-setting, and mental resilience that carries directly into high-performance work.',
  },
]
