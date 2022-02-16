import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React from 'react';
import PropTypes from "prop-types";

export function Results(props){
	
	const specificPercentage = Math.floor(props.specificPoints / props.maxSpecificQuestions * 100);

	return(
	<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell align="center">Risposte corrette</TableCell>
            <TableCell align="center">Percentuale</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
			<TableRow>
				<TableCell align="left">Esame generale</TableCell>
                <TableCell align="center">-</TableCell>
				<TableCell align="center">-</TableCell>
			</TableRow>
			<TableRow>
				<TableCell align="left">Esame specifico</TableCell>
                <TableCell align="center">{props.specificPoints}</TableCell>
				<TableCell align="center">{specificPercentage} %</TableCell>
			</TableRow>
        </TableBody>
      </Table>
    </TableContainer>
	)
}

Results.propTypes = {
    maxSpecificQuestions: PropTypes.number,
	specificPoints: PropTypes.number
};