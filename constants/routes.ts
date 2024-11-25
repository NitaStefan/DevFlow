const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SING_UP: "/sign-up",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;