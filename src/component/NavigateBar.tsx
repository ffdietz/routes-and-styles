import { Button, Container} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function NavigateBar() {
  const navigate = useNavigate();

  return (
    <Container centerContent flexDirection="row" marginTop="5px">
      <Button marginRight="3px"onClick={() => navigate(-1)}>back</Button>
      <Button onClick={() => navigate(1)}>next</Button>
    </Container>
  );
}

export default NavigateBar;
