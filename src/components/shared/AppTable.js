import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    minWidth: '40px',
    maxWidth: '60px',
  },
  firstPlace: { backgroundColor: '#F6EE07' },
  secondPlace: { backgroundColor: '#D4D3CA' },
  thirdPlace: { backgroundColor: '#ECA244' },
});

const AppTable = ({ rows, columns }) => {
  const classes = useStyles();

  const getRowStyle = (index) => {
    switch (index) {
      case 0:
        return classes.firstPlace;
      case 1:
        return classes.secondPlace;
      case 2:
        return classes.thirdPlace;
      default:
        break;
    }
  };

  return (
    <Box display="flex" aligncontent="center" m={1}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              {columns.map((column) => (
                <TableCell key={column.key}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow className={getRowStyle(index)} key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                {columns.map((column) => (
                  <TableCell key={`${column.key}-${index}`}>
                    {row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

AppTable.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
};

export default AppTable;
