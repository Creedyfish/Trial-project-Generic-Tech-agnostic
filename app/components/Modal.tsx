/**
 * This module exports a Modal component that displays a modal dialog.
 *
 * @module Modal
 */

// Importing necessary libraries
import React from "react";

// Defining the ModalProps interface
interface ModalProps {
  title: string; // Title of the modal
  open: boolean; // State of the modal (open or closed)
  children: React.ReactNode; // Content of the modal
  buttons: React.ReactNode; // Buttons to be displayed in the modal
}

/**
 * Modal component.
 *
 * @function
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the modal.
 * @param {boolean} props.open - The state of the modal (open or closed).
 * @param {React.ReactNode} props.children - The content of the modal.
 * @param {React.ReactNode} props.buttons - The buttons to be displayed in the modal.
 * @returns {JSX.Element | null} - Returns a modal dialog if open is true, otherwise returns null.
 *
 * The component checks if the open prop is true. If it's not, the component returns null and doesn't render anything.
 * If open is true, the component returns a div that contains the modal dialog.
 * The modal dialog contains the title, the content (children), and the buttons.
 */
function Modal({ title, children, buttons, open }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed top-0 z-50 flex h-full w-full items-center justify-center bg-dark-0 bg-opacity-20">
      <div className="h-64 w-80 rounded-lg bg-light-0 px-5 py-6 font-lexend shadow-xl dark:bg-dark-0">
        <div className="flex h-full w-full flex-col justify-between text-dark-0 dark:text-light-0">
          <div className="flex flex-col gap-4">
            <div className="font-payton text-2xl text-primary">{title}</div>
            <div className="text-base ">{children}</div>
          </div>
          <div className="flex justify-between text-sm">{buttons}</div>
        </div>
      </div>
    </div>
  );
}
// The Modal component is exported for use in other parts of the application
export default Modal;
