import styled from 'styled-components';
import Modal from 'react-modal';
import { FiAlertCircle } from 'react-icons/fi';

export const Wrapper = styled.div``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0.25rem;
  font-weight: 600;
  cursor: pointer;

  @media (min-width: 1280px) {
    justify-content: flex-start;
  }
`;

export const ButtonIcon = styled(FiAlertCircle)`
  width: 2rem;
  height: 2rem;
  color: #fff;
  transition: all 0.1s linear;

  :hover,
  :focus,
  :active {
    color: #d81f26;
  }
`;

export const Dialog = styled(Modal)``;

export const DialogTitle = styled.h3`
  margin-top: 0;
  color: #111827;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;

  svg {
    position: relative;
    top: -0.125rem;
    margin-right: 0.4rem;
  }
`;

export const DialogIcon = styled(ButtonIcon)`
  display: inline;
  position: relative;
  top: -0.15rem;
  width: 1.125rem;
  height: 1.125rem;
  vertical-align: middle;
  color: #d81f26;
`;

export const DialogFrame = styled.div`
  margin-top: 1rem;
`;

export const DialogDisclaimer = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const DialogClarification = styled(DialogDisclaimer)`
  margin-top: 1.25rem;
`;

export const DialogButton = styled.button`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
  background: #d81f26;
  border-width: 1px;
  border-color: transparent;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  cursor: pointer;
  transition: all 0.1s linear;

  :hover {
    opacity: 0.75;
  }

  @media (min-width: 425px) {
    display: inline-flex;
    margin-bottom: 0;
  }
`;

export const ToggleFrame = styled.label`
  margin-left: 0;
  -webkit-user-select: none; /* Safari */
  user-select: none;

  .react-toggle,
  .react-toggle-track,
  .react-toggle.inactive:hover .react-toggle-track {
    background-color: #e5e7eb;
  }

  .react-toggle--focus .react-toggle-thumb,
  .react-toggle:active .react-toggle-thumb {
    box-shadow: none;
  }

  .react-toggle.active:hover .react-toggle-track,
  .active .react-toggle-track {
    background-color: #d81f26;
  }

  .inactive {
    background-color: #e5e7eb;
  }

  .react-toggle {
    margin-right: 0.5rem;
  }

  .react-toggle:focus-within {
    outline: -webkit-focus-ring-color auto 2px;
    outline: 2px solid black;
  }

  .react-toggle-thumb {
    top: 4px;
    left: 5px;
    border: none;
    width: 16px;
    height: 16px;
  }

  .react-toggle--checked .react-toggle-thumb {
    top: 4px;
    left: 24px;
  }

  .active,
  .inactive {
    display: inline-flex;
    align-items: center;
    position: relative;
    vertical-align: middle;
    width: 2.75rem;
    height: 1.5rem;
    border-radius: 9999px;
  }

  span {
    color: #6b7280;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.25rem;
  }

  @media (min-width: 425px) {
    margin-left: 1rem;
  }
`;

export const ToggleMessage = styled.span``;
