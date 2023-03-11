import { useParams } from 'react-router-dom'

function Login() {
  const { number } = useParams()
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {number}</h2>
    </div>
  )
}

export default Login
