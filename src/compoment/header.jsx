import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem, Avatar, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { deepOrange } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LogoImage from '../assets/images/HHT.png'; // Thay thế bằng đường dẫn thực tế của hình ảnh logo

function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(null);

  const [user, setUser] = useState({
    name: 'John Doe',
    avatarUrl: '../assets/images/HHT.png', // Thay thế bằng URL hình ảnh của người dùng
  });
             //ấn vào hiện menu
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuOpen(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuOpen(null);
  };

  return (
    <div>
        
      <AppBar position="static"
      sx={{backgroundColor:'#F09824'}}
      >
      
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', gap: 47 }}>
        <Typography sx={{height:'130px'}} >
        <IconButton 
            
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, mt:'-115px' }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
            </IconButton>
        <img src={LogoImage} alt="Logo" style={{ width: '130px', marginRight: '10px', height:'130px' }} />
         
        </Typography>
      

          <div sx={{gap: 6}}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Menu</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
           
          </div>
          <div>
          <Button color="inherit" onClick={handleUserMenuOpen}>
           <Avatar sx={{ bgcolor: deepOrange[500], ml: 1 }}>{/* Thêm màu nền và kích thước cho Avatar */}
           
           </Avatar>
             
            </Button>
            <Menu
              anchorEl={userMenuOpen}
              open={Boolean(userMenuOpen)}
              onClose={handleUserMenuClose}
            >
                <MenuItem onClick={handleUserMenuClose}>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="small" />
                </ListItemIcon> {user.name}</MenuItem>
              <MenuItem onClick={handleUserMenuClose}>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="small" />
                </ListItemIcon>Profile</MenuItem>
              <MenuItem onClick={handleUserMenuClose}>
                <ListItemIcon>
                  <ExitToAppIcon fontSize="small" />
                </ListItemIcon>Logout</MenuItem>
            </Menu>
          </div>
           
        </Toolbar>
        
      </AppBar>

      {/* Drawer */}
      {/* <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button  onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Menu" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer> */}
    </div>
  );
}

export default Header;
