import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from '../contactform/contactform.module.css';

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
      <Form className={css['formBox']}>
        <div className={css['inputContainer']}>
          <label className={css.label} htmlFor={nameid}>
            Name
          </label>
          <Field className={css['input']} type="text" name="name" id={nameid} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css['inputContainer']}>
          <label htmlFor={numberid}>Number</label>
          <Field
            className={css['input']}
            type="text"
            name="number"
            id={numberid}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css['buttonAdd']} type="submit">
          Add contact{' '}
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
