import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import RichTextEditor from './RichTextEditor';

const validationSchema = Yup.object().shape({
  field1: Yup.string().required('Field 1 is required.'),
  field2: Yup.string().required('Field 2 is required.'),
  field3: Yup.string().required('Field 3 is required.'),
  field4: Yup.string().required('Field 4 is required.'),
  field5: Yup.string().required('Field 5 is required.'),
});

const FormWithRichTextEditor = () => {
  const initialValues = {
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
    // Handle form submission here
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            component={RichTextEditor}
            name="field1"
            label="Field 1"
          />
          <Field
            component={RichTextEditor}
            name="field2"
            label="Field 2"
          />
          <Field
            component={RichTextEditor}
            name="field3"
            label="Field 3"
          />
          <Field
            component={RichTextEditor}
            name="field4"
            label="Field 4"
          />
          <Field
            component={RichTextEditor}
            name="field5"
            label="Field 5"
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default FormWithRichTextEditor;

