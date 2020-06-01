import React from 'react';
import { Form } from 'react-bootstrap';
type FormProps = {
  controlId: string;
  formLabel: string;
  formControlType: string;
  formControlPlaceholder: string;
  formText?: string;
};
export const CustomForm = ({
  controlId,
  formLabel,
  formControlType,
  formControlPlaceholder,
  formText,
}: FormProps) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{formLabel}</Form.Label>
      <Form.Control
        type={formControlType}
        placeholder={formControlPlaceholder}
      />
      <Form.Text className="text-muted">{formText}</Form.Text>
    </Form.Group>
  );
};
