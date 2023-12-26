import React, { useState } from 'react';
import { List, ListItem, Collapse } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Navbar = () => {
  const [showCombo, setShowCombo] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showProfit, setShowProfit] = useState(false);
  const [showStorge, setshowStorge] = useState(false);

  const toggleCombo = () => {
    setShowCombo(!showCombo);
  };

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  const toggleProfit = () => {
    setShowProfit(!showProfit);
  };
  const toggleStorge = () => {
    setshowStorge(!showStorge);
  };

  return (
    <nav className="admin-navbar" style={{ height: '100%' }}>
      <List
      sx={{
        width: '15%',
        background:"brown",
        borderRadius:'15px',
        fontSize:'30px',
        height: '100%',
        padding:'20px',
        color:'black'
      }}
      >
        <ListItem
          
          onClick={toggleCombo}
          sx={{
            gap:2,
            marginBottom: '20px',
            marginTop: '20px',
            borderBottom: '5px solid #b15214',
            paddingBottom: '10px',
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              animation: 'changeColor 0.4s ease forwards',
              background: 'linear-gradient(to right, #F09824,#F09824)',
            },
          }}
        >
        <RestaurantMenuIcon/>
          Combo
        </ListItem>
        <Collapse in={showCombo}>
          <List component="div" disablePadding>
            <ListItem
              
              sx={{
                gap:2,
                paddingLeft: '50px',
                marginBottom: '20px',
                marginTop: '20px',
                borderRadius: '10px',
                '&:hover': {
                  animation: 'changeColor 0.4s ease forwards',
                  background: 'linear-gradient(to right, #F09824,#F09824)',
                },
              }}
            >
              <BorderAllIcon/>
              <a href="/admin/Combo/all" style={{ textDecoration: 'none', color: 'White' }}>
                All Combo
              </a>
            </ListItem>
            <ListItem
              
              sx={{
                gap:2,
                paddingLeft: '50px',
                marginBottom: '20px',
                borderRadius: '10px',
                '&:hover': {
                  animation: 'changeColor 0.4s ease forwards',
                  background: 'linear-gradient(to right, #F09824,#F09824)',
                },
              }}
            >
              <AddCircleIcon/>
              <a href="/admin/Combo/addcombo" style={{ textDecoration: 'none', color: 'White' }}>
                Add Combo
              </a>
            </ListItem>
            {/* Các mục con khác */}
          </List>
        </Collapse>
        <ListItem
          
          onClick={toggleProducts}
          sx={{
            gap:2,
            marginBottom: '20px',
            marginTop: '20px',
            borderBottom: '5px solid #b15214',
            paddingBottom: '10px',
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              animation: 'changeColor 0.4s ease forwards',
              background: 'linear-gradient(to right, #F09824,#F09824)',
            },
          }}
        >
        <FastfoodIcon/>
          Products
        </ListItem>
        <Collapse in={showProducts}>
          <List component="div" disablePadding>
            <ListItem
              
              sx={{
                gap:2,
                paddingLeft: '50px',
                marginBottom: '20px',
                marginTop: '20px',
                borderRadius: '10px',
                '&:hover': {
                  animation: 'changeColor 0.4s ease forwards',
                  background: 'linear-gradient(to right, #F09824,#F09824)',
                },
              }}
            >
              <BorderAllIcon/>
              <a href="/admin/products/all" style={{ textDecoration: 'none', color: 'White' }}>
                All Products
              </a>
            </ListItem>
            <ListItem
              
              sx={{
                gap:2,
                paddingLeft: '50px',
                marginBottom: '20px',
                borderRadius: '10px',
                '&:hover': {
                  animation: 'changeColor 0.4s ease forwards',
                  background: 'linear-gradient(to right, #F09824,#F09824)',
                },
              }}
            >
              <AddCircleIcon/>
              <a href="/admin/products/addproducts" style={{ textDecoration: 'none', color: 'White' }}>
                Add Product
              </a>
            </ListItem>
            {/* Các mục con khác */}
          </List>
        </Collapse>
        <ListItem
          
          onClick={toggleProfit}
          sx={{
            gap:2,
            marginBottom: '20px',
            marginTop: '20px',
            borderBottom: '5px solid #b15214',
            paddingBottom: '10px',
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              animation: 'changeColor 0.4s ease forwards',
              background: 'linear-gradient(to right, #F09824,#F09824)',
            },
          }}
        >
        <MonetizationOnIcon/>
          Profit
        </ListItem>
        <Collapse in={showProfit}>
          <List component="div" disablePadding>
            <ListItem
              
              sx={{
                gap:2,
                paddingLeft: '50px',
                marginBottom: '20px',
                marginTop: '20px',
                borderRadius: '10px',
                '&:hover': {
                  animation: 'changeColor 0.4s ease forwards',
                  background: 'linear-gradient(to right, #F09824,#F09824)',
                },
              }}
            >
              <BorderAllIcon/>
              <a href="/admin/Profit/all" style={{ textDecoration: 'none', color: 'White' }}>
                All Profit
              </a>
            </ListItem>
            <ListItem
              
              sx={{
                gap:2,
                paddingLeft: '50px',
                marginBottom: '20px',
                borderRadius: '10px',
                '&:hover': {
                  animation: 'changeColor 0.4s ease forwards',
                  background: 'linear-gradient(to right, #F09824,#F09824)',
                },
              }}
            >
              <AddCircleIcon/>
              <a href="/admin/Profit/addprofit" style={{ textDecoration: 'none', color: 'White' }}>
                Add Profit
              </a>
            </ListItem>
            {/* Các mục con khác */}
          </List>
        </Collapse>
        <ListItem
          
          onClick={toggleStorge}
          sx={{
            gap:2,
            marginBottom: '20px',
            marginTop: '20px',
            borderBottom: '5px solid #b15214',
            paddingBottom: '10px',
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              animation: 'changeColor 0.4s ease forwards',
              background: 'linear-gradient(to right, #F09824,#F09824)',
            },
          }}
        >
        <InventoryIcon/>
         Storge
        </ListItem>
        <Collapse in={showStorge}>
          <List component="div" disablePadding>
            <ListItem
              
              sx={{
                gap:2,
                paddingLeft: '50px',
                marginBottom: '20px',
                marginTop: '20px',
                borderRadius: '10px',
                '&:hover': {
                  animation: 'changeColor 0.4s ease forwards',
                  background: 'linear-gradient(to right, #F09824,#F09824)',
                },
              }}
            >
              <BorderAllIcon/>
              <a href="/admin/Storge/inventory" style={{ textDecoration: 'none', color: 'White' }}>
                Inventory
              </a>
            </ListItem>
            <ListItem
              
              sx={{
                gap:2,
                paddingLeft: '50px',
                marginBottom: '20px',
                borderRadius: '10px',
                '&:hover': {
                  animation: 'changeColor 0.4s ease forwards',
                  background: 'linear-gradient(to right, #F09824,#F09824)',
                },
              }}
            >
              <ListAltIcon/>
              <a href="/admin/Storge/stock" style={{ textDecoration: 'none', color: 'White' }}>
              Stock 
              </a>
            </ListItem>
        
            <ListItem
              
              sx={{
                gap:2,
                paddingLeft: '50px',
                marginBottom: '20px',
                borderRadius: '10px',
                '&:hover': {
                  animation: 'changeColor 0.4s ease forwards',
                  background: 'linear-gradient(to right, #F09824,#F09824)',
                },
              }}
            >
              <AddCircleIcon/>
              <a href="/admin/Storge/addstock" style={{ textDecoration: 'none', color: 'White' }}>
                Add Stock
              </a>
            </ListItem>
            {/* Các mục con khác */}
          </List>
        </Collapse>
      </List>
    </nav>
  );
};

export default Navbar;
