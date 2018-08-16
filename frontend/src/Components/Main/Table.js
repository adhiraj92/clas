import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    borderRadius: 0,
    boxShadow: 'none',
    borderTopWidth: 8,
    marginLeft: 12,
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, department, email, asurite, dateadded, action) {
  id += 1;
  return { id, name, department, email, asurite, dateadded, action };
}

const rows = [
  createData('Robert Bruce', 'College of Liberal Arts and Sciences', 'rbruce2@gmail.com', 'rbruce2', '08/05/2018 10:43AM', 'Edit'),
  createData('Gabriel Martinez', 'College of Liberal Arts and Sciences', 'gmarti41@gmail.com', 'gmarti41', '08/05/2018 10:43AM', 'Edit'),
  createData('Adhiraj Tikku', 'College of Liberal Arts and Sciences', 'adhiraj.192@gmail.com', 'atikku1', '08/05/2018 10:43AM', 'Edit'),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Department</CustomTableCell>
            <CustomTableCell>Email</CustomTableCell>
            <CustomTableCell>ASURITE</CustomTableCell>
            <CustomTableCell>Date Added</CustomTableCell>
            <CustomTableCell>Action</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell>{row.department}</CustomTableCell>
                <CustomTableCell>{row.email}</CustomTableCell>
                <CustomTableCell>{row.asurite}</CustomTableCell>
                <CustomTableCell>{row.dateadded}</CustomTableCell>
                <CustomTableCell>{row.action}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
