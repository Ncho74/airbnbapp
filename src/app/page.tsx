'use client';
import React from 'react'
import Navbar from '@/components/navbar/navbar'
import ClientOnly from '@/components/ClientOnly'
import Modal from '@/components/modals/Modal'

export default function Home() {
  return (
    <>
    <ClientOnly >
    <Modal isOpen={true} onClose={()=>{}} onSubmit={()=>{} } actionLabel={''} title='Model'/>
    <Navbar />
    </ClientOnly>
 

    </>
  )
}
