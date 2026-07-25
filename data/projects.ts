export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: string;
  stack: string[];
  status: string;
  deployment: string;
  liveUrl?: string;
  whatIDid: string[];
  howIDidIt: string[];
  skills: string[];
};

export const projects: Project[] = [
  {
    slug: "safenet",
    title: "SafeNet",
    tagline: "A multi-agent industrial safety AI system",
    summary:
      "A multi-agent system that watches a workplace feed, reasons over safety documentation, and raises hazard alerts in real time — built for the CRP ET AI Hackathon.",
    category: "Multi-Agent AI / Computer Vision",
    stack: ["FastAPI", "React", "LangChain", "ChromaDB", "Gemini 2.0 Flash", "RT-DETRv2", "SQLite"],
    status: "In development — hackathon build",
    deployment: "Self-hosted for the hackathon demo (FastAPI backend + React frontend, containerized).",
    whatIDid: [
      "Designed a multi-agent architecture where separate agents handle detection, retrieval, and reasoning, coordinated through a shared task pipeline.",
      "Wired an RT-DETRv2 model into the video pipeline to detect safety violations (missing PPE, unsafe proximity to machinery) in real time.",
      "Built a retrieval layer over industrial safety documentation so the reasoning agent can cite the specific rule a violation breaks, not just flag it generically.",
      "Built the React frontend for live monitoring and alert review, backed by a FastAPI service layer.",
    ],
    howIDidIt: [
      "Used LangChain to orchestrate the agent flow: a detection agent emits structured events, a retrieval agent pulls relevant safety-policy text from a ChromaDB vector store, and a reasoning agent (Gemini 2.0 Flash) composes the final alert with justification.",
      "Persisted detections, alerts, and session history in SQLite so the dashboard can show a timeline, not just a live feed.",
      "Reused the RT-DETRv2 detection backbone from the DRDO research work as the vision component, adapting the class set to industrial safety objects.",
      "Built the frontend in React with a live alert feed, filterable by severity and zone.",
    ],
    skills: ["Multi-agent orchestration", "RAG pipelines", "FastAPI", "React", "Object detection", "Vector databases"],
  },
  {
    slug: "friday",
    title: "FRIDAY",
    tagline: "A voice-activated desktop AI assistant",
    summary:
      "A floating, always-available desktop assistant for macOS — voice-activated, built on Gemini 2.0 Flash, for everyday personal use.",
    category: "Desktop AI Assistant",
    stack: ["Electron.js", "Gemini 2.0 Flash", "Voice Interface"],
    status: "Personal project — in active use",
    deployment: "Runs locally as a packaged Electron app on macOS.",
    whatIDid: [
      "Built a floating, always-on-top overlay window that stays out of the way until summoned.",
      "Implemented voice activation so the assistant can be triggered hands-free.",
      "Connected the assistant to Gemini 2.0 Flash for fast conversational responses.",
      "Packaged the whole thing as a native-feeling desktop app rather than a browser tab.",
    ],
    howIDidIt: [
      "Used Electron.js to build a lightweight, frameless overlay window with global keyboard/voice hooks so it can be summoned from any application.",
      "Streamed microphone input into a speech pipeline, then routed the transcribed query to Gemini 2.0 Flash for a response.",
      "Kept the UI intentionally minimal — a floating orb/panel — so it doesn't compete for attention with the rest of the desktop.",
    ],
    skills: ["Electron.js", "Desktop app architecture", "Voice interfaces", "LLM integration"],
  },
  {
    slug: "edgeguard",
    title: "EdgeGuard",
    tagline: "Edge-deployable vehicle detection",
    summary:
      "A vehicle detection system built to run on resource-constrained edge hardware, developed for Tata Technologies InnoVent-27.",
    category: "Edge AI / Computer Vision",
    stack: ["Edge AI", "Vehicle Detection", "Model Optimization"],
    status: "Hackathon submission — full application and 11-slide proposal completed",
    deployment: "Proposed for edge deployment on constrained hardware (competition submission; not yet field-deployed).",
    whatIDid: [
      "Designed a vehicle detection pipeline scoped specifically for edge hardware constraints rather than a full server-grade GPU setup.",
      "Put together the complete competition application, including an 11-slide technical proposal, for Tata Technologies InnoVent-27.",
    ],
    howIDidIt: [
      "Drew on the detection work from the DRDO internship, adapting the model choice and pipeline design toward lighter-weight inference suited to edge constraints.",
      "Structured the proposal around a clear problem statement, architecture diagram, and expected performance trade-offs between accuracy and on-device latency.",
    ],
    skills: ["Edge AI", "Model optimization", "Technical proposal writing", "Object detection"],
  },
  {
    slug: "pulseguard",
    title: "PulseGuard",
    tagline: "PPG-based cardiac monitoring with real-time alerts",
    summary:
      "A wearable-adjacent cardiac monitoring system that classifies irregular heart rhythms from PPG signals and sends real-time SMS alerts to caregivers.",
    category: "Biomedical Signal Processing / IoT",
    stack: ["ESP32", "Raspberry Pi", "Random Forest", "SMOTE", "Twilio"],
    status: "IEEE paper written, co-developed with a teammate",
    deployment: "Prototype hardware pipeline (ESP32 sensor node → Raspberry Pi inference → Twilio alerting).",
    whatIDid: [
      "Co-developed the full pipeline from raw PPG signal acquisition through classification to caregiver alerting.",
      "Built the machine learning classifier that distinguishes normal from irregular cardiac rhythms.",
      "Co-authored the IEEE-format paper documenting the system.",
    ],
    howIDidIt: [
      "Captured PPG signals via an ESP32 sensor node and streamed them to a Raspberry Pi for on-device inference.",
      "Trained a Random Forest classifier on the signal features, using SMOTE to correct for class imbalance between normal and irregular rhythm samples.",
      "Integrated Twilio's SMS API so that a detected irregularity triggers an immediate alert to a designated caregiver number.",
    ],
    skills: ["Signal processing", "Random Forest", "Class imbalance handling (SMOTE)", "IoT hardware integration", "Technical writing"],
  },
  {
    slug: "smart-crop-protection",
    title: "Smart Crop Protection System",
    tagline: "YOLOv11-based real-time animal intrusion detection for farmland",
    summary:
      "A field-deployable detection system that spots crop-threatening animals in real time and reached 91% detection accuracy, with a paper currently under review.",
    category: "Computer Vision / Agritech",
    stack: ["YOLOv11", "Raspberry Pi 4B"],
    status: "Paper under review",
    deployment: "Field-tested prototype on Raspberry Pi 4B hardware.",
    whatIDid: [
      "Built and trained a YOLOv11-based detector to identify animals that threaten crops in real time.",
      "Deployed the model on Raspberry Pi 4B for on-field, low-cost operation.",
      "Reached 91% detection accuracy on the target classes and wrote up the system for publication.",
    ],
    howIDidIt: [
      "Curated and annotated a dataset of common crop-threatening animals under varied field lighting conditions.",
      "Fine-tuned YOLOv11 for the target classes and optimized inference for Raspberry Pi 4B's limited compute budget.",
      "Validated detection accuracy against a held-out field test set and documented the methodology in a paper currently under review.",
    ],
    skills: ["YOLOv11", "Edge deployment", "Dataset curation", "Agritech applications"],
  },
  {
    slug: "wipro-fire-safety",
    title: "Wipro Fire & Safety",
    tagline: "A full commercial website, built end-to-end",
    summary:
      "A complete website built for my father's fire and industrial safety equipment company in Kurnool — from design through deployment.",
    category: "Full-Stack Web Development",
    stack: ["React", "Tailwind CSS", "Node.js"],
    status: "Live",
    deployment: "Deployed as the company's public website.",
    liveUrl: "https://wipro-fire-safety-7gm6.vercel.app/",
    whatIDid: [
      "Designed and built the entire site solo — layout, product presentation, and company information — for a real, operating business.",
      "Handled everything from the frontend UI to the backend/server setup and deployment.",
    ],
    howIDidIt: [
      "Built the frontend in React with Tailwind CSS for a clean, fast-loading product/company presentation.",
      "Used Node.js on the backend for any server-side needs (routing, form handling).",
      "Worked directly with a real client — my father's business — translating their catalog and requirements into a working, maintainable site.",
    ],
    skills: ["React", "Tailwind CSS", "Node.js", "Client-facing web development"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
