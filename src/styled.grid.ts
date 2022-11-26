import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 850px) {
    margin-top: -350px;
    padding-bottom: 40px;
    height: auto;
    width: 41%;
    margin-left: 137px;
  align-items: center;
  justify-content: center;

   
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 380px);
  grid-column-gap: 5px;
  justify-items: center;

  

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #f2f2f2;

    width: 90vw;

    /* height: 100vh; */
  }
`

export const ComboBox = styled.select`
  display: flex;
  width: 19rem;
  color: #8c8c8c;
  height: 2.2rem;
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 10px;
  background: #f2f2f2;
  margin-left: 40px;
  font-size: 15px;


  @media screen and (max-width: 500px) {
    margin-bottom: 5px;
    margin-left: 57px;
    width: 67%;
  }

  @media screen and (min-width: 500px) and (max-width: 700px) {
    margin-left: 18px;
    /* width: 85%; */
  }
`

export const Text = styled.div`
  margin-top: 18px;
  margin-bottom: 18px;
  color: #595959;

  @media screen and (max-width: 850px) {
    margin-top: 30px;
    margin-left: 40px;
    /* text-align: center; */
    width: 18rem;
  }
`

export const H2 = styled.h2`
  margin-top: 60px;
  margin-left: 70px;
  margin-bottom: 80px;
  color: #ff7733;


  @media screen and (max-width: 850px) {
    font-size: 16px;
    margin-top: 400px;
    margin-bottom: 50px;
    width: 20rem;
  background: #f2f2f2;
  margin-left: 60px;


  }
`

export const Input = styled.input`
  border: 0;
  border-bottom: 2px solid #a6a6a6;
  outline: none;
  /* min-width: 180px; */
  font-size: 15px;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-appearance: none;
  border-radius: 0;
 color: #808080;

  display: flex;
  width: 28rem;
  height: 2rem;
  padding-left: 10px;
  background: #f2f2f2;

  margin-bottom: 16px;

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

  @media screen and (max-width: 850px) {
    width: 80%;
    margin-bottom: 15px;
  }
`

export const InputContainer = styled.div`
  width: 85%;
  position: relative;
  padding-top: 13px;
  display: flex;
  flex-direction: row;


  @media screen and (max-width: 850px) {
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
  font-size: 16px;
  color: #808080;


  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;

  @media screen and (max-width: 850px) {
    margin-left: 7px;
  }
`

// export const Input = styled.input`
//   display: flex;
//   width: 30%;
//   height: 2rem;
//   border-radius: 8px;
//   padding-left: 10px;

//   @media screen and (max-width: 850px) {
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
  background: #ffbb99;
    color: #0099e6;

  border: 1px solid orange;
  transition: ease 0.6s;
  cursor: pointer;

  :hover{
    background:#ff7733;
    color: green;
  }

  @media screen and (max-width: 850px) {
    width: 16.2rem;
  }
`

export const ClassRoomContainer = styled.div`
  display: flex;
  margin-top: 39px;
  margin-left: 370px;
  align-items: center;
  justify-content: center;
  width: 500px;
  color: #595959;


  @media screen and (max-width: 850px) {
    width: 250px;
    margin-left: 38px;
  }
`

export const SpanSignIn = styled.span`  
  
 margin-top: 15px;
  color: #595959;
    line-height: 45px ;

  @media screen and (max-width: 850px) {
    width: 230px;
    line-height: 50px ;
    margin-left: 38px;

  }
`

