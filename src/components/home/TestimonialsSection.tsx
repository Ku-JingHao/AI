import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    content:
      'The AI Resume Assistant helped me tailor my resume for different job applications, which significantly increased my interview callback rate.',
    avatar: 'S',
  },
  {
    name: 'Michael Chen',
    role: 'Data Scientist',
    content:
      'The mock interview feature was a game-changer for me. I practiced multiple times and felt confident during my actual interviews.',
    avatar: 'M',
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    content:
      'I used the application tracking feature to keep organized during my job search. It helped me follow up at the right times and land my dream job.',
    avatar: 'E',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'grey.100' }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Success Stories
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  pt: 3,
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    color: 'primary.light',
                    opacity: 0.3,
                    fontSize: 40,
                  }}
                >
                  <FormatQuoteIcon fontSize="inherit" />
                </Box>
                <CardContent sx={{ pt: 2, flexGrow: 1 }}>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
                    "{testimonial.content}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 56,
                        height: 56,
                        mr: 2,
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" component="div">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection; 