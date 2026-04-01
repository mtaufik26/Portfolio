// ServicesGrid.jsx
import { motion } from 'framer-motion';
import { containerVariants } from '../constants/serviceVariants';
import { services } from '../constants/servicesData';
import { ServiceCard } from './ServiceCard';

export const ServicesGrid = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {services.map((service, index) => (
        <ServiceCard 
          key={service.id} 
          service={service} 
          index={index} 
        />
      ))}
    </motion.div>
  );
};