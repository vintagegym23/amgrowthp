import React from 'react';
import { Compass, Funnel, HeartHandshake, Megaphone } from 'lucide-react';
import { ServiceId } from '../data/services';

const icons = {
  'brand-strategy': Compass,
  'demand-generation': Megaphone,
  'admission-conversion': Funnel,
  'student-retention': HeartHandshake,
} satisfies Record<ServiceId, React.ComponentType<{ className?: string }>>;

export const ServiceIcon: React.FC<{ id: ServiceId; className?: string }> = ({ id, className }) => {
  const Icon = icons[id];
  return <Icon className={className} aria-hidden="true" />;
};
