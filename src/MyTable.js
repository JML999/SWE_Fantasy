import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function createData(rank, username, pnl) {
  return { rank, username, pnl};
}

const rows = [
  createData('1', "Mochi", 10200),
  createData('2', "Justin123", 8900),
  createData('4', "SammyT2", 8120),
  createData('5', "Kaplan6", 7980),
  createData('6', "Swift4", 7900),
  createData('7', "Harden1", 7800),
  createData('8', "Durant4", 7765),
  createData('9', "James1", 7755),
  createData('10', "Westbrook22", 7722),
  createData('11', "Frank11", 7700),
  createData('12', "Stein1", 7500),
  createData('13', "Jimmy2", 7450),
  createData('14', "Time1", 7400),
  createData('15', "Jamie", 7200),
  createData('16', "Stafford9", 7100),
  createData('17', "Greene8", 7004),
  createData('18', "Edwards11", 6145),
  createData('19', "Gannis33", 5332),
  createData('20', "Young11", 5017),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Profit/Loss&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.rank}>
              <TableCell component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.pnl}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
