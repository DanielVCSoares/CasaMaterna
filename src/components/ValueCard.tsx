import type { ReactNode } from "react";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border-t-4 border-primary-teal">
    {icon}
    <h3 className="text-xl font-semibold mb-2 text-dark-text">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ValueCard;