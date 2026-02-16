interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  accentColor?: string;
}

export default function Checkbox({ checked, onChange, label, accentColor = '#11d0d0' }: CheckboxProps) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 mt-0.5 cursor-pointer flex-shrink-0"
        style={{ accentColor }}
      />
      <span className="font-['Poppins',sans-serif] text-[#40376d] text-base">
        {label}
      </span>
    </label>
  );
}
