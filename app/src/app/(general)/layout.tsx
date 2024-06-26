import { Sidebar } from '@/components/navigation/Sidebar'
import React from 'react'

export default function GeneralLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='size-full text-white'>
            <Sidebar />
            <main className='min-h-screen px-4 py-20 md:px-20 md:py-4 md:pr-4'>
            {children}
            </main>
        </div>
    )
}
