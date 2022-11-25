import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 650px) {
    margin-top: -350px;
    padding-bottom: 140px;
    height: auto;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  grid-column-gap: 5px;
  justify-items: center;
 

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f2f2f2;
    width: 100vw;
    height: 100vh;
  }
`

export const ComboBox = styled.select`
  display: flex;
  width: 12.2rem;

  height: 2.2rem;
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 10px;
  background: #f2f2f2;
    margin-left: 130px;


  @media screen and (max-width: 500px) {
    margin-bottom: 5px;
    margin-left: 80px;
    width: 55%;
  }


  @media screen and (min-width: 500px)  and (max-width: 700px){
    margin-left: 18px;
    width: 88%;
  }
`

export const Text = styled.div`
  margin-top: 13px;
  margin-bottom: 10px;


  @media screen and (max-width: 650px) {
    margin-top: 30px;
    text-align: center;
    width: 85%;

  }
`

export const H2 = styled.h2`
  margin-top: 60px;

  @media screen and (max-width: 650px) {
    font-size: 16px;
    margin-top: 400px;
  }
`

export const Input = styled.input`
  border: 0;
  border-bottom: 2px solid gray;
  outline: none;
  min-width: 180px;
  font-size: 16px;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-appearance: none;
  border-radius: 0;

  display: flex;
  width: 99%;
  height: 2rem;
  padding-left: 10px;
  background: #f2f2f2;

  :focus {
    border-bottom: 2px solid #cc0000;
  }

  ::placeholder {
    color: transparent;
  }

  :required:invalid + label {
    color: #cc0000;
  }

  input:focus:required:invalid {
    border-bottom: 2px solid #cc0000;
  }

  input:required:invalid + label:before {
    content: '*';
  }

  :focus + label,
  :not(:placeholder-shown) + label {
    font-size: 13px;
    margin-top: 0;
    color: #cc0000;
  }

  @media screen and (max-width: 650px) {
    width: 80%;
    margin-bottom: 15px;
  }
`

export const InputContainer = styled.div`
  width: 35%;
  position: relative;
  padding-top: 13px;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 650px) {
    width: 80%;
    /* margin-left: -95px; */
    display: flex;
    justify-content: center;
    position: relative;
  }
`

export const Label = styled.label`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 20px;

  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;

  @media screen and (max-width: 650px) {
    margin-left: 7px;
  }
`

// export const Input = styled.input`
//   display: flex;
//   width: 30%;
//   height: 2rem;
//   border-radius: 8px;
//   padding-left: 10px;

//   @media screen and (max-width: 650px) {
//     width: 80%;
//     margin-bottom: 15px;
//   }
// `

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34%;
  height: 2.4rem;
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 15px;
  background: #ffe6b3;

  @media screen and (max-width: 650px) {
    width: 77%;
  }
`

export const ClassRoomContainer = styled.div`
  display: flex;
  margin-top: 32px;
  margin-left: 370px;
  align-items: center;
  justify-content: center;
  width: 500px;

  @media screen and (max-width: 650px) {
    width: 250px;
  margin-left: 38px;
  
  }
`
