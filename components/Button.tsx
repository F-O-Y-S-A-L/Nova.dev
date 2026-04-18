const Button = ({ 
  children, 
  className, 
  ...props 
}: any) => {
  const baseClasses = 'cursor-pointer px-6 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2';
  const combinedClasses = `${baseClasses} ${className || ''}`.trim();

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
