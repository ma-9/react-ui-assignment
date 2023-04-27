"use client"
import React, { useEffect } from 'react';
import { Box, Toolbar } from '@mui/material';

import { NavigationBar } from './components';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.push('/pages/user_listing')
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <NavigationBar />
      <Toolbar />
    </Box>
  )
}
