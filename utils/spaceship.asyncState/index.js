export const PENDING = 'pending';
export const SUCCESS = 'success';
export const FAILURE = 'failure';

export default asyncState = stateName => {
  switch (stateName) {
  case PENDING:
  case SUCCESS:
  case FAILURE:
    return {
      pending: false,
      success: false,
      failure: false,
      [stateName]: true
    };
  default:
    return {
      pending: false,
      success: false,
      failure: false
    };
  }
};
