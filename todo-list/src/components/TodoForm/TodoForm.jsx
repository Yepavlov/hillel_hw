import { Button, Form } from 'react-bootstrap';
import Input from '../FormComponents/Input';
import { useState } from 'react';
import { initialValues, inputs } from './formConfig.js';

const TodoForm = ({ onSubmit }) => {
  const [data, setData] = useState({ ...initialValues });

  const canSubmit = data.title.trim().length > 0;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSubmit) return;

    onSubmit(data);
    setData({ ...initialValues });
  };

  return (
    <div className="mt-4">
      <Form onSubmit={handleSubmit} className="d-flex gap-2 align-items-end">
        {inputs.map(({ id, name, ...rest }) => (
          <Input
            {...rest}
            name={name}
            value={data[name]}
            key={id}
            onChange={handleChange}
            className="mb-0 flex-grow-1"
          />
        ))}
        <Button disabled={!canSubmit} type="submit" variant="success">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default TodoForm;
