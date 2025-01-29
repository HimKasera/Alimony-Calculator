import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', paddingTop: '5vh' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Alimony Calculator
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', gap: 4, justifyContent: 'center' }}>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate('/alimony')}
          >
            Calculate Alimony
          </Button>
        </Box>
      </Box>
    </Container>
  );
}