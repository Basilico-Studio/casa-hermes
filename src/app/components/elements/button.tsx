type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({ className, ...props }: ButtonProps) => {
  return <button {...props} className={`rounded-full px-7 py-2 text-sm font-medium tracking-wide hover:bg-opacity-80 transition-all duration-300 ${className}`} />;
};
