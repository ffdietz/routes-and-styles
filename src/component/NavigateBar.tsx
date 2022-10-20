import { useNavigate } from 'react-router-dom';

function NavigateBar() {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        back
      </button>
      <button type="button" onClick={() => navigate(1)}>
        next
      </button>
    </div>
  );
}

export default NavigateBar;
