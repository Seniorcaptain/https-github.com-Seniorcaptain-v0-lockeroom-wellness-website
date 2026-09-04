export interface Professional {
  id: number
  name: string
  specialty: string
  credentials: string
  rating: number
  reviews: number
  hourlyRate: number
  availability: string
  bio: string
  image: string | null
  languages: string[]
  experience: string
  about: string
  approach: string
  specializations: string[]
  education: string[]
}

// Single source of truth — used by both /professionals (listing) and /professionals/[id] (detail).
// Previously these lived as two separate, disconnected mock datasets with mismatched IDs and names.
export const professionals: Professional[] = [
  {
    id: 1,
    name: "Dr. Loise Brenda",
    specialty: "Anxiety & Depression",
    credentials: "PhD, Licensed Clinical Psychologist",
    rating: 4.9,
    reviews: 128,
    hourlyRate: 120,
    availability: "Mon-Fri, 9am-6pm",
    bio: "Specializing in cognitive behavioral therapy for anxiety and depression with 12+ years of experience.",
    image: "/professional-therapist-woman.png",
    languages: ["English", "Swahili"],
    experience: "12+ years",
    about:
      "Dr. Loise Brenda is a compassionate and experienced clinical psychologist dedicated to helping individuals overcome anxiety and depression. With over 12 years of practice, she has helped hundreds of clients achieve lasting change through evidence-based therapeutic approaches.",
    approach:
      "I use a combination of Cognitive Behavioral Therapy (CBT), mindfulness-based interventions, and acceptance and commitment therapy (ACT) tailored to each client's unique needs. My goal is to empower you with practical tools and strategies for managing anxiety and building resilience.",
    specializations: ["Generalized Anxiety Disorder", "Social Anxiety", "Depression", "Panic Disorder", "OCD"],
    education: [
      "PhD in Clinical Psychology - University of Nairobi",
      "MA in Psychology - Kenyatta University",
      "BA in Psychology - University of Nairobi",
    ],
  },
  {
    id: 2,
    name: "Dr. James Chen",
    specialty: "Trauma & PTSD",
    credentials: "MD, Board-Certified Psychiatrist",
    rating: 4.8,
    reviews: 95,
    hourlyRate: 150,
    availability: "Tue-Sat, 10am-7pm",
    bio: "Expert in trauma-focused therapy and PTSD treatment using evidence-based approaches.",
    image: "/professional-therapist-man.jpg",
    languages: ["English", "Mandarin"],
    experience: "15+ years",
    about:
      "Dr. James Chen is a board-certified psychiatrist with extensive experience in trauma treatment and PTSD recovery. He specializes in evidence-based approaches including EMDR and trauma-focused CBT.",
    approach:
      "I believe in creating a safe, supportive environment where healing can occur. My approach combines pharmacological interventions when appropriate with psychotherapy to address both the symptoms and root causes of trauma.",
    specializations: ["PTSD", "Complex Trauma", "Childhood Trauma", "Combat-Related PTSD", "Grief & Loss"],
    education: [
      "MD - University of Nairobi School of Medicine",
      "Residency in Psychiatry - Kenyatta National Hospital",
      "Fellowship in Trauma - Moi Teaching and Referral Hospital",
    ],
  },
  {
    id: 3,
    name: "Dr. Maria Rodriguez",
    specialty: "Relationship Counseling",
    credentials: "LMFT, Licensed Marriage & Family Therapist",
    rating: 4.9,
    reviews: 142,
    hourlyRate: 130,
    availability: "Mon-Thu, 2pm-8pm",
    bio: "Helping couples and families improve communication and build stronger relationships.",
    image: "/professional-therapist-woman.png",
    languages: ["English", "Swahili", "French"],
    experience: "10+ years",
    about:
      "Dr. Maria Rodriguez is a licensed marriage and family therapist with a passion for helping couples and families navigate challenges and build healthier relationships. Her warm, non-judgmental approach creates a safe space for honest communication.",
    approach:
      "I use evidence-based couples therapy techniques including the Gottman Method and Emotionally Focused Therapy (EFT). I help couples improve communication, resolve conflicts, and rebuild intimacy and connection.",
    specializations: [
      "Couples Therapy",
      "Marriage Counseling",
      "Family Therapy",
      "Premarital Counseling",
      "Infidelity",
    ],
    education: [
      "MA in Marriage and Family Therapy - Daystar University",
      "BA in Psychology - University of Nairobi",
      "Certified Gottman Therapist",
    ],
  },
  {
    id: 4,
    name: "Dr. Michael Thompson",
    specialty: "Stress Management",
    credentials: "MA, Licensed Professional Counselor",
    rating: 4.7,
    reviews: 87,
    hourlyRate: 110,
    availability: "Wed-Sun, 11am-7pm",
    bio: "Specializing in stress reduction, mindfulness, and work-life balance coaching.",
    image: "/professional-therapist-man.jpg",
    languages: ["English"],
    experience: "8+ years",
    about:
      "Dr. Michael Thompson specializes in helping professionals manage stress and achieve better work-life balance. His practical, goal-oriented approach has helped countless clients reduce burnout and improve overall wellbeing.",
    approach:
      "I combine stress management techniques, mindfulness practices, and lifestyle coaching to help you build sustainable habits for better mental health. We'll work together to identify stressors and develop personalized coping strategies.",
    specializations: ["Work Stress", "Burnout", "Mindfulness", "Work-Life Balance", "Executive Coaching"],
    education: [
      "MA in Counseling Psychology - Strathmore University",
      "BA in Psychology - United States International University Africa",
      "Certified Mindfulness Instructor",
    ],
  },
  {
    id: 5,
    name: "Dr. Emily Watson",
    specialty: "Eating Disorders",
    credentials: "PhD, Registered Dietitian Psychologist",
    rating: 4.9,
    reviews: 110,
    hourlyRate: 140,
    availability: "Mon-Fri, 8am-5pm",
    bio: "Comprehensive treatment for eating disorders combining therapy and nutritional counseling.",
    image: "/professional-therapist-woman.png",
    languages: ["English"],
    experience: "11+ years",
    about:
      "Dr. Emily Watson is a registered dietitian and clinical psychologist specializing in eating disorders. She provides comprehensive, integrated treatment that addresses both the psychological and nutritional aspects of recovery.",
    approach:
      "I use evidence-based treatments including Cognitive Behavioral Therapy for Eating Disorders (CBT-E) and Dialectical Behavior Therapy (DBT). My integrated approach combines psychological therapy with nutritional counseling for holistic recovery.",
    specializations: ["Anorexia Nervosa", "Bulimia Nervosa", "Binge Eating Disorder", "Orthorexia", "Body Image"],
    education: [
      "PhD in Clinical Psychology - Kenyatta University",
      "MS in Nutrition - Jomo Kenyatta University of Agriculture and Technology",
      "Registered Dietitian Nutritionist (RDN)",
    ],
  },
  {
    id: 6,
    name: "Dr. David Park",
    specialty: "Addiction & Recovery",
    credentials: "LCSW, Certified Addiction Specialist",
    rating: 4.8,
    reviews: 103,
    hourlyRate: 125,
    availability: "Tue-Sat, 9am-6pm",
    bio: "Specialized treatment for substance abuse and addiction recovery with compassionate care.",
    image: "/professional-therapist-man.jpg",
    languages: ["English", "Korean"],
    experience: "13+ years",
    about:
      "Dr. David Park is a licensed clinical social worker and certified addiction specialist with 13+ years of experience in substance abuse treatment and recovery. He brings compassion, expertise, and hope to the recovery journey.",
    approach:
      "I believe recovery is possible for everyone. I use evidence-based treatments including motivational interviewing, cognitive behavioral therapy, and 12-step facilitation. I also help clients build strong support networks and develop relapse prevention strategies.",
    specializations: [
      "Alcohol Addiction",
      "Drug Addiction",
      "Opioid Addiction",
      "Relapse Prevention",
      "Family Support",
    ],
    education: [
      "MSW - University of Nairobi",
      "BA in Social Work - Kenyatta University",
      "Certified Addiction Counselor (CAC)",
      "Certified Addiction Specialist (CAS)",
    ],
  },
]

export function getProfessionalById(id: string): Professional | undefined {
  return professionals.find((p) => String(p.id) === id)
}
