import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #e6e6e6;
  width: 100vw;
  height: 100vh;
  
  @media screen and (max-width: 650px) {
    padding-top: 100px;


  }
  `

export const ComboBox = styled.select`
  display: flex;
  width: 34%;
  height: 2.2rem;
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 10px;
  background: #e6e6e6;


  @media screen and (max-width: 650px) {
    width: 70%;
    margin-bottom: 15px;

  }
`

export const Text = styled.div`
  @media screen and (max-width: 650px) {
    width: 85%;
  }

   @media screen and (max-width: 650px) {
    margin-top: 20px;
    text-align: center;
  }
`

export const H2 = styled.h2`
  @media screen and (max-width: 650px) {
    font-size: 16px;
  }
`

export const Input = styled.input`

border: 0;
  border-bottom: 2px solid gray;
  outline: none;
  min-width: 180px;
  font-size: 16px;
  transition: all .3s ease-out;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -webkit-appearance: none;
border-radius: 0;

display: flex;
  width: 99%;
  height: 2rem;
  padding-left: 10px;
  background: #e6e6e6;
 

:focus{
  border-bottom: 2px solid  #cc0000;

}

::placeholder {
  color: transparent;
}

:required:invalid+label {
  color: #cc0000;
}

input:focus:required:invalid {
  border-bottom: 2px solid #cc0000;
}

input:required:invalid+label:before {
  content: '*';
}

:focus+label, :not(:placeholder-shown)+label {
  font-size: 13px;
  margin-top: 0;
  color:  #cc0000;
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
          flex-direction: row ;
          

   
 @media screen and (max-width: 650px) {
    width: 80%;
    /* margin-left: -95px; */
    display: flex;
    justify-content: center ;
          position: relative;

    
  }       

`

export const Label = styled.label`  
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
    margin-top: 20px;

  transition: all .3s ease-out;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;


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