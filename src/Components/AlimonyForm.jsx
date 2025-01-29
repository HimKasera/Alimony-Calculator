import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  TextField, 
  Button,
  FormLabel
} from '@mui/material';

export default function AlimonyForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    side: 'bride',
    petitionerIncome: '',
    respondentIncome: '',
    jointProperty: '',
    marriageYear: new Date().getFullYear(),
    marriageExpenses: '',
    dependents: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateAlimony();
    navigate('/result', { state: { result } });
  };

  const calculateAlimony = () => {
    const base = Math.max(
      (formData.respondentIncome * 0.2), 
      (formData.respondentIncome - formData.petitionerIncome) * 0.3
    );
    const propertyFactor = formData.jointProperty * 0.1;
    const yearsFactor = (new Date().getFullYear() - formData.marriageYear) * 0.05;
    
    return Math.min(
      base + propertyFactor + yearsFactor,
      formData.respondentIncome * 0.4
    ).toFixed(2);
  };

  const [buttonColor, setButtonColor] = useState('primary');

  const handleButtonClick = () => {
    setButtonColor('secondary');
  };

  return (
    <Container maxWidth="md" className='border border-black dark:border-gray-800 p-4'>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          ALMIMONY CALCULATOR 
        </Typography>

        <FormLabel component="legend">Representing</FormLabel>
        <RadioGroup 
          row 
          value={formData.side}
          onChange={(e) => setFormData({...formData, side: e.target.value})}
        >
          <FormControlLabel value="bride" control={<Radio />} label="Bride Side" />
          <FormControlLabel value="groom" control={<Radio />} label="Groom Side" />
        </RadioGroup>

        <TextField
          fullWidth
          margin="normal"
          label="Petitioner's Monthly Income (₹)"
          type="number"
          value={formData.petitionerIncome}
          onChange={(e) => setFormData({...formData, petitionerIncome: e.target.value})}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Respondent's Monthly Income (₹)"
          type="number"
          value={formData.respondentIncome}
          onChange={(e) => setFormData({...formData, respondentIncome: e.target.value})}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Joint Property Value (₹)"
          color='primary'
          type="number"
          value={formData.jointProperty}
          onChange={(e) => setFormData({...formData, jointProperty: e.target.value})}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Year of Marriage"
          type="number"
          value={formData.marriageYear}
          onChange={(e) => setFormData({...formData, marriageYear: e.target.value})}
        />

        <Button 
          type="submit" 
          variant="contained" 
          size="large" 
          color={buttonColor}
          onClick={handleButtonClick}
          sx={{ mt: 3 }}
        >
          Calculate
        </Button>
      </Box>
    </Container>
  );
}