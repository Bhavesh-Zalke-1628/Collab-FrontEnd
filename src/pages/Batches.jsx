import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { FaArrowRight, FaArrowRightArrowLeft } from 'react-icons/fa6';
function Batches() {
  const [show, setShow] = useState(false)
  const [open, setOpen] = React.useState(false);
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

  return (
    <div className='mt-20 m-10 '>
      <h1 class='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        All batches and prices
      </h1>

      <div className=' relative'>
        <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>

                <th scope='col' class='px-6 py-3'>
                  batches names
                </th>
                {/* <th scope='col' class='px-6 py-3'>
                  Qty
                </th> */}
                <th scope='col' class='px-6 py-3'>
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>

                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  under 18
                </td>
                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  1000
                </td>
              </tr>
              <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>

                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  under 18 + coaching
                </td>

                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  1200
                </td>
              </tr>
              <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>

                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  above 18
                </td>

                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  1500
                </td>
              </tr>
              <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>

                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  above 18 + coaching
                </td>

                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  1700
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='m-5  absolute right-2 b-5'>
          {/* <Link to='/process'> */}
          <a
            className='inline-flex items-center px-7 py-3 text-xl mr-7 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={handleClickOpen}
          >
            get batches <FaArrowRight className=' ml-2' />
          </a>
          {/* </Link> */}
        </div>
      </div>

      {
        <React.Fragment>

          <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
              Subscribe
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <p className=' text-black text-xl'>
                  कृपया दिलेल्या योजेनेचा लाभ घेण्या साठी आणि
                  सभासद  होण्या करिता काही शिल्क स्वीकारण्यात येत आहेस
                </p>
              </DialogContentText>
            </DialogContent>
            <div className=' px-2 py-4 flex items-end justify-evenly'>
              <div>
                <p className=' text-black font-semibold py-2'>सभासद  होण्या करी</p>
                <Link
                  to='/user-registration'
                >
                  <Button
                    variant='contained'
                    color='success'
                    onClick={handleClose}
                  >
                    proceed
                  </Button>
                </Link>
              </div>
              <Button
                autoFocus
                color='error'
                variant='contained'
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </Dialog>
        </React.Fragment>
      }
    </div>
  )
}

export default Batches