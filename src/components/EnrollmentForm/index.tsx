/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
import React, { useRef, useState } from 'react'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { ValidationError } from 'yup'
import QRCode from 'qrcode.react'
import {
  Container,
  Content,
  ContentSection,
  ContentTitle,
  Button,
  FormGroup,
  Instruction,
  Footer,
} from './styles'

import { ReactComponent as Spinner } from '../../assets/spinner.svg'

import Input, { MaskedInput } from '../Input'
import Radio, { CheckboxOption } from '../Radio'
import EnrollmentSchema from '../../validation/EnrollmentSchema'

const EnrollmentForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [courseError, setCourseError] = useState<boolean>(false)

  async function sendEnrollment(data: Record<string, any>): Promise<void> {
    setLoading(true)
    data.curso = data.curso[0]
    fetch(
      'https://us-central1-sayro-digital.cloudfunctions.net/handleEnrollmentSubscription',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setSuccess(res.success)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  async function handleSubmit(data: Record<string, any>): Promise<void> {
    try {
      console.log(data)
      if (formRef !== null && formRef.current !== null) {
        formRef.current.setErrors({})
        setCourseError(false)
      }
      await EnrollmentSchema.validate(data, {
        abortEarly: false,
      })
      // Validation passed
      sendEnrollment(data)
    } catch (err) {
      const validationErrors: Record<string, string> = {}
      if (err instanceof ValidationError) {
        err.inner.forEach((error: ValidationError) => {
          validationErrors[error.path] = error.message
        })
        if (formRef !== null && formRef.current !== null) {
          formRef.current.setErrors(validationErrors)
          setCourseError(formRef.current.getFieldError('curso') !== undefined)
        }
      }
    }
  }

  const checkboxOptions: CheckboxOption[] = [
    {
      id: 'ensino-fundamental',
      value: 'Ensino Fundamental',
      label: 'Ensino Fundamental',
    },
    { id: 'ensino-medio', value: 'Ensino Médio', label: 'Ensino Médio' },
  ]

  return (
    <>
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
            <small>
              O estudante ou seu responsável e/ou seu procurador, declara
              conhecer e concordar com o disposto no contrato de Prestação de
              Serviços Educacionais e no Regimento Escolar do UNICANTO
              SUPLETIVO, ciente inclusive dos prazos mínimos de estudos exigidos
              para o curso. Disponível para consulta no site:{' '}
              <a
                href="https://www.supletivounicanto.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.supletivounicanto.com.br
              </a>
            </small>
            <p>
              Se desejar,{' '}
              <a
                href="https://api.whatsapp.com/send?phone=5599991382013&text=Ol%C3%A1%20tenho%20interesse%20em%20fazer%20o%20EJA%20!%20"
                target="_blank"
                rel="noopener noreferrer"
              >
                fale conosco via WhatsApp
              </a>
              .
            </p>
            <small>Ou capture o QR Code abaixo:</small>
            <QRCode
              size={120}
              bgColor="#f0f0f5"
              fgColor="#1b1b2f"
              value="https://api.whatsapp.com/send?phone=5599991382013&text=Ol%C3%A1%20tenho%20interesse%20em%20fazer%20o%20EJA%20!%20"
            />
          </ContentSection>
          {success && (
            <Instruction style={{ color: '#00AF54' }}>
              Sua matrícula foi enviada com sucesso. Em breve entraremos em
              contato com você!
            </Instruction>
          )}
          {!success && (
            <Form ref={formRef} onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Nome do aluno(a)"
                  name="nomeCompleto"
                />
              </FormGroup>
              <FormGroup>
                <MaskedInput
                  type="text"
                  name="cpf"
                  placeholder="CPF"
                  mask="999.999.999-99"
                  maskChar=""
                />
                <MaskedInput
                  type="text"
                  name="dataNascimento"
                  placeholder="Data de nascimento"
                  mask="99/99/9999"
                />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="RG" name="rg" />
                <MaskedInput
                  type="text"
                  name="rgDate"
                  placeholder="Data de emissão"
                  mask="99/99/9999"
                />
                <Input
                  type="text"
                  placeholder="Orgão Expedidor"
                  name="orgExp"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Naturalidade"
                  name="naturalidade"
                />
                <Input type="text" placeholder="UF" name="uf" />
                <Input
                  type="text"
                  placeholder="Nacionalidade"
                  name="nacionalidade"
                />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Endereço" name="endereco" />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Bairro" name="bairro" />
                <Input type="text" placeholder="Cidade" name="cidade" />
                <Input type="text" placeholder="CEP" name="cep" />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Telefone Residencial"
                  name="foneResidencial"
                />
                <Input
                  type="text"
                  placeholder="Telefone Comercial"
                  name="foneComercial"
                />
                <Input type="text" placeholder="Celular" name="cel" />
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  placeholder="Endereço de email do aluno(a)"
                  name="email"
                />
              </FormGroup>
              <Instruction invalid={courseError}>
                Por favor escolha o curso no qual você deseja se matricular:
              </Instruction>
              <FormGroup>
                <Radio name="curso" options={checkboxOptions} />
              </FormGroup>
              <Button type="submit" disabled={loading}>
                {loading && (
                  <Spinner fill="#C1C1D7" style={{ marginRight: '12px' }} />
                )}
                {loading ? 'Enviando' : 'Enviar'}
              </Button>
            </Form>
          )}
        </Content>
      </Container>
      <Footer>
        <p>
          Recredenciado pela Portaria nº 63 de 09/03/2018 – SEDF QN 5-A Conjunto
          02 Lote 10 Riacho Fundo – II CEP 71.880-512 Brasília - DF Fone:
          3081-9555 E-mail: supletivounicanto@gmail.com
        </p>
        <small>
          O estudante ou seu responsável e/ou seu procurador, declara conhecer e
          concordar com o disposto no contrato de Prestação de Serviços
          Educacionais e no Regimento Escolar do UNICANTO SUPLETIVO, ciente
          inclusive dos prazos mínimos de estudos exigidos para o curso.
          Disponível para consulta no site:{' '}
          <a href="https://www.supletivounicanto.com.br">
            www.supletivounicanto.com.br
          </a>
        </small>
      </Footer>
    </>
  )
}

export default EnrollmentForm
