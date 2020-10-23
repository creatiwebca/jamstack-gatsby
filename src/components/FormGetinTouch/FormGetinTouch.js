/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Form, FormGroup, TextInput, TextArea, Button } from 'carbon-components-react';
import { Row, Column } from 'gatsby-theme-carbon/src/components/Grid';
import { mbItems, mtButton } from './formGetinTouch.scss'

const additionalProps = {
  className: 'some-class',
  onSubmit: (e) => {
    e.preventDefault();
  },
};

const TextInputFirstNameProps = {
  className: {mbItems},
  id: 'firstNameInput',
  type: 'text',
  name: 'firstNameInput',
  labelText: 'First name',
  placeholder: 'Enter your first name',
};

const TextInputLastNameProps = {
  className: {mbItems},
  id: 'lastNameInput',
  type: 'text',
  name: 'lastNameInput',
  labelText: 'Last name',
  placeholder: 'Enter your last name',
};

const TextInputEmailProps = {
  className: {mbItems},
  id: 'emailInput',
  type: 'email',
  name: 'emailInput',
  labelText: 'Email',
  placeholder: 'Enter your email',
};

const textareaMessageProps = {
  className: {mbItems},
  labelText: 'What are you looking to acomplish?',
  placeholder: 'Enter message',
  id: 'messageTextarea',
  name: 'messageTextarea',
  cols: 50,
  rows: 4,
};

const buttonEvents = {
  className: 'some-class',
};

const FormGetinTouch = (props) => (
  <Row>
    <Column colLg={4}>
      <Form {...props}>
        <FormGroup>
          <TextInput {...TextInputFirstNameProps} />
        </FormGroup>
        <FormGroup>
          <TextInput {...TextInputLastNameProps} />
        </FormGroup>
        <FormGroup>
          <TextInput {...TextInputEmailProps} />
        </FormGroup>
        <FormGroup>
          <TextArea {...textareaMessageProps}  />
        </FormGroup>    
        <Button
          kind="primary"
          tabIndex={0}
          type="submit"
          className={mtButton}>
            Send message
          </Button>
      </Form>
    </Column>
  </Row>
);

export default FormGetinTouch;
