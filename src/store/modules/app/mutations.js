export default {
  SET_BOOKMARKS(state, params) {
    state.bookmarks = [...params];
  },
  SET_FILTERS(state, params) {
    state.filters = params;
  },
  SET_LAST_SEEN_LIST(state, params) {
    state.lastSeenList = [...params];
  },
};
