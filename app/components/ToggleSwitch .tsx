interface ToggleSwitchProps {
  label?: string;
  checked: boolean;
  onChange: () => void;
}

export const ToggleSwitch = ({ label, checked, onChange }: ToggleSwitchProps) => {
  return (
    <div className="flex items-center space-x-4">
      {label && <span className="text-white">{label}</span>}
      <button
        type="button"
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
          checked ? 'bg-green-500' : 'bg-gray-400'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className="text-white text-sm font-medium">
        {checked ? 'True' : 'False'}
      </span>
    </div>
  );
};
