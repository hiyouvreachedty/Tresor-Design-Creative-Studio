import React from 'react';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, maxWidth = 'max-w-4xl' }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-fast"
      onClick={onClose}
    >
      <div 
        className={`bg-[#161B22] border border-white/10 rounded-xl w-full ${maxWidth} max-h-[90vh] flex flex-col animate-scale-in`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;