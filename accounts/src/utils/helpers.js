import Cookies from "js-cookie";
const fakeAuth = {
  isAuthenticated: () => (Cookies.get("ssoTest") === "yes" ? true : false),
  async signin() {
    await timeout(500);
    Cookies.set("ssoTest", "yes");
  },
  async signout() {
    await timeout(500);
    Cookies.remove("ssoTest");
  }
};

const timeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export { fakeAuth, timeout };
