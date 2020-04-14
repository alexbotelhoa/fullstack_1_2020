import React from 'react'
import Link from 'next/link'

const NavLink = ({ href, children }) => {
   return (
      <Link href={href}>
         <a className='p-2 hover:text-red-800'>{children}</a>
      </Link>
   )
}

export default function NavBar () {
   return (
      <div className='bg-gray-500 py-4 text-center'>
         <NavLink href='/'>Home</NavLink>
         <NavLink href='/cadastro'>Cadastro</NavLink>
         <NavLink href='/entrar'>Entrar</NavLink>
         <NavLink href='/sobre'>Sobre</NavLink>
      </div>
   )
}