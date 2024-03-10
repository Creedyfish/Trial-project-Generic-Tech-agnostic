/**
 * This module contains interfaces and imports for various modal components.
 *
 * @module Modals
 */

// Enabling strict mode
"use client";

// Importing necessary libraries and functions
import React from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteRecipe } from "@/queries/apiQueries";

/**
 * ModalProps interface.
 *
 * @interface
 * @property {boolean} open - The state of the modal (open or closed).
 * @property {Function} setIsOpen - Function to set the state of the modal.
 */
interface ModalProps {
  open: boolean;
  setIsOpen: (value: boolean) => void;
}

/**
 * NamedModalProps interface.
 *
 * @interface
 * @extends ModalProps
 * @property {string | undefined} name - The name of the recipe.
 */
interface NamedModalProps extends ModalProps {
  name: string | undefined;
}

/**
 * DeleteModalProps interface.
 *
 * @interface
 * @extends NamedModalProps
 * @property {Function} setDeleteIsOpen - Function to set the state of the delete modal.
 * @property {number | undefined} id - The ID of the recipe.
 */
interface DeleteModalProps extends NamedModalProps {
  setDeleteIsOpen: (value: boolean) => void;
  id: number | undefined;
}
/**
 * SaveSuccessModal component.
 *
 * @function
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.open - The state of the modal (open or closed).
 * @param {Function} props.setIsOpen - Function to set the state of the modal.
 * @param {string} props.name - The name of the recipe that has been saved.
 * @returns {JSX.Element} - Returns a Modal component with a title, a button, and a message.
 *
 * The component uses the useRouter hook from Next.js to access the router object.
 * The Modal component's title is set to "Save Success".
 * The Modal component's buttons prop is set to a button that closes the modal and redirects the user to the home page when clicked.
 * The Modal component's children prop is set to a paragraph that informs the user that the recipe has been saved.
 */
function SaveSuccessModal({ open, setIsOpen, name }: NamedModalProps) {
  const router = useRouter();
  return (
    <Modal
      open={open}
      title="Save Success"
      buttons={
        <>
          <button
            onClick={() => {
              setIsOpen(false), router.push("/");
            }}
            className="rounded-full w-full px-[3.125rem] py-3 bg-primary text-light-0"
          >
            Yes
          </button>
        </>
      }
    >
      <p>The details of {name} has been saved.</p>
    </Modal>
  );
}

/**
 * CancelModal component.
 *
 * @function
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.open - The state of the modal (open or closed).
 * @param {Function} props.setIsOpen - Function to set the state of the modal.
 * @returns {JSX.Element} - Returns a Modal component with a title, two buttons, and a message.
 *
 * The component uses the useRouter hook from Next.js to access the router object.
 * The Modal component's title is set to "Cancel".
 * The Modal component's buttons prop is set to two buttons:
 * - The first button closes the modal when clicked.
 * - The second button closes the modal and redirects the user to the home page when clicked.
 * The Modal component's children prop is set to a paragraph that asks the user if they want to cancel editing the recipe.
 */
function CancelModal({ open, setIsOpen }: ModalProps) {
  const router = useRouter();
  return (
    <Modal
      open={open}
      title="Cancel"
      buttons={
        <>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="rounded-full px-[3.125rem] py-3 bg-light-0 text-dark-0"
          >
            No
          </button>
          <button
            onClick={() => {
              setIsOpen(false), router.push("/");
            }}
            className="rounded-full px-[3.125rem] py-3 bg-primary text-light-0"
          >
            Yes
          </button>
        </>
      }
    >
      <p>
        Are you sure you want to cancel editing this recipe? Your progress will
        not be saved.
      </p>
    </Modal>
  );
}

/**
 * DeleteModal component.
 *
 * @function
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.open - The state of the modal (open or closed).
 * @param {Function} props.setIsOpen - Function to set the state of the modal.
 * @param {string} props.name - The name of the recipe that is to be deleted.
 * @param {Function} props.setDeleteIsOpen - Function to set the state of the delete modal.
 * @param {number | undefined} props.id - The ID of the recipe that is to be deleted.
 * @returns {JSX.Element} - Returns a Modal component with a title, two buttons, and a message.
 *
 * The component defines an asynchronous function, onDelete, that deletes the recipe with the given ID.
 * If the deletion is successful, the state of the delete modal is set to true.
 * If the deletion fails, an error is logged to the console.
 * The Modal component's title is set to "Delete Recipe?".
 * The Modal component's buttons prop is set to two buttons:
 * - The first button closes the modal when clicked.
 * - The second button deletes the recipe and sets the state of the delete modal to true when clicked.
 * The Modal component's children prop is set to two paragraphs that ask the user if they want to delete the recipe and inform them that there is no turning back.
 */
function DeleteModal({
  open,
  setIsOpen,
  name,
  setDeleteIsOpen,
  id,
}: DeleteModalProps) {
  const onDelete = async (id: number | undefined) => {
    try {
      const response = await deleteRecipe(id);

      console.log({ data: id, response });
      setDeleteIsOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      open={open}
      title="Delete Recipe?"
      buttons={
        <>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full px-[3.125rem] py-3 bg-light-0 text-dark-0"
          >
            No
          </button>
          <button
            onClick={() => onDelete(id)}
            className="rounded-full px-[3.125rem] py-3 bg-primary text-light-0"
          >
            Yes
          </button>
        </>
      }
    >
      <p>
        Are you sure you want to <span className="text-primary">DELETE</span>{" "}
        the recipe for {name}?
      </p>
      <br />

      <p>There is no turning back.</p>
    </Modal>
  );
}

/**
 * DeleteFeedbackModal component.
 *
 * @function
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.open - The state of the modal (open or closed).
 * @param {Function} props.setIsOpen - Function to set the state of the modal.
 * @param {string} props.name - The name of the recipe that has been deleted.
 * @returns {JSX.Element} - Returns a Modal component with a title, a button, and a message.
 *
 * The component uses the useRouter hook from Next.js to access the router object.
 * The Modal component's title is set to "Deleted".
 * The Modal component's buttons prop is set to a button that redirects the user to the home page when clicked.
 * The Modal component's children prop is set to a paragraph that informs the user that the recipe has been deleted.
 */
function DeleteFeedbackModal({ open, setIsOpen, name }: NamedModalProps) {
  const router = useRouter();
  return (
    <Modal
      open={open}
      title="Deleted"
      buttons={
        <>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="rounded-full w-full px-[3.125rem] py-3 bg-primary text-light-0"
          >
            Yes
          </button>
        </>
      }
    >
      <p>The recipe for {name} has been deleted.</p>
    </Modal>
  );
}
/**
 * Exports the SaveSuccessModal, DeleteModal, CancelModal, and DeleteFeedbackModal components.
 *
 * @module Modals
 * @exports SaveSuccessModal
 * @exports DeleteModal
 * @exports CancelModal
 * @exports DeleteFeedbackModal
 */
export { SaveSuccessModal, DeleteModal, CancelModal, DeleteFeedbackModal };
