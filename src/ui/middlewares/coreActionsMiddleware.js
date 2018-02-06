// eslint-disable-next-line no-unused-vars, arrow-body-style
const coreActionsMiddleware = store => next => (action) => {
  return next(action);
};

export default coreActionsMiddleware;
