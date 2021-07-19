import React from 'react'
import Head from 'next/head'

export default function Layout({title, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="container mx-auto max-w-3xl p-8">
                {children}
            </main>
        </div>
    )
}
