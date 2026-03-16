import { useNavigate } from 'react-router-dom'

function Fourth() {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1>Fourth Page</h1>
      <p>You navigated to the fourth page.</p>
      <button onClick={() => navigate('/third')}>Previous</button>
    </div>
  )
}

export default Fourth
