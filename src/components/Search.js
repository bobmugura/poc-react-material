import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, FormControl, InputLabel, Select, MenuItem, IconButton, TextField, TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  searchBar: {
    marginTop: theme.spacing(3),
    minWidth: 700
  },
  searchIcon: {
    marginTop: theme.spacing(3),
  },
  table: {
    // marginTop: theme.spacing(0),
    // marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(5),
    minWidth: 300,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Search() {

  const classes = useStyles();
  const [searchOption, setSearchOption] = React.useState('');
  const [showTable, setShowTable] = React.useState('');

  const handleChange = (e) => {
    setSearchOption(e.target.value);
  }

  const handleSearch = () => {
    setShowTable(true);
  }

  return (
    <div>
    <Paper elevation={3} style={{margin: 10, padding: 10}}>
      <form>
        <FormControl variant="outlined" required className={classes.formControl}>
          <InputLabel id="search-by">Search By</InputLabel>
          <Select
            labelId="search-by"
            id="search-by"
            value={searchOption}
            onChange={handleChange}
            className={classes.selectEmpty}
          >
            <MenuItem value={'userid'}>User Id</MenuItem>
            <MenuItem value={'walletid'}>Wallet Id</MenuItem>
            <MenuItem value={'phone'}>Phone Number</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" required >
          <TextField id="outlined-basic" label="Search For" variant="outlined" className={classes.searchBar} />
        </FormControl>
        <IconButton aria-label="search" color="primary" className={classes.searchIcon} onClick={handleSearch}>
          <SearchIcon fontSize="large" />
        </IconButton>
      </form>
      </Paper>
      { showTable &&
        <TableContainer component={Paper} className={classes.searchIcon}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      }
      </div>
  )
}