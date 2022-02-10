import {Box, AppBar, Toolbar, Typography} from '@mui/material';

export function Header(){
	return (
	 <Box sx={{ flexGrow: 1 }}>
		<AppBar position="static">
		  <Toolbar>
			 <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
			  Marco Arrigoni
			</Typography>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="right">
			  Domande di verifica per liquidi penetranti
			</Typography>
		  </Toolbar>
		</AppBar>
	  </Box>
	)
  }