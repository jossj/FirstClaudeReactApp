import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1>Hello, World!</h1>
      <p>Welcome to my first React app.</p>
      <button onClick={() => navigate('/second')}>Next</button>
    </div>
  )
}

export default Home
