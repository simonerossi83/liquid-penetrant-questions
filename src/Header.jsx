import {Box, AppBar, Toolbar, Typography} from '@mui/material';
import React from 'react';

export function Header(){
	return (
	<Box sx={{ flexGrow: 1 }}>
		<AppBar position="static">
		<Toolbar>
			<Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
				Marco Arrigoni
			</Typography>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="right">
				Esame di liquidi penetranti - Livello 2
			</Typography>
		</Toolbar>
		</AppBar>
	</Box>
	)
  }