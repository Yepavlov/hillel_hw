import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({
  name,
  label,
  placeholder = 'Put some text here',
  className,
  type = 'text',
  value,
  onChange,
}) => {
  const InputComponent = (type) => {
    const propsForInput = { value, name, placeholder, onChange };

    if (type !== 'textarea') {
      propsForInput.type = type;
    } else {
      propsForInput.as = 'textarea';
      propsForInput.rows = 5;
    }

    return <Form.Control {...propsForInput} />;
  };

  return (
    <Form.Group className={className} controlId={'control' + name}>
      <Form.Label column="sm">{label}</Form.Label>
      {InputComponent(type)}
    </Form.Group>
  );
};

export default Input;
