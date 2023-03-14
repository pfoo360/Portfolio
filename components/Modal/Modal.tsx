import { FC, MouseEvent, ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: (event: MouseEvent<HTMLDivElement>) => void;
  children: ReactNode | string;
  className?: string;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  const overlayRootEl = document.getElementById("modal-root");
  if (!overlayRootEl) return null;

  return createPortal(
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[1000] ${
          className ? className : "bg-neutral-900 opacity-70"
        }`}
      />
      <div className="fixed z-[1000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </>,
    overlayRootEl
  );
};

export default Modal;
