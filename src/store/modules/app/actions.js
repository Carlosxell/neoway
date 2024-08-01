export default {
  setFilters({ commit }, params) {
    commit('SET_FILTERS', params)
  },
  setBookmarks({ commit, rootState }, params) {
    const { bookmarks } = rootState.app;
    let list = [ ...bookmarks ];

    if (list.some((i) => (i.id === params.id))) {
      list = list.filter((i) => (i.id !== params.id));
    } else {
      list.push(params);
    }

    commit('SET_BOOKMARKS', list);
  },
  setLastSeenList({ commit }, params) {
    commit('SET_LAST_SEEN_LIST', [params])
  },
};
