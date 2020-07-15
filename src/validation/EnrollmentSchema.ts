import * as Yup from 'yup'

const isValidDate = (value: string): boolean => {
  const [day, month, year] = value.split('/')
  const isoFormat = `${year}-${month}-${day}`
  // eslint-disable-next-line no-restricted-globals
  const isDate = !isNaN(Date.parse(isoFormat))
  return isDate
}

const courseMessage = 'Por favor selecione um curso.'

export default Yup.object().shape({
  nomeCompleto: Yup.string()
    .max(255, 'Seu nome não deve ser maior que 255 caracteres.')
    .required('Por favor digite seu nome completo.'),
  email: Yup.string()
    .email('Por favor digite um email válido.')
    .required('Por favor digite seu endereço de email.'),
  cpf: Yup.string()
    .length(14, 'Por favor digite um CPF válido.')
    .required('Por favor digite seu CPF.'),
  dataNascimento: Yup.string()
    .matches(/\d{2}\/\d{2}\/\d{4}/, 'Digite uma data de nascimento válida.')
    .test('valid-date', 'Digite uma data de nascimento válida.', isValidDate)
    .required('Por favor digite sua data de nascimento.'),
  rg: Yup.string()
    .required('Por favor digite seu RG.')
    .max(30, 'Por favor digite um RG válido.'),
  rgDate: Yup.string()
    .matches(/\d{2}\/\d{2}\/\d{4}/, 'Digite uma data válida.')
    .test('valid-date', 'Digite uma data válida.', isValidDate)
    .required('Por favor digite a data de emissão.'),
  orgExp: Yup.string()
    .max(20, 'O orgão expedidor não deve ser maior do que 20 caracteres.')
    .required('Por favor digite o orgão expedidor.'),
  uf: Yup.string()
    .length(2, 'Digite uma unidade federal (estado) válida.')
    .required('Por favor digite sua unidade federal.'),
  nacionalidade: Yup.string()
    .max(30, 'Sua nacionalidade não deve ser maior que 30 caracteres.')
    .required('Por favor digite sua nacionalidade.'),
  endereco: Yup.string()
    .required('Por favor digite seu endereço.')
    .max(255, 'Seu endereço não deve ser maior que 255 caracteres.'),
  bairro: Yup.string()
    .max(30, 'O bairro não deve ser maior que 30 caracteres.')
    .required('Por favor digite seu bairro.'),
  cidade: Yup.string()
    .max(60, 'A cidade não deve ser maior que 60 caracteres.')
    .required('Por favor digite sua cidade.'),
  foneResidencial: Yup.string().max(
    20,
    'O telefone residencial não deve ser maior que 20 caracteres'
  ),
  foneComercial: Yup.string().max(
    20,
    'O telefone comercial não deve ser maior que 20 caracteres.'
  ),
  cel: Yup.string().max(20, 'O celular não deve ser maior que 20 caracteres.'),
  curso: Yup.array()
    .of(Yup.string())
    .min(1, courseMessage)
    .max(1, courseMessage)
    .required(courseMessage),
})
