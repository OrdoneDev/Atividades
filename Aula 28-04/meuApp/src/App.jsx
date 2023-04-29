import './App.css'
import ButtonFatec from './components/BotaoFatec'
import InputCustom from './components/InputCustom'

function App() {
  const msg = 'Informe os teus dados:'

  return (
    <>
      <p>
        {msg}
      </p>
      <hr />
      <InputCustom type="text" placeholder="Nome" /> <br />
      <InputCustom type="email" placeholder="Email" /> <br />
      <InputCustom type="tel" placeholder="Telefone" /> <br />
      <hr />
      <ButtonFatec type="button" label="Enviar"/>
    </>
  )
}

export default App
