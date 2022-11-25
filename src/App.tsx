import { Link } from 'react-router-dom'
import { Container, Input, H2, Text, Button, ComboBox } from './styled.app'

function App() {
  return (
    <Container>
      <Link to="/exe">Exemplo</Link>

      <H2>Create a School Educator Account</H2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          flexDirection: 'row',
        }}
      >
        <Input type="email" placeholder="Email" />{' '}
        <span style={{ marginLeft: '10px', fontSize: '20px' }}>*</span>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          flexDirection: 'row',
        }}
      >
        <Input type="password" placeholder="Password" />
        <span style={{ marginLeft: '10px', fontSize: '20px' }}>*</span>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          flexDirection: 'row',
        }}
      >
        <Input type="password" placeholder="Confirm Password" />
        <span style={{ marginLeft: '10px', fontSize: '20px' }}>*</span>
      </div>
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
        <span style={{ marginLeft: '10px', fontSize: '20px' }}>*</span>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          flexDirection: 'row',
        }}
      >
        <Input type="text" placeholder="First Name" />
        <span style={{ marginLeft: '10px', fontSize: '20px' }}>*</span>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          flexDirection: 'row',
        }}
      >
        <Input type="text" placeholder="Last Name" />
        <span style={{ marginLeft: '10px', fontSize: '20px' }}>*</span>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          flexDirection: 'row',
        }}
      >
        <Input type="text" placeholder="Birthdate" />

        <span style={{ marginLeft: '10px', fontSize: '20px' }}>*</span>
      </div>

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
        <span style={{ marginLeft: '10px', fontSize: '20px' }}>*</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <input
          type="checkbox"
          style={{ minWidth: '17px', minHeight: '17px', marginRight: '7px' }}
        />
        Classroom Only? Single to Others
      </div>
      <Text>By Singning up you agree to our user agrements! And Privacy Police.</Text>
      <Button type="button">Signin Up</Button>
      <span>Already have an account?</span>
      <a href="#">Sign in!</a>
      <br />
      <br />
      <br />
    </Container>
  )
}

export default App