import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
   clientId: process.env.AUTH0_CLIENTID,
   clientSecret: process.env.AUTH0_CLIENT_SECRET,
   scope: process.env.AUTH0_SCOPE,
   domain: process.env.AUTH0_DOMAIN,
   redirectUri: process.env.AUTH0_REDIRECT_URI,
   postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
   session: {
      cookieSecret: process.env.AUTH0_SESSION_COOKIE_SECRET,
      cookieLifeTime: process.env.AUTH0_SESSION_COOKIE_LIFE_TIME
   }
})