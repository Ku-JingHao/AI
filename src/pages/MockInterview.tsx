import React, { useState } from 'react';
import { Box, Container, Grid, Typography, IconButton, Breadcrumbs, Link } from '@mui/material';
import { ArrowBack as ArrowBackIcon, Home as HomeIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import InterviewPanel from '../components/interview/InterviewPanel';
import FeedbackPanel from '../components/interview/FeedbackPanel';

const MockInterview: React.FC = () => {
  const [transcription, setTranscription] = useState('');
  const [isInterviewActive, setIsInterviewActive] = useState(false);

  const handleTranscriptionUpdate = (text: string) => {
    setTranscription(text);
    setIsInterviewActive(true);
  };

  const handleInterviewEnd = () => {
    setIsInterviewActive(false);
  };

  return (
    <Box sx={{ flexGrow: 1, py: 4, px: { xs: 2, md: 4 } }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
          <IconButton 
            component={RouterLink} 
            to="/dashboard" 
            color="primary" 
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          
          <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 1 }}>
              <Link 
                component={RouterLink} 
                to="/"
                color="inherit"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/dashboard"
                color="inherit"
              >
                Dashboard
              </Link>
              <Typography color="text.primary">Mock Interview</Typography>
            </Breadcrumbs>
            
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
              Mock Interview
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Practice with AI-powered interviews and get instant feedback on your performance
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <InterviewPanel onTranscriptionUpdate={handleTranscriptionUpdate} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FeedbackPanel 
              transcription={transcription} 
              isInterviewActive={isInterviewActive} 
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MockInterview; 