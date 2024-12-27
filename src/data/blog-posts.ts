export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags: string[];
}

export const posts: BlogPost[] = [
  {
    title: "Improving Patient Outcomes Through Better Communication",
    excerpt: "Discover how speech analytics can help healthcare providers enhance patient care through better understanding and communication.",
    date: "2024-01-15",
    slug: "improving-patient-outcomes",
    tags: ["healthcare", "communication", "patient-care", "hospitals", "best-practices"]
  },
  {
    title: "The Role of AI in Modern Healthcare Communication",
    excerpt: "Explore how artificial intelligence is transforming the way healthcare providers interact with patients and improve care delivery.",
    date: "2024-01-10",
    slug: "ai-in-healthcare-communication",
    tags: ["ai", "healthcare", "technology", "dental", "emergency-care"]
  },
  {
    title: "Best Practices for Healthcare Communication Analytics",
    excerpt: "Learn the key strategies for implementing and maximizing the benefits of speech analytics in your healthcare facility.",
    date: "2024-01-05",
    slug: "healthcare-communication-analytics",
    tags: ["analytics", "best-practices", "healthcare", "veterinary", "hospice"]
  },
  {
    title: "Enhancing Dental Practice Communication",
    excerpt: "Learn how dental practices can improve patient satisfaction and treatment acceptance through better communication.",
    date: "2024-01-20",
    slug: "enhancing-dental-practice-communication",
    tags: ["dental", "healthcare", "patient-care", "communication"]
  },
  {
    title: "Emergency Response Communication Excellence",
    excerpt: "Discover best practices for optimizing communication in emergency care situations.",
    date: "2024-01-25",
    slug: "emergency-response-communication",
    tags: ["emergency-care", "healthcare", "best-practices", "communication"]
  },
  {
    title: "Veterinary Care Communication Strategies",
    excerpt: "Effective strategies for improving communication with pet owners and enhancing veterinary care delivery.",
    date: "2024-01-30",
    slug: "veterinary-care-communication",
    tags: ["veterinary", "healthcare", "communication", "patient-care"]
  }
];