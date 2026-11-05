import { services } from '../constants/servicesData';
import { SpecializationCard } from './SpecializationCard';

export const ServicesGrid = () => {
  const getColSpan = (index) => {
    switch (index) {
      case 0:
        return 'lg:col-span-7';
      case 1:
        return 'lg:col-span-5';
      case 2:
        return 'lg:col-span-6';
      case 3:
        return 'lg:col-span-6';
      default:
        return 'col-span-1';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
      {services.map((service, index) => (
        <SpecializationCard 
          key={service.id} 
          service={service} 
          index={index} 
          colSpan={getColSpan(index)}
        />
      ))}
    </div>
  );
};
