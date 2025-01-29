import { useLocation } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';

export default function Result() {
  const { state } = useLocation();
  
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Calculation Result
        </Typography>
        <Typography variant="h2" color="red" sx={{ my: 4 }}>
          ₹ {state?.result || 0}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Monthly Alimony Recommendation
        </Typography>
        <Button 
          variant="outlined" 
          onClick={() => window.history.back()}
        >
          Recalculate
        </Button>
      </Box>
    </Container>
  );
  // Add this before the closing Container
<Box sx={{ mt: 4 }}>
  <Typography variant="body2">
    Legal References: 
    <a href="https://thelegalshots.com/..." target="_blank">Source 1</a> | 
    <a href="https://drive.google.com/..." target="_blank">Source 2</a>
  </Typography>
</Box>
}