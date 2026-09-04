export interface Professional {
  id: string
  name: string
  specialty: string
  credentials: string
  rating: number
  reviews: number
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

export const professionals: Professional[] = [
  {
    id: "loise-brenda",
    name: "Dr. Loise Brenda",
    specialty: "Anxiety, Depression & Personal Growth",
    credentials: "Clinical Psychologist",
    rating: 4.9,
    reviews: 128,
    availability: "Monday–Friday, 9:00 AM–6:00 PM",
    bio: "A compassionate psychologist helping clients build resilience and lasting emotional wellbeing.",
    image: "/professional-therapist-woman.png",
    languages: ["English", "Swahili"],
    experience: "12+ years",
    about: "Dr. Loise Brenda creates a warm, confidential space for people navigating anxiety, depression, life transitions, and personal growth.",
    approach: "Her approach combines cognitive behavioural therapy, mindfulness, and practical tools tailored to each client's unique goals.",
    specializations: ["Anxiety", "Depression", "Personal Growth", "Stress Management", "Life Transitions"],
    education: ["Clinical Psychology", "Cognitive Behavioural Therapy", "Mindfulness-Based Practice"],
  },
  {
    id: "malusha-manase",
    name: "Malusha Manase",
    specialty: "Relationships, Family & Life Transitions",
    credentials: "Counsellor & Wellness Practitioner",
    rating: 4.8,
    reviews: 96,
    availability: "Tuesday–Saturday, 10:00 AM–7:00 PM",
    bio: "A supportive practitioner helping individuals, couples, and families move forward with clarity.",
    image: "/professional-therapist-man.jpg",
    languages: ["English", "Swahili"],
    experience: "9+ years",
    about: "Malusha Manase supports clients through relationship concerns, family dynamics, grief, and important life changes with care and without judgement.",
    approach: "His collaborative approach centres your story, strengthens communication, and turns difficult moments into practical next steps.",
    specializations: ["Relationship Counselling", "Family Support", "Grief & Loss", "Life Transitions", "Communication"],
    education: ["Counselling Psychology", "Family Systems Practice", "Wellness Coaching"],
  },
]

export function getProfessionalById(id: string): Professional | undefined {
  return professionals.find((professional) => professional.id === id)
}
