import React, { useState } from 'react';
import { Box, Container, Grid, Typography, IconButton, Breadcrumbs, Link } from '@mui/material';
import { ArrowBack as ArrowBackIcon, Home as HomeIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import FileUploadArea from '../components/resume/FileUploadArea';
import SuggestionsPanel from '../components/resume/SuggestionsPanel';

const ResumeTailoring: React.FC = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescFile, setJobDescFile] = useState<File | null>(null);

  const handleFilesUploaded = (newResumeFile: File | null, newJobDescFile: File | null) => {
    setResumeFile(newResumeFile);
    setJobDescFile(newJobDescFile);
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
              <Typography color="text.primary">Resume Tailoring</Typography>
            </Breadcrumbs>
            
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
              Resume Tailoring
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Upload your resume and job description to get AI-powered suggestions for optimization
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <FileUploadArea onFilesUploaded={handleFilesUploaded} />
          </Grid>
          <Grid item xs={12} md={7}>
            <SuggestionsPanel resumeFile={resumeFile} jobDescFile={jobDescFile} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ResumeTailoring; 