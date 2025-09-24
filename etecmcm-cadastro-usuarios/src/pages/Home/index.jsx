import { useEffect } from 'react';
import './style.css'
import Lixeira from '../../assets/lixeira.svg'
import api from '../../services/api';



function Home() {
  let usuarios = []

  async function getUsuarios() {
    usuarios = await api.get('/cadastro')
    //console.log(usuarios)
  }

  useEffect(()=>{
    getUsuarios()
  },[])




  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' />
        <input name='idade' type='number' />
        <input name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>
      
      {usuarios.map(usuario => (
  <div key={usuario.id} className="card">
    <div>
      <p>Nome: {usuario.nome}</p>
      <p>Idade: {usuario.idade}</p>
      <p>Email: {usuario.email}</p>
    </div>
     <button>
      <img src={Lixeira} />
    </button>
  </div>
))}
</div>

  );
}

export default Home
