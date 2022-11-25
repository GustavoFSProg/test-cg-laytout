import { Container, Input, InputContainer, H2, Label, Text, Button, ComboBox } from './styled.app'

function App() {
  return (
    <Container>
        <H2>Create a School Educator Account</H2>
      <InputContainer>
        <Input type="email" placeholder=" " /> <Label>Email</Label>
        <span style={{ marginLeft: '10px', color: 'red', fontSize: '20px' }}>*</span>
      </InputContainer>
      <InputContainer>
        <Input type="email" placeholder=" " /> <Label>Password</Label>
        <span style={{ marginLeft: '10px', color: 'red', fontSize: '20px' }}>*</span>
      </InputContainer>
      <InputContainer>
        <Input type="email" placeholder=" " /> <Label>Confirm Password</Label>
        <span style={{ marginLeft: '10px', color: 'red', fontSize: '20px' }}>*</span>
      </InputContainer>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          flexDirection: 'row',
        }}
      >
        <ComboBox>
          <option>Hours Fit Title</option>
          <option>Contry State</option>
          <option>City State</option>
        </ComboBox>
        <span style={{ marginLeft: '10px', color: 'red', fontSize: '20px' }}>*</span>
      </div>
      <InputContainer>
        <Input type="email" placeholder=" " /> <Label>First Name</Label>
        <span style={{ marginLeft: '20px', color: 'red', fontSize: '20px' }}>*</span>
      </InputContainer>

        <InputContainer
       
      >
        <Input type="email" placeholder=" " />{' '}
        <Label
         
        >
          Last Name
        </Label>
        <span style={{ marginLeft: '20px', color: 'red', fontSize: '20px' }}>*</span>
      </InputContainer>
      <InputContainer
       
      >
        <Input type="email" placeholder=" " />{' '}
        <Label
         
        >
          Birthdate
        </Label>
        <span style={{ marginLeft: '20px', color: 'red', fontSize: '20px' }}>*</span>
      </InputContainer>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          flexDirection: 'row',
        }}
      >
        <ComboBox>
          <option>Role</option>
          <option>Contry State</option>
          <option>City State</option>
          <br />
        </ComboBox>
        <span style={{ marginLeft: '20px', color: 'red', fontSize: '20px' }}>*</span>
      </div>

      <div style={{ display: 'flex', marginTop: '12px', alignItems: 'center', justifyContent: 'center' }}>
        <input
          type="checkbox"
          style={{ minWidth: '17px',   minHeight: '17px', marginRight: '12px' }}
        />
        Classroom Only? Single to Others
      </div>
      <Text>By Singning up you agree to our user agrements! And Privacy Police.</Text>
      <Button type="button">Signin Up</Button>
      <span style={{marginTop: '15px'}}>Already have an account?</span>
      <a href="#">Sign in!</a>
      <br />
      <br />
      <br />
      <br />
    </Container>
  )
}

export default App
