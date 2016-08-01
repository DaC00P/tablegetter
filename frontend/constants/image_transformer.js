module.exports = {

  profilePic(url){
    return this.transformPic(url, 160, 160);
  },

  profilePic2(url){
    return this.transformPic(url, 40, 40);
  },

  profilePic3(url){
    return this.transformPic(url, 32, 32);
  },

  coverPhoto(url){
    return this.transformPic(url, 831, 317);
  },

  postPic(url){
    return this.transformPic(url, 476, 476);
  },

  photoWall(url){
    return this.transformPic(url, 261, 261);
  },

  friendWall(url){
    return this.transformPic(url, 152, 152);
  },

  friendWallBW(url){
    return this.transformPic(url, 152, 152, ",o_50,e_grayscale");
  },

  titlebarLogo(url){
    return this.transformPic(url, 25, 25);
  },

  splashLogo(url){
    return this.transformPic(url, 400, 60);
  },

  transformPic(url, w, h, params){
    if(params === undefined){params = '';}
    const query = `/upload/w_${w},h_${h},c_fill${params}`;
    return url.split('/upload').join(query);
  }

};
