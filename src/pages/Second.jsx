import { useNavigate } from 'react-router-dom'

function Second() {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1>Second Page</h1>
      <p>You navigated to the second page.</p>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  )
}

export default Second
