import './App.css';
import Customer from './components/Customer';
import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    orveflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '이은호',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any',
    'name': '양화섭',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>프로필</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>성별</TableCell>
                  <TableCell>직업</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {
                customers.map(c => {
                  return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                    />
                  );
                })
              }
            </TableBody>
          </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
