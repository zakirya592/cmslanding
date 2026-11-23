export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "All" | "Engineering" | "AI & Future" | "Design" | "Productivity" | "Security";
  coverImage: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-for-edge-performance",
    title: "How We Achieved Sub-15ms Edge Content Delivery Globally",
    excerpt:
      "A deep dive into distributed active-active clusters, zero-downtime cache invalidation, and edge streaming architecture.",
    category: "Engineering",
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=700&fit=crop",
    date: "Nov 20, 2026",
    readTime: "5 min read",
    author: {
      name: "Marcus Vance",
      role: "Founder & Chief Executive",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
    },
    content: [
      "Traditional centralized server architectures inevitably suffer from speed-of-light propagation delays. When a user in Tokyo requests data from an origin in Northern Virginia, the minimum physical round-trip time alone guarantees high latency.",
      "At Unni B, we re-architected our data pipeline from the ground up to bring compute and cached assets to 320+ edge nodes globally. Using lightweight isolated workers and smart cache federation, requests are routed to the nearest regional node in single-digit milliseconds.",
      "In this article, we break down our active-active replication strategy, our sub-250ms distributed cache purging algorithm, and how we ensure 100% data consistency without locking database rows across regional boundaries.",
    ],
  },
  {
    slug: "future-of-ai-workflows",
    title: "The Evolution of Workspace Automation with Assistive AI",
    excerpt:
      "Why context-aware AI copilots are replacing rigid manual software menus and transforming team productivity.",
    category: "AI & Future",
    coverImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=700&fit=crop",
    date: "Nov 18, 2026",
    readTime: "4 min read",
    author: {
      name: "Sophia Martinez",
      role: "Lead AI Scientist",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=face",
    },
    content: [
      "Artificial intelligence is moving beyond generic chat prompts into deep contextual integration. Instead of asking users to switch windows and copy-paste text, the future lies in software that anticipates intent.",
      "Unni B incorporates autonomous reasoning directly into document structures, visual schema fields, and notification triggers. The system understands relationships between project milestones and automatically generates status updates.",
      "We believe that AI shouldn't replace human creativity; it should eliminate operational toil so teams can focus entirely on high-leverage strategic decisions.",
    ],
  },
  {
    slug: "crafting-intuitive-design-systems",
    title: "Designing Intuitive Interfaces: Beyond Glassmorphism",
    excerpt:
      "How to balance rich visual aesthetics with functional clarity, accessible color contrast, and seamless responsiveness.",
    category: "Design",
    coverImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=700&fit=crop",
    date: "Nov 15, 2026",
    readTime: "6 min read",
    author: {
      name: "Elena Rostova",
      role: "Head of Product Design",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
    },
    content: [
      "Modern interface design has evolved rapidly from flat minimalism to tactile, layered depth. Glassmorphism, aurora gradients, and volumetric cards capture emotional attention, but they must always serve clarity first.",
      "In our design system at Unni B, every blur filter and glowing gradient has an explicit semantic purpose. Lighting draws focus toward the primary task, while subtle translucency preserves situational awareness of the layers beneath.",
      "Here we share our design tokens, contrast guidelines for dual dark/light themes, and how we maintain 60fps rendering even on resource-constrained mobile hardware.",
    ],
  },
  {
    slug: "scaling-remote-engineering-teams",
    title: "Building and Scaling High-Velocity Remote Teams",
    excerpt:
      "Tactical lessons on async communication, autonomous documentation, and engineering cadence across 12 time zones.",
    category: "Productivity",
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=700&fit=crop",
    date: "Nov 10, 2026",
    readTime: "5 min read",
    author: {
      name: "Kaelen Chen",
      role: "VP of Engineering",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    },
    content: [
      "Remote work fails when companies attempt to replicate in-office synchronous presence via incessant video meetings. High-velocity distributed teams operate on written documentation, clear ownership, and asynchronous workflows.",
      "At Unni B, our team spans from San Francisco and London to Tokyo. We rely on centralized live collaboration workspaces where every decision, design rationale, and code review is transparently accessible to all.",
      "Learn how we structure weekly syncs, manage sprint handoffs asynchronously, and protect uninterrupted deep work time for our engineers and designers.",
    ],
  },
  {
    slug: "type-safe-architectures-at-scale",
    title: "Why Type-Safe APIs are Crucial for Modern Frontend Resilience",
    excerpt:
      "How auto-generating TypeScript client types prevents silent runtime bugs and empowers developers to ship with confidence.",
    category: "Engineering",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=700&fit=crop",
    date: "Nov 05, 2026",
    readTime: "7 min read",
    author: {
      name: "Marcus Vance",
      role: "Founder & Chief Executive",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
    },
    content: [
      "One of the most insidious sources of runtime production errors in frontend applications is schema drift: when the backend response changes without the frontend knowing.",
      "By utilizing end-to-end type generation, any schema modification automatically propagates TypeScript interfaces to your Next.js application at compile time. If a field is renamed or removed, the build immediately flags it before deployment.",
      "We discuss how our developers eliminated undefined property crashes completely and reduced integration test boilerplate by over 70%.",
    ],
  },
  {
    slug: "enterprise-governance-playbook",
    title: "Zero-Trust Security & SOC2 Compliance Playbook for Startups",
    excerpt:
      "A pragmatic guide to enterprise security: IAM, granular RBAC, automated audit trails, and data isolation.",
    category: "Security",
    coverImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=700&fit=crop",
    date: "Oct 28, 2026",
    readTime: "6 min read",
    author: {
      name: "Sophia Martinez",
      role: "Lead AI Scientist",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=face",
    },
    content: [
      "Securing enterprise contracts requires proving that your platform protects sensitive customer data under the strictest compliance standards.",
      "Achieving SOC2 Type II compliance doesn't have to slow your team to a crawl. By embedding immutable audit logs, strict role-based access, and SAML SSO into the foundation of your product, security becomes a natural competitive differentiator.",
      "Explore the architectural checklist we used to achieve enterprise compliance in record time while maintaining a frictionless user experience.",
    ],
  },
];
