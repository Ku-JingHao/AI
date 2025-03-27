import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import MicIcon from '@mui/icons-material/Mic';
import ChatIcon from '@mui/icons-material/Chat';
import QuickAccessCard from './QuickAccessCard';
import RecentActivity from './RecentActivity';

const quickAccessItems = [
  {
    title: 'Resume Tailoring',
    description: 'Optimize your resume for job applications using AI-powered suggestions.',
    icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
    buttonText: 'Get Started',
    linkTo: '/resume',
  },
  {
    title: 'Mock Interviews',
    description: 'Practice interviews with our AI interviewer and receive feedback on your responses.',
    icon: <MicIcon sx={{ fontSize: 40 }} />,
    buttonText: 'Start Interview',
    linkTo: '/mock-interview',
  },
  {
    title: 'Interview Chatbot',
    description: 'Get tips and answers to common interview questions from our AI chatbot.',
    icon: <ChatIcon sx={{ fontSize: 40 }} />,
    buttonText: 'Chat Now',
    linkTo: '/chat',
  },
];

const DashboardContent: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, py: 4, px: { xs: 2, md: 4 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" sx={{fontSize:'35px'}}>
          Dashboard
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph sx={{fontSize:'25px'}}>
          Welcome back, John!
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {quickAccessItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <QuickAccessCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                buttonText={item.buttonText}
                linkTo={item.linkTo}
              />
            </Grid>
          ))}
        </Grid>

        <RecentActivity />
      </Container>
    </Box>
  );
};

export default DashboardContent; 