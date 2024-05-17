// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { getUserData, logout } from '../redux/slices/authSlices'
// const Navbar = () => {
//   const { isLoggedIn } = useSelector((state) => state?.auth)
//   const { data } = useSelector((state) => state?.auth)
//   // console.log(data)
//   // const [loading, setLoading] = useState(true)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   // async function handleLogout(e) {
//   //   e.preventDefault();
//   //   const res = await dispatch(logout());
//   //   if (res?.payload?.success)
//   //     navigate("/");
//   // }
//   // useEffect(() => {
//   //   // Simulate some loading time
//   //   setTimeout(() => {
//   //     setLoading(false);
//   //   }, 1000);
//   //   dispatch(getUserData())
//   // }, []);
//   return (
//     <>
//       <div className=' bg-yellow-500'>
//         <div className=' w-[100%]'>
//           <nav className='shadow '>
//             <div className='flex justify-between items-center py-6 px-10 container mx-auto'>
//               <div>
//                 <h1 className='text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer'>
//                   यवतमाळ क्रीडा संकुलन समिती
//                 </h1>
//               </div>

//               <div>
//                 <div className='hover:cursor-pointer sm:hidden'>
//                   <span className='h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600'></span>
//                   <span className='h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600'></span>
//                   <span className='h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600'></span>
//                 </div>
//                 <div className='flex items-center'>
//                   <ul className='sm:flex space-x-4 hidden items-center font-semibold text-lg'>
//                     <li>
//                       <Link
//                         to='/'
//                         className='text-gray-700 hover:text-indigo-600 text-md '
//                       >
//                         Home
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to='/about'
//                         className='text-gray-700 hover:text-indigo-600 text-md '
//                       >
//                         About
//                       </Link>
//                     </li>
//                     <li>
//                       {
//                         isLoggedIn && data?.role == 'Admin' ?
//                           <>
//                             <Link
//                               to='/application'
//                               className='text-gray-700 hover:text-indigo-600 text-md '
//                             >
//                               application's
//                             </Link>
//                           </>
//                           :
//                           <>{
//                             isLoggedIn &&
//                             <Link
//                               to='/services'
//                               className='text-gray-700 hover:text-indigo-600 text-md '
//                             >
//                               Services
//                             </Link>
//                           }
//                           </>
//                       }
//                     </li>
//                     <li>
//                     </li>
//                     <li>
//                       <Link
//                         to='/contact'
//                         className='text-gray-700 hover:text-indigo-600 text-md '
//                       >
//                         Contact
//                       </Link>
//                     </li>
//                   </ul>

//                   {/* <div className='md:flex items-center hidden space-x-4 ml-8 lg:ml-12'>
//                     {
//                       !isLoggedIn && <>
//                         <Link to='/login'>
//                           <h1 className='text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600'>
//                             LOGIN
//                           </h1>
//                         </Link>
//                         <Link to='/register'>
//                           <h1 className='text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg'>
//                             Register
//                           </h1>
//                         </Link>
//                       </>
//                     }

//                     {
//                       isLoggedIn &&
//                       <>

//                         <h1
//                           onClick={handleLogout}
//                           className='text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600'>
//                           logout
//                         </h1>

//                         <Link to='/user/profile'>
//                           <div className=' bg-yellow-500 px-2 py-2 rounded-full'>
//                             <h1>{data?.username}</h1>
//                           </div>
//                         </Link>
//                       </>

//                     }

//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </div >
//       </div >
//     </>
//   )
// }

// export default Navbar



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
  }
]

function Navbar(props) {
  async function handleLogout(e) {
    e.preventDefault()
    const res = await dispatch(logout())
    if (res?.payload?.success) navigate('/')
  }

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => state?.auth)
  const { data } = useSelector(state => state?.auth)

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
    </Box>
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


            {/* {!isLoggedIn && (
              <Link to='/batches'>
                <a className='uppercase text-black i nline-block  text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100'>
                  get start
                </a>
              </Link>
            )} */}

            {isLoggedIn && (
              <Link to='/register'>
                <a
                  className='uppercase text-black i nline-block  text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100'
                  onClick={handleLogout}
                >
                  logout
                </a>
              </Link>
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