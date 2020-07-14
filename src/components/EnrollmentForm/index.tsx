import React from 'react'

import {
  Container,
  Content,
  ContentSection,
  ContentTitle,
  Form,
  FormInput,
  Button,
  FormGroup,
} from './styles'

const EnrollmentForm: React.FC = () => {
  return (
    <Container>
      <Content>
        <ContentSection>
          <ContentTitle>
            Formulário de Matrícula Supletivo Unicanto
          </ContentTitle>
          <p>
            Ao enviar este formulário você pode realizar sua matrícula no
            Supletivo da Unicanto.
          </p>
        </ContentSection>
        <Form
          onSubmit={(event): void => {
            event.preventDefault()
          }}
        >
          <FormGroup>
            <FormInput type="text" placeholder="Nome do aluno(a)" />
          </FormGroup>
          <FormGroup>
            <FormInput type="text" placeholder="CPF" />
            <FormInput type="text" placeholder="Data de Nascimento" />
          </FormGroup>
          <FormGroup>
            <FormInput type="text" placeholder="RG" />
            <FormInput type="text" placeholder="Data de Emissão" />
            <FormInput type="text" placeholder="Orgão Expedidor" />
          </FormGroup>
          <FormGroup>
            <FormInput type="text" placeholder="Naturalidade" />
            <FormInput type="text" placeholder="UF" />
            <FormInput type="text" placeholder="Nacionalidade" />
          </FormGroup>
          <FormGroup>
            <FormInput type="text" placeholder="Endereço" />
          </FormGroup>
          <FormGroup>
            <FormInput type="text" placeholder="Bairro" />
            <FormInput type="text" placeholder="Cidade" />
            <FormInput type="text" placeholder="CEP" />
          </FormGroup>
          <FormGroup>
            <FormInput type="text" placeholder="Telefone Residencial" />
            <FormInput type="text" placeholder="Telefone Comercial" />
            <FormInput type="text" placeholder="Celular" />
          </FormGroup>
          <FormGroup>
            <FormInput
              type="email"
              placeholder="Endereço de email do aluno(a)"
            />
          </FormGroup>
          <Button type="submit">Enviar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default EnrollmentForm
