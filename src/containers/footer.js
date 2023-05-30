import React from 'react';
import { Footer, Modal } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Help Centre</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem gift cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media Centre</Footer.Link>
          <Footer.Link href="#">Buy gift cards</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix United Kingdom</Footer.Text>
      <Footer.Break />

      <Modal>
        <Modal.Button>
          <Modal.ButtonIcon className="w-8 h-8" />
        </Modal.Button>
        <Modal.Dialog>
          <Modal.DialogTitle>
            <Modal.DialogIcon />
            NOT THE ACTUAL WEBSITE
          </Modal.DialogTitle>
          <Modal.DialogFrame>
            <Modal.DialogDisclaimer>
              This website is{' '}
              <strong>
                <u>NOT</u>
              </strong>{' '}
              Netflix.
              <br />
              Please do not enter any sensitive information.
            </Modal.DialogDisclaimer>
            <Modal.DialogClarification>
              You are viewing a project built for the purpose of mastery in my
              skillset as a Front-End Software Engineer.
            </Modal.DialogClarification>
          </Modal.DialogFrame>
          <Modal.DialogFrame>
            <Modal.DialogButton>Got it, thanks!</Modal.DialogButton>
            <Modal.ToggleFrame>
              <Modal.Toggle />
              <Modal.ToggleMessage>Do not show again</Modal.ToggleMessage>
            </Modal.ToggleFrame>
          </Modal.DialogFrame>
        </Modal.Dialog>
      </Modal>
    </Footer>
  );
}
