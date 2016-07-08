const SearchUtil = {

  getSearchResults(query, callback){
    $.ajax({
      method: "GET",
      url: 'api/searches',
      data: {query: query},
      success(response) {
        callback(response);
      }
    }
   );
 }
};

module.exports = SearchUtil;