// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: #24263c;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    padding: 30px;
  }
`
export const PasswordContainer = styled.div`
  background-color: #383a4e;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 40px;
  margin-bottom: 30px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    text-align: center;
    font-size: 30px;
  }
`
export const Instruction = styled.p`
  color: white;
  font-size: 15px;
  margin-bottom: 40px;
  @media screen and (max-width: 576px) {
    text-align: center;
  }
`
export const InputField = styled.input`
  height: 40px;
  width: 300px;
  background-color: #f8fafc;
  margin-bottom: 10px;
  outline: none;
`
export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 12px;
  @media screen and (max-width: 576px) {
    text-align: center;
  }
`
