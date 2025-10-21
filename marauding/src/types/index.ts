// TypeScript type definitions
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
}

export type Theme = 'light' | 'dark';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}

// Location and filter types
export type LocationType = 'ChillSpot' | 'StudySpot' | 'Food';

export interface LocationFilter {
  ChillSpot: boolean;
  StudySpot: boolean;
  Food: boolean;
}

export interface LocationMarker {
  name: string;
  description: string;
  type: LocationType;
  coordinates: [number, number];
}
