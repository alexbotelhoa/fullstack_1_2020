import React from 'react'
import auth0 from '../lib/auth0'

const App = (props) => {
   return (
      <div>
         <h1>App</h1>
         <pre>{JSON.stringify(props, null, 2)}</pre>
         <a href='/api/logout' className='py-4 px-2 rounded bg-pink-800 font-bold shadow-xl hover:shadow block w-1/4 text-center mx-auto text-white'>Termine por aqui</a>
      </div>
   )
}
export default App

export async function getServerSideProps({req,res}) {
   const session = await auth0.getSession(req)
   if(session) {
      return {
         props: {
            user: session.user
         }
      }
   }
   return {
      props: {
         user: {}
      }
   }
};