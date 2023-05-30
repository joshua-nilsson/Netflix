import React, { createContext, useContext, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import Toggle from 'react-toggle';
import {
  Button,
  ButtonIcon,
  Dialog,
  DialogTitle,
  DialogIcon,
  DialogFrame,
  DialogDisclaimer,
  DialogClarification,
  DialogButton,
  ToggleFrame,
  ToggleMessage,
  Wrapper,
} from './styles/modal';

Dialog.setAppElement('#root');

const ModalContext = createContext();

export default function Modal({ children, ...restProps }) {
  const [isChecked, setIsChecked] = useLocalStorage('checked', false);
  const [isOpen, setIsOpen] = useState(!isChecked);

  return (
    <ModalContext.Provider
      value={{ isChecked, isOpen, setIsChecked, setIsOpen }}
    >
      <Wrapper
        isChecked={isChecked}
        isOpen={isOpen}
        setIsChecked={setIsChecked}
        setIsOpen={setIsOpen}
        {...restProps}
      >
        {children}
      </Wrapper>
    </ModalContext.Provider>
  );
}

Modal.Button = function ModalButton({ children, ...restProps }) {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  return (
    <Button onClick={() => setIsOpen(!isOpen)} {...restProps}>
      {children}
    </Button>
  );
};

Modal.ButtonIcon = function ModalButtonIcon({ ...restProps }) {
  return <ButtonIcon {...restProps} />;
};

Modal.Dialog = function ModalDialog({ children, ...restProps }) {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  return (
    <Dialog
      isOpen={isOpen}
      contentLabel="Modal Alert"
      onRequestClose={() => setIsOpen(!isOpen)}
      {...restProps}
    >
      {children}
    </Dialog>
  );
};

Modal.DialogTitle = function ModalDialogTitle({ children, ...restProps }) {
  return <DialogTitle {...restProps}>{children}</DialogTitle>;
};

Modal.DialogIcon = function ModalDialogIcon({ ...restProps }) {
  return <DialogIcon {...restProps} />;
};

Modal.DialogFrame = function ModalDialogFrame({ children, ...restProps }) {
  return <DialogFrame {...restProps}>{children}</DialogFrame>;
};

Modal.DialogDisclaimer = function ModalDialogDisclaimer({
  children,
  ...restProps
}) {
  return <DialogDisclaimer {...restProps}>{children}</DialogDisclaimer>;
};

Modal.DialogClarification = function ModalDialogClarification({
  children,
  ...restProps
}) {
  return <DialogClarification {...restProps}>{children}</DialogClarification>;
};

Modal.DialogButton = function ModalDialogButton({ children, ...restProps }) {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  return (
    <DialogButton onClick={() => setIsOpen(!isOpen)} {...restProps}>
      {children}
    </DialogButton>
  );
};

Modal.ToggleFrame = function ModalToggleFrame({ children, ...restProps }) {
  return <ToggleFrame {...restProps}>{children}</ToggleFrame>;
};

Modal.Toggle = function ModalToggle({ ...restProps }) {
  const { isChecked, setIsChecked } = useContext(ModalContext);

  return (
    <Toggle
      checked={isChecked}
      className={`${isChecked ? 'active' : 'inactive'}`}
      icons={false}
      onChange={() => setIsChecked(!isChecked)}
      onKeyDown={({ key }) => key === 'Enter' && setIsChecked(!isChecked)}
      {...restProps}
    />
  );
};

Modal.ToggleMessage = function ModalToggleMessage({ children, ...restProps }) {
  return <ToggleMessage {...restProps}>{children}</ToggleMessage>;
};
