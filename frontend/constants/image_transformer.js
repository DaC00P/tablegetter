module.exports = {

  showPagefoodPic(url){
    return this.transformPic(url, 350, 350);
  },

  displayItemBackgroundPic(url){
    return this.transformPic(url, 650, 250);
  },

  displayBackgroundPic(url) {
    return this.transformPic(url, 1750, 500);
  },

  transformPic(url, w, h, params){
    if(params === undefined){params = '';}
    const query = `/upload/w_${w},h_${h},c_fill${params}`;
    return url.split('/upload').join(query);
  }

};
