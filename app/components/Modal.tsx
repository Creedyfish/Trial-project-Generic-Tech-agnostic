import React from "react";

interface ModalProps {
  title: string;
  open: boolean;
  children: React.ReactNode;
  buttons: React.ReactNode;
}

function Modal({ title, children, buttons, open }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed flex top-0 z-50 w-full h-full bg-dark-0 bg-opacity-20 justify-center items-center">
      <div className="py-6 px-5 w-80 h-64 bg-light-0 dark:bg-dark-0 rounded-lg font-lexend shadow-xl">
        <div className="w-full h-full flex flex-col justify-between text-dark-0 dark:text-light-0">
          <div className="flex flex-col gap-4">
            <div className="font-payton text-primary text-2xl">{title}</div>
            <div className="text-base ">{children}</div>
          </div>
          <div className="text-sm flex justify-between">{buttons}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
