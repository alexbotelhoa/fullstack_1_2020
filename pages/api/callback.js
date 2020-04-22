import auth0 from '../../lib/auth0'

export default async function login (req, res) {
   await auth0.handleCallback(req, res, { redirectTo: '/app'})
}

/*
const callback = async (req, res) => {
   await auth0.handleCallback(req, res, { redirectTo: '/app'})
}
export default callback
*/