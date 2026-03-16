import { useNavigate } from 'react-router-dom'

function Third() {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1>Third Page</h1>
      <p>You navigated to the third page.</p>
      <button onClick={() => navigate('/second')}>Previous</button>
    </div>
  )
}

export default Third
