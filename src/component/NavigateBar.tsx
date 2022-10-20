import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavigateBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate(1)}>next</button>
    </div>
  );
}

export default NavigateBar