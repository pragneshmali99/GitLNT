import React, { Component } from 'react';
import './SidebarLNT.css';
import * as firebase from 'firebase';
// import SideBar from 'react-fixed-sidebar';
// import SideMenu from 'react-sidemenu';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddUserForm from './AddUserForm';
import UserList from './UserList';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));




class SidebarLNT extends React.Component {
// function SidebarLNT() {
  constructor(props) {
    super(props);
      this.state = {
        redirect: 'adduser',
      }
  
  }


// const classes = useStyles();
  render () {
    return (
      <Router>
      <div className={useStyles.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        className={useStyles.drawer}
        variant="permanent"
        classes={{
          paper: useStyles.drawerPaper,
        }}
        anchor="left"
      >
        <div className={useStyles.toolbar} />
       
        <Divider />
        <List>
          {/* {['Add User', 'User List  '].map((text, index) => (
            <ListItem button key={text} >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}

            <ListItem button key='adduser' onClick={()=>{this.setState({redirect:"adduser"})}}> 
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Add User' />
            </ListItem>
            <ListItem button key='userlist' onClick={()=>{this.setState({redirect:"userlist"})}}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='User List' />
            </ListItem>
           
        </List>
        
        {/* <Link className="menu-item" to="/" >Add User </Link>
        <Link className="menu-item" to="/userlist" >UserList</Link> */}

        
       
        <Divider />
       
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      {/* <div className={useStyles.toolbar} /> */}
      <main className={useStyles.content}>
        {this.state.redirect=="adduser" &&
        <AddUserForm />
        }
        {this.state.redirect=="userlist" &&
        <UserList />
        }
      {/* <Switch>
          <Route
              component={AddUserForm}
              exact
              path="/" />

          <Route
              component={UserList}
              exact
              path="/userlist" />
        </Switch> */}
        
        {/* <div className={classes.toolbar} /> */}
      
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </main>
    </div>
    </Router>
      
    );
  }
  }
  export default SidebarLNT;
  // export default SidebarLNT;