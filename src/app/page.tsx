'use client';
import React from 'react'
import Navbar from '@/components/navbar/navbar'
import ClientOnly from '@/components/ClientOnly'
import Modal from '@/components/modals/Modal'
import RegisterModal from '@/components/modals/register_modal';
import ToasterProvider from '@/providers/toaster_provider';

export default function Home() {
  return (
    <>
    <ClientOnly >
      <ToasterProvider/>
      <RegisterModal/>
    <Navbar />
    </ClientOnly>
 

    </>
  )
}
