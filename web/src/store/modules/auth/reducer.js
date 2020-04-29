import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
