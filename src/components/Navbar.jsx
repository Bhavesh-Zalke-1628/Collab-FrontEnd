
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
// import firstLogo from '../assets/firstLogo.png'

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
  {
    name: 'services',
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
  }


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
      {/* <Typography variant='h6' sx={{ my: 2 }}>
        <img src={firstLogo} className='w-[5rem]' alt='' /  >
        जिल्हा क्रीडा संकुल समिति
      </Typography> */}
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
          <Toolbar c>
            {/* <img className='w-[4.5rem] m-1 p-1' src={} alt='logo' /> */}
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              जिल्हा क्रीडा संकुल समिती, यवतमाळ
            </Typography>


            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map(item => (
                <Button
                  key={item}
                  sx={{ color: '#fff' }}
                  onClick={() => navigate(item.slug)}
                >
                  {item.name}
                </Button>
              ))}
            </Box>


            {!isLoggedIn && (
              <Link to='/batches'>
                <a className='uppercase text-black i nline-block  text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100'>
                  get start
                </a>
              </Link>
            )}

            {isLoggedIn && (

              <a
                className='uppercase text-black i nline-block  text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100'
                onClick={handleLogout}
              >
                profile
              </a>

            )}



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
    </div>
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