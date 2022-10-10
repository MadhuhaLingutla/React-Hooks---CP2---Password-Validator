// Write your code here

import {useState} from 'react'
import {
  Container,
  PasswordContainer,
  Heading,
  Instruction,
  InputField,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInformation, setUserInformation] = useState('')
  const showErrorMsg = userInformation.length < 8
  console.log(showErrorMsg)

  const updatePassword = event => setUserInformation(event.target.value)

  return (
    <Container>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Instruction>Check how strong and secure is your password</Instruction>
        <InputField
          type="password"
          onChange={updatePassword}
          value={userInformation}
        />
        {showErrorMsg && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordContainer>
    </Container>
  )
}

export default PasswordValidator
