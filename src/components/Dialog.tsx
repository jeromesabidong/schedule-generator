import React from "react";

const Dialog = (props: { id: string; children: React.ReactNode }) => {
  return (
    <>
      <dialog id={props.id} className="modal">
        <div className="modal-box">
          {props.children}
          <div className="modal-action">
            <button
              className="btn"
              onClick={() =>
                (
                  document.getElementById(props.id) as HTMLDialogElement
                )?.close()
              }
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

const DialogControl = (props: {
  target: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <button
        className={props.className || "btn"}
        onClick={
          () =>
            (
              document.getElementById(props.target) as HTMLDialogElement
            )?.showModal()
          // cast the HtMLElement as HtmlDialogElement to have showModal
        }
      >
        {props.children}
      </button>
    </>
  );
};

export default Dialog;
export { DialogControl };
