import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/authSlices'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Draggable from 'react-draggable'
import { Paper } from '@mui/material'

const drawerWidth = 240
const navItems = [
  {
    name: 'Home',
    slug: '/'
  },
  {
    name: 'about',
    slug: '/about'
  },
  // {
  //   name: 'services',
  //   slug: '/services'
  // },
  {
    name: 'contact',
    slug: '/contact'
  },
]
const naviItemsForAdmin = [
  {
    name: 'Home',
    slug: '/'
  },
  {
    name: 'about',
    slug: '/about'
  },
  {
    name: 'Application',
    slug: '/services'
  },
  {
    name: 'contact',
    slug: '/contact'
  },
]

function Navbar(props) {
  async function handleLogout(e) {
    e.preventDefault()
    const res = await dispatch(logout())
    if (res?.payload?.success) navigate('/')
    handleClose()
  }


  const { data } = useSelector((state) => state?.auth)

  console.log(data.role)
  const [open, setOpen] = useState(false);
  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => state?.auth)

  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)


  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => navigate(item.slug)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {
        !isLoggedIn ? (

          <Link Link
            to='/login'
          >
            <Button
              variant='contained'
              color='primary'
            >
              Log in
            </Button>
          </Link>
        ) : (
          <Link Link
            to='/user/profile'
          >
            <Button
              variant='contained'
              color='primary'
            >
              profile
            </Button>
          </Link>
        )
      }

    </Box >
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className=''>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <nav>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth
              }
            }}
          >
            {drawer}
          </Drawer>
        </nav>

        <AppBar component='nav' >
          <Toolbar >
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              जिल्हा क्रीडा संकुल समिती, यवतमाळ
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {
                data.role == 'Admin' ? (
                  naviItemsForAdmin.map(item => (
                    <Button
                      key={item}
                      sx={{ color: '#fff' }}
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </Button>
                  ))
                ) : (
                  // console.log('hello')
                  navItems.map(item => (
                    <Button
                      key={item}
                      sx={{ color: '#fff' }}
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </Button>
                  ))
                )
              }
            </Box>

            {!isLoggedIn && (
              <Link to='/login'>
                <a className='uppercase text-black i nline-block  text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100'>
                  LogIn
                </a>
              </Link>
            )}

            {isLoggedIn && (
              <a
                className='uppercase text-black i nline-block  text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100'
                onClick={handleClickOpen}
              >
                Profile
              </a>
            )}
            {
              <React.Fragment>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  PaperComponent={PaperComponent}
                  aria-labelledby="draggable-dialog-title"
                >
                  <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Profile
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      fontSize={'5vh'}
                    >
                      {console.log(data)}
                      {data?.username}
                    </DialogContentText>
                  </DialogContent>
                  <div className=' min-w-96 px-2 py-4 flex justify-evenly items-center'>
                    <Link
                      to='/user/profile'
                      onClick={handleClose}
                    >
                      <button
                        className='bg-green-400 text-gray-700 px-4 rounded-lg py-2 text-lg font-semibold cursor-pointer hover:bg-green-500 transition-all ease-in-out duration-300'
                      >
                        View profile
                      </button>
                    </Link>

                    <Button
                      onClick={handleLogout}
                      color='error'
                      variant='contained'
                    >
                      Log out
                    </Button>
                  </div>
                </Dialog>
              </React.Fragment>
            }

            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawerToggle}
              sx={{ mr: 4, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div >

  )

}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
}

export default Navbar