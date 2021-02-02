export default async function ({ route, redirect, store }) {

  const publicPages = ['/account/login', '/account/register', '/account/forgot-password'];
  const authpage = !publicPages.includes(route.path);
  const loggeduser = store.state.auth.user.status.loggeduser;

  console.log("User: ", store.state.auth.user);

  if (authpage && !loggeduser) {
    return redirect('/account/login');
  }
}
