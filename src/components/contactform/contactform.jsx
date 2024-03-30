import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please fill out this field'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please fill out this field'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = { ...values, id: nanoid() };
    onSubmit(newContact);
    resetForm();
  };

  const nameid = useId();
  const numberid = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameid}>Name</label>
          <Field type="text" name="name" id={nameid} />
          <ErrorMessage name="name" as="span" />
        </div>
        <div>
          <label htmlFor={numberid}>Number</label>
          <Field type="text" name="number" id={numberid} />
          <ErrorMessage name="number" as="span" />
        </div>
        <button type="submit">Add contact </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
