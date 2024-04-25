import React from 'react'

const PopModel = () => {
  return (
    <>
      <div
        id='crud-modal'
        tabindex='-1'
        aria-hidden='true'
        className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div className='relative p-4 w-full max-w-md max-h-full'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'></div>
        </div>
      </div>
    </>
  )
}

export default PopModel
