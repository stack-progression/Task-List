import React from 'react'
import Header from '../components/Header/Header'
import Tasks from '../components/Tasks/Tasks'

const RootLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Tasks />
      </div>
    </div>
  )
}

export default RootLayout
