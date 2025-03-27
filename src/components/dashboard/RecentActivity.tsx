import React from 'react';
import { 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Divider
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import MicIcon from '@mui/icons-material/Mic';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

// In a real app, this would come from an API call or database
const recentActivities = [
  {
    id: 1,
    type: 'resume',
    description: 'Resume Tailored: Software Developer at TechCorp',
    date: 'June 10, 2023',
    icon: <DescriptionIcon color="primary" />,
  },
  {
    id: 2,
    type: 'interview',
    description: 'Mock Interview: Frontend Developer',
    date: 'June 8, 2023',
    icon: <MicIcon color="primary" />,
  },
  {
    id: 3,
    type: 'chatbot',
    description: 'Chatbot Session: Behavioral Interview Questions',
    date: 'June 5, 2023',
    icon: <ChatIcon color="primary" />,
  },
  {
    id: 4,
    type: 'application',
    description: 'Application Submitted: UX Designer at DesignCo',
    date: 'June 3, 2023',
    icon: <BusinessCenterIcon color="primary" />,
  },
];

const RecentActivity: React.FC = () => {
  return (
    <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" sx={{fontSize: '35px'}}>
        Recent Activity
      </Typography>
      <List>
        {recentActivities.map((activity, index) => (
          <React.Fragment key={activity.id}>
            {index > 0 && <Divider component="li" />}
            <ListItem sx={{ py: 1.5 }}>
              <ListItemIcon>{activity.icon}</ListItemIcon>
              <ListItemText
                primary={activity.description}
                secondary={activity.date}
                primaryTypographyProps={{fontWeight: 'medium', fontSize:'20px'}}
                secondaryTypographyProps={{fontSize:'18px'}}
              />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default RecentActivity; 