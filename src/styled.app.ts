import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: lightpink;
  width: 100vw;
  height: 100vh;
  
  
  @media screen and (max-width: 800px) {
    padding-top: 100px;

  }
  `

export const ComboBox = styled.select`
  display: flex;
  width: 31%;
  height: 2.2rem;
  border-radius: 8px;
  padding-left: 10px;

  @media screen and (max-width: 800px) {
    width: 84%;
    margin-bottom: 15px;

  }
`

export const Text = styled.div`
  @media screen and (max-width: 800px) {
    width: 85%;
  }
`

export const H2 = styled.h2`
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`

export const Input = styled.input`
  display: flex;
  width: 30%;
  height: 2rem;
  border-radius: 8px;
  padding-left: 10px;

  @media screen and (max-width: 800px) {
    width: 80%;
    margin-bottom: 15px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 2.3rem;
  border-radius: 8px;
  padding-left: 10px;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`