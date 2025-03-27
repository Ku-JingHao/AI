import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
  Divider,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import loginIllustration from '../../assets/images/login-illustration.png';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since this is a static website without a database, 
    // we'll navigate to the Dashboard page directly
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: 'calc(100vh - 64px)', // Subtract header height
        bgcolor: 'grey.100',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          display: 'flex',
          width: '100%',
          maxWidth: 1000,
          minHeight: 600,
          margin: 'auto',
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        {/* Left side - image and content */}
        <Box
          sx={{
            flex: 1,
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 4,
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            AI Resume Assistant
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Your AI-powered job application companion
          </Typography>
          <Box
            component="img"
            src={loginIllustration}
            alt="Login Illustration"
            sx={{
              width: '80%',
              maxWidth: 300,
              mb: 3,
            }}
          />
          <Typography>
            {isLogin
              ? "Don't have an account yet? Join thousands of job seekers who have improved their applications."
              : 'Already have an account? Log in to continue your job search journey.'}
          </Typography>
        </Box>

        {/* Right side - form */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 4,
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            {isLogin ? 'Login to Your Account' : 'Create an Account'}
          </Typography>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                margin="normal"
                required
                sx={{ mb: 2 }}
              />
            )}

            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              type="email"
              margin="normal"
              required
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              required
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {!isLogin && (
              <TextField
                fullWidth
                label="Confirm Password"
                variant="outlined"
                type={showConfirmPassword ? 'text' : 'password'}
                margin="normal"
                required
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}

            {isLogin && (
              <Box sx={{ textAlign: 'right', mb: 2 }}>
                <Link component={RouterLink} to="/forgot-password" variant="body2">
                  Forgot Password?
                </Link>
              </Box>
            )}

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              sx={{ mt: 2, py: 1.5 }}
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>

            {isLogin && (
              <>
                <Divider sx={{ my: 3 }}>OR</Divider>
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/dashboard')}
                  sx={{ mb: 3, py: 1.5 }}
                >
                  Login with Azure AD
                </Button>
              </>
            )}

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <Link
                  component="button"
                  variant="body2"
                  onClick={toggleForm}
                  sx={{ fontWeight: 'bold' }}
                >
                  {isLogin ? 'Sign Up' : 'Login'}
                </Link>
              </Typography>
            </Box>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default AuthForm; 