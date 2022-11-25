import {
  Container,
  ClassRoomContainer,
  Input,
  GridContainer,
  InputContainer,
  H2,
  Label,
  Text,
  Button,
  ComboBox,
} from './styled.grid'

function Grid() {
  return (
    <Container>
      <H2>Create a School Educator Account-GRIDD</H2>
      <GridContainer>
        <InputContainer>
          <Input type="email" placeholder=" " /> <Label>Email</Label>
          <span style={{ marginLeft: '10px', color: 'red', fontSize: '20px' }}>*</span>
        </InputContainer>
        <InputContainer>
          <Input type="password" placeholder=" " /> <Label>Password</Label>
          <span style={{ marginLeft: '10px', color: 'red', fontSize: '20px' }}>*</span>
        </InputContainer>
        <InputContainer>
          <Input type="password" placeholder=" " /> <Label>Confirm Password</Label>
          <span style={{ marginLeft: '10px', color: 'red', fontSize: '20px' }}>*</span>
        </InputContainer>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center',
            width: '25rem',
            // flexDirection: 'row',
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

        <InputContainer>
          <Input type="email" placeholder=" " /> <Label>Last Name</Label>
          <span style={{ marginLeft: '20px', color: 'red', fontSize: '20px' }}>*</span>
        </InputContainer>
        <InputContainer>
          <Input type="email" placeholder=" " /> <Label>Birthdate</Label>
          <span style={{ marginLeft: '20px', color: 'red', fontSize: '20px' }}>*</span>
        </InputContainer>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center',
            width: '25rem',
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

        <ClassRoomContainer>
          <input
            type="checkbox"
            style={{ minWidth: '17px', minHeight: '17px', marginRight: '12px' }}
          />
          Classroom Only? Single to Others
        </ClassRoomContainer>
      </GridContainer>

      <Text>By Singning up you agree to our user agrements! <a href="#">
        And Privacy Police.
      </a>
      </Text>
      <Button type="button">Sign Up</Button>
      <span style={{ marginTop: '15px' }}>Already have an account?</span>
      <a href="#">Sign in!</a>
      <br />
      <br />
      <br />
      <br />
    </Container>
  )
}

export default Grid
