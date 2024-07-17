import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  font-size: 1em;
  resize: none;
  height: 150px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.accent};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9em;
`;

const validationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  message: Yup.string().required('Mensagem é obrigatória'),
});

const Contact: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Lógica para enviar o formulário
      console.log(values);
    },
  });

  return (
    <Container>
      <h2>Contato</h2>
      <Form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        action="https://formcarry.com/s/SsKWy32j9Q0"
        method="POST"
      >
        <Input
          type="text"
          name="name"
          placeholder="Nome"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        ) : null}

        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}

        <TextArea
          name="message"
          placeholder="Mensagem"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <ErrorMessage>{formik.errors.message}</ErrorMessage>
        ) : null}

        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
    </Container>
  );
};

export default Contact;

