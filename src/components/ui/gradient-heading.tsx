
interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export const GradientHeading = ({ 
  children, 
  className = "", 
  gradient = "bg-gradient-to-r from-gray-900 to-gray-600"
}: GradientHeadingProps) => {
  return (
    <h1 className={`${gradient} bg-clip-text text-transparent ${className}`}>
      {children}
    </h1>
  );
};
