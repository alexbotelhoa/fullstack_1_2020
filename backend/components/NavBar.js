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
      <div className='bg-gray-500 py-4'>
         <NavLink href='/sobre'>Sobre</NavLink>
         <NavLink href='/cadastro'>Cadastro</NavLink>
         <NavLink href='/entrar'>Entrar</NavLink>
      </div>
   )
}