import React from "react";
import Modal from "./Modal";

interface ModalProps {
  open: boolean;
  setIsOpen: (value: boolean) => void;
}

function SaveSuccessModal({ open, setIsOpen }: ModalProps) {
  return (
    <Modal
      open={open}
      title="Save Success"
      buttons={
        <>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full w-full px-[3.125rem] py-3 bg-primary text-light-0"
          >
            Yes
          </button>
        </>
      }
    >
      <p>The details of Steamed Salmon Recipe has been saved.</p>
    </Modal>
  );
}

function CancelModal({ open, setIsOpen }: ModalProps) {
  return (
    <Modal
      open={open}
      title="Cancel"
      buttons={
        <>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full px-[3.125rem] py-3 bg-light-0 text-dark-0"
          >
            No
          </button>
          <button className="rounded-full px-[3.125rem] py-3 bg-primary text-light-0">
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

function DeleteModal({ open, setIsOpen }: ModalProps) {
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
          <button className="rounded-full px-[3.125rem] py-3 bg-primary text-light-0">
            Yes
          </button>
        </>
      }
    >
      <p>
        Are you sure you want to <span className="text-primary">DELETE</span>{" "}
        the recipe for Steamed Salmon?
      </p>
      <br />

      <p>There is no turning back.</p>
    </Modal>
  );
}

function DeleteFeedbackModal({ open, setIsOpen }: ModalProps) {
  return (
    <Modal
      open={open}
      title="Deleted"
      buttons={
        <>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full w-full px-[3.125rem] py-3 bg-primary text-light-0"
          >
            Yes
          </button>
        </>
      }
    >
      <p>The recipe for Steamed Salmon has been deleted.</p>
    </Modal>
  );
}

export { SaveSuccessModal, DeleteModal, CancelModal, DeleteFeedbackModal };
