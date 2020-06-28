import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default (props: any) => {
  return (
    <>
      <Header />
      <div>{ props.children }</div>
      <Footer />
    </>
  )
}
