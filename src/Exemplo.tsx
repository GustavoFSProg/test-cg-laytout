import { Link } from 'react-router-dom'
import './exemplo.css'

function Exemplo() {
  return (
    <>
      <Link to="/">App</Link>
      <br />
      <br />
      <br />
      
   <div className="label-float">
  <input type="text" placeholder=" "/>
  <label>Telefone</label>
</div>
<br/>
<div className="label-float">
  <input type="text" placeholder=" " required/>
  <label>Nome de Usuário</label>
</div>
    </>
  )
}

export default Exemplo
