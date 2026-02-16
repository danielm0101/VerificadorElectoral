interface StepBadgeProps {
  number: number | string;
  color?: string;
  size?: string;
}

export default function StepBadge({ number, color = '#ffb700', size = 'w-10 h-10' }: StepBadgeProps) {
  return (
    <div
      className={`${size} rounded-full flex items-center justify-center flex-shrink-0`}
      style={{ backgroundColor: color }}
    >
      <span className="text-white font-bold text-xl">{number}</span>
    </div>
  );
}
