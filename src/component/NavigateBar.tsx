import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function NavigateBar() {
  const navigate = useNavigate();

  return (
    <>
      <Button margin="20px" onClick={() => navigate(-1)}>
        back
      </Button>
      <Button onClick={() => navigate(1)}>
        next
      </Button>
    </>
  );
}

export default NavigateBar;
