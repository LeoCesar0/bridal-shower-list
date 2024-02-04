import React from "react";
import { Styles } from "./styles";
import { Button } from "../Button";

export const Dialog = ({
  actions = null,
  title = "",
  isOpen = false,
  onConfirm = undefined,
  setModalProps,
}) => {
  if (!title || !setModalProps) return null;

  return (
    <>
      <Styles.Overlay
        isOpen={isOpen}
        onClick={(event) => {
          setModalProps({});
        }}
      >
        <Styles.Content
          onClick={(event) => {
            event.stopPropagation();
          }}
          isOpen={isOpen}
        >
          <Styles.Header>
            <Styles.Title>{title}</Styles.Title>
            <Styles.Actions>
              {actions}
              {onConfirm && (
                <Button
                  onClick={async () => {
                    await onConfirm();
                    setModalProps({});
                  }}
                  variant="confirm"
                >
                  confirmar
                </Button>
              )}
            </Styles.Actions>
          </Styles.Header>
          <img
            onClick={() => {
              setModalProps({});
            }}
            alt="close"
            src="icons/close.svg"
            className="close"
          />
        </Styles.Content>
      </Styles.Overlay>
    </>
  );
};
