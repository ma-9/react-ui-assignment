"use client"
import React from 'react';
import { Box, Button, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { NavigationBar } from '@/app/components';

import Stylings from './page.module.css';
import { useAppSelector } from '@/app/hooks';
import { selectUsers } from '@/app/slices';

const fakeRoles = [
  { roleKey: 'admin', roleLabel: 'Admin' },
  { roleKey: 'support', roleLabel: 'Support' },
  { roleKey: 'sales', roleLabel: 'Sales' },
];

function RolesListing() {
  const [hydrated, setHydrated] = React.useState(false);
  // const users = useAppSelector(selectUsers);

	React.useEffect(() => {
		setHydrated(true);
	}, []);

	if (!hydrated) {
		return null;
	}

  // console.log("🚀 ~ file: page.tsx:40 ~ RolesListing ~ users:", users)

  return (
    <Box sx={{ p: 3 }}>
      <NavigationBar />
      <Toolbar />
      <div className={Stylings.headerContainer}>
        <Typography variant="h5" component="h3">Roles</Typography>
        <Button variant="contained">
          <AddIcon />&nbsp;Add
        </Button>
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Role Label</TableCell>
              <TableCell align="right">Role Key</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fakeRoles.map((role) => (
              <TableRow
                key={role.roleKey}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {role.roleLabel}
                </TableCell>
                <TableCell align="right">{role.roleKey}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default RolesListing;