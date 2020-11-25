import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';


function createData(name, ticker, price) {
  return { name, ticker, price};
}

const rows = [
  createData('3M', "MMM", 1111.11),
  createData('American Express', "AXP", 2222.22),
  createData('Amgen', "AMGN", 3333.33),
  createData('Apple Inc.', "AAPL", 4444.44),
  createData('Boeing', "BA", 5555.55),
  createData('Catepillar', "CAT", 6666.66),
  createData('Chevron', "CVX", 7777.77),
  createData('Cisco Systems', "CSCO", 8888.88),
  createData('The Coca-Cola Company', "KO", 9999.99),
  createData('Dow Inc.', "DOW", 1010.10),
  createData('Goldman Sachs', "GS", 1111.11),
  createData('The Home Depot', "HD", 1212.12),
  createData('Honeywell', "HON", 1313.13),
  createData('IBM', "IBM", 1414.14),
  createData('Intel', "INTC", 1515.15),
  createData('Johnson & Johnson', "JNJ", 1616.16),
  createData('JPMorgan Chase', "JPM", 1717.17),
  createData('McDonalds', "MCD", 1818.18),
  createData('Merck & Co.', "MRK", 1919.19),
  createData('Microsoft', "MSFT", 2020.20),
  createData('NIKE', "NKE", 2121.21),
  createData('Proctor & Gamble', "PG", 2222.22),
  createData('Salesforce', "CRM", 2323.23),
  createData('Travelers', "TRV", 2424.24),
  createData('United Health Group', "UNH", 2525.25),
  createData('Verizon', "VZ", 2626.26),
  createData('Visa', "V", 2727.27),
  createData('Walmart', "WMT", 2828.28),
  createData('Walgreens Boots Alliance', "WBA", 2929.29),
  createData('Disney', "DIS", 3030.30),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Ticker</TableCell>
            <TableCell align="right">Price&nbsp;($)</TableCell>
            <TableCell align="right">Buy</TableCell>
            <TableCell align="right">Sell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.ticker}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><button label="Buy" primary={true} onClick={()=>{console.log("!23")}}/></TableCell>
              <TableCell align="right"><button label="Sell" primary={true} onClick={()=>{console.log("!23")}}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
