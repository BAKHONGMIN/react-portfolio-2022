import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer.js';
import CustomerAdd from './components/CustomerAdd';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/Tablebody';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from "@material-ui/core/InputBase";
import { fade } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Logo from './img/2020 RIAHN.png';


const styles = theme => ({
  root: {
    width: "100%",
    minWidth: 1080,
  },
  menu: {
    margin: 20,
    display: "flex",
    justifyContent: "flex-end",
  },
  paper: {
    marginLeft: 18,
    marginRight: 18,
  },
  table: {
    minWidth: 1080,
  },
  TableHead: {
    fontSize: "1.5rem",
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuIcon: {
    fontSize: "5rem",
    color: "#686868",
    display: "inline-block",
    margin: 5,
  },
  mainButton: {
    display: "inline-block",
    width: "300px",
  },
  mainButtonTypo: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#686868",
  },
  mainButtonGrid: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: 20,
  },
  mainBG: {
    // backgroundColor: "blue",
    padding: 70,
  },
  title: {
    marginLeft: 5,
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  TypoBot: {
    marginBottom: 20,
  },
  homeIcon: {
    fontSize: "2.5rem",
    color: "white",
  },





});


class App12 extends Component {


  constructor(props){
    super(props);
    this.state={
      customers:'',
      completed:0,
      searchKeyword:''
    }
  }

  stateRefresh = () => {
    this.setState({
      customers:'',
      completed:0,
      searchKeyword:''
    });
    this.callApi()
    .then(res => this.setState({customers : res}))
    .catch(err => console.log(err));
  }


  componentDidMount() {//모든 component가 마운트가 되면 실행됨
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({completed: completed >= 100 ? 0 : completed + 1});
  }

  handleValueChange =(e)=>{
    let nextState ={};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }



  render(){

    const filteredComponents = (data) => {
      data = data.filter((c) => {
        return c.name.indexOf(this.state.searchKeyword) > -1;
      });
      return data.map((c) => {
        return <Customer
        stateRefresh={this.stateRefresh}
        key={c.id}
        id={c.id}
        image={c.image}
        name={c.name}
        birthday={c.birthday}
        gender={c.gender}
        job={c.job}
      />
      });
    }

    const {classes} = this.props;
    const cellList = ["번호","프로필 이미지","이름","생년월일","성별","직업","설정"];
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              {/* <MenuIcon /> */}
              <h2 className='logo'><img src={Logo} alt='logo' width="300px"/></h2>
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              고객 관리 시스템
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="검색하기"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                name="searchKeyword"
                value={this.state.searchKeyword}
                onChange={this.handleValueChange}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.menu}>
        <CustomerAdd stateRefresh={this.stateRefresh} />
        </div>


        <Paper className={classes.paper}>
            <Table className={classes.Table}>
              <TableHead>
                <TableRow>
                  {cellList.map(c => {
                    return <TableCell className={classes.tableHead}>{c}</TableCell>
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.customers ? filteredComponents(this.state.customers) :
                <TableRow>
                  <TableCell colSpan="6" align='center'>
                    <CircularProgress color="secondary" className={classes.progress} />
                  </TableCell>
                </TableRow>
                }
              </TableBody>
            </Table>
        </Paper>
        
      </div>
    );
  }
}

export default withStyles(styles)(App12); //App에 props로 전달