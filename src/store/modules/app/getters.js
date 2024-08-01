export default {
  getAllFilters: (state) => state.filters,
  getBookmarks: (state) => state.bookmarks,
  getLastSeenList: (state) => state.lastSeenList,
  getCheckedFilters: (state) => {
    let filters = { ...state.filters };

    Object.keys(filters).forEach((key) => {
      if (filters[key] === '') { delete filters[key]; }
    });

    return filters;
  }
};
