interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  borderColor?: string;
  maxWidth?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, borderColor = '#a855f7', maxWidth = 'max-w-[850px]', children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[#40376d]/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`relative bg-white rounded-[17px] p-6 ${maxWidth} w-full mx-4 shadow-2xl border-[3px]`}
        style={{ borderColor }}
      >
        {children}
      </div>
    </div>
  );
}
