'use client'

import './globals.css'
import { StylesCSR } from './StylesCSR' // dynamic stylesheet (client side)
import { StylesSSR } from './StylesSSR' // dynamic stylesheet (server side, optional for nextJS)
import '@/../theme.config'              // custom theme colors

import {
    Header,
}                           from './Header'
import {
    Footer,
}                           from './Footer'



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head>
                <StylesCSR />
                <StylesSSR />
            </head>
            <body>
                <Header />
                
                {children}
                
                <Footer />
            </body>
        </html>
    )
}
