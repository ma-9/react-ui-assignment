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

const fakeUsers = [
  { email: 'john@devforge.tech', mobile: 491023023, name: 'John Doe', password: 'adqwefa2wefs', roleKey: 'admin', username: 'john07' },
  { email: 'travis@devforge.tech', mobile: 491023023, name: 'travis Doe', password: 'adqwefa2wefs', roleKey: 'support', username: 'travis07' },
  { email: 'julien@devforge.tech', mobile: 491023023, name: 'julien Doe', password: 'adqwefa2wefs', roleKey: 'sales', username: 'julien07' },
  { email: 'Franklin@devforge.tech', mobile: 491023023, name: 'Franklin Doe', password: 'adqwefa2wefs', roleKey: 'sales', username: 'Franklin07' },
];

function UsersListing() {
  const [hydrated, setHydrated] = React.useState(false);
  // const users = useAppSelector(selectUsers);

	React.useEffect(() => {
		setHydrated(true);
	}, []);

	if (!hydrated) {
		return null;
	}

  // console.log("🚀 ~ file: page.tsx:40 ~ UsersListing ~ users:", users)

  return (
    <Box sx={{ p: 3 }}>
      <NavigationBar />
      <Toolbar />
      <div className={Stylings.headerContainer}>
        <Typography variant="h5" component="h3">Users</Typography>
        <Button variant="contained">
          <AddIcon />&nbsp;Add
        </Button>
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Email Address</TableCell>
              <TableCell align="right">Mobile</TableCell>
              <TableCell align="right">Role Key</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fakeUsers.map((user) => (
              <TableRow
                key={user.email}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.mobile}</TableCell>
                <TableCell align="right">{user.roleKey}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default UsersListing;