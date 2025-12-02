import Header from '@/components/Header'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='min-h-screen bg-gray-950 text-gray-100'>
      <Header/>
      {children}
    </main>
  )
}

export default layout
