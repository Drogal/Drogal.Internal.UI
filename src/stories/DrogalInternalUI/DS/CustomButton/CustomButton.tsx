interface CustomButtonProps {
  label?: string;
  icon?: string;
  onClick?: () => void;
}

const CustomButton = ({ label, icon, onClick }: CustomButtonProps) => {
  return <button onClick={onClick}>{icon} {label}</button>;
};

export default CustomButton;