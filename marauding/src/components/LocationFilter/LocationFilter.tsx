import React from 'react';
import { LocationFilter as FilterType } from '@/types';
import { FILTER_CONFIG } from '@/constants/colors';
import styles from './LocationFilter.module.css';

interface LocationFilterProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
}

export const LocationFilter: React.FC<LocationFilterProps> = ({ filters, onFilterChange }) => {
  const handleFilterChange = (type: keyof FilterType) => {
    onFilterChange({
      ...filters,
      [type]: !filters[type]
    });
  };

  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.title}>Filter Locations</h3>
      <div className={styles.filterGroup}>
        {Object.entries(FILTER_CONFIG).map(([type, config]) => (
          <label key={type} className={styles.filterItem}>
            <input
              type="checkbox"
              checked={filters[type as keyof FilterType]}
              onChange={() => handleFilterChange(type as keyof FilterType)}
              className={styles.checkbox}
            />
            <span className={styles.label}>
              {config.icon} {config.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
