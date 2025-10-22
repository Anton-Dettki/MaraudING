export const MARKER_COLORS = {
  ChillSpot: '#06d6a0', // Green
  StudySpot: '#ef476f', // Blue
  Food: '#f59e0b',      // Orange
  default: '#6b7280'    // Gray
} as const;

export type MarkerColorKey = keyof typeof MARKER_COLORS;

export const FILTER_CONFIG = {
  ChillSpot: {
    label: 'Chill Spots',
    icon: '🌿',
    color: MARKER_COLORS.ChillSpot
  },
  StudySpot: {
    label: 'Study Spots',
    icon: '📚',
    color: MARKER_COLORS.StudySpot
  },
  Food: {
    label: 'Food',
    icon: '🍕',
    color: MARKER_COLORS.Food
  }
} as const;
