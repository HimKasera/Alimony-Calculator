import { Box, Typography, Link } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60); // Update every hour to catch year changes
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ 
      mt: 4, 
      py: 3, 
      bgcolor: 'rgba(255, 255, 255, 0.8)', 
      textAlign: 'center',
      backdropFilter: 'blur(4px)'
    }}>
      <Typography variant="body2" color="textSecondary">
        Legal References:
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
        <Link href="https://thelegalshots.com/blog/alimony-in-india-how-the-supreme-court-defines-maintenance-and-compensation/" 
              target="_blank" rel="noopener noreferrer">
          Supreme Court Guidelines
        </Link>
        <Link href="https://lawcrust.com/divorce-alimony-in-mumbai/#:~:text=Under%20the%20Hindu%20Marriage%20Act,with%20permanent%20alimony%20and%20maintenance." 
              target="_blank" rel="noopener noreferrer">
          Mumbai Alimony Provisions
        </Link>
        <Link href="https://drive.google.com/file/d/1YDeQSS9xbR3RdqmyVMo533rrJ3l9vg6R/view" 
              target="_blank" rel="noopener noreferrer">
          Legal Document 1
        </Link>
        <Link href="https://drive.google.com/file/d/1LxCgOTyLxVM4mby8J5UHWqIrPTJJY7eX/view" 
              target="_blank" rel="noopener noreferrer">
          Legal Document 2
        </Link>
        <Link href="https://drive.google.com/file/d/1uMGwFgZJktR4nsl83VNRn4iVaLqdgbD7/view" 
              target="_blank" rel="noopener noreferrer">
          Legal Document 3
        </Link>
      </Box>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
        © {currentYear} Alimony Calculator. Developed by 
        <span style={{ fontWeight: 600, color: '#2c3e50', marginLeft: 4 }}>
          Himanshu Kasera
        </span>
        <Typography variant="body2" color="textSecondary">
          The developer is not responsible for decisions made using this tool.
        </Typography>
      </Typography>
    </Box>
  );
}