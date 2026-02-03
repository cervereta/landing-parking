export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Testimonial {
  id: string;
  content: string;
  name: string;
  role: string;
  avatar: string;
  rating?: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'gradient';
}

export interface Step {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  stepNumber: number;
}

export interface Stat {
  id: string;
  label: string;
  value: number | string;
  suffix?: string;
}
