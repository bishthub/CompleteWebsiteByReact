const INITIAL_STATE = {
  sections: [
    {
      title: 'insta',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/insta%20services'
    },
    {
      title: 'Facebook',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/facebook%20services'
    },
    {
      title: 'Youtube',
      imageUrl: 'https://i.ibb.co/0DtC19y/carry-yt.jpg',
      id: 3,
      linkUrl: 'shop/youtube%20services'
    },
    {
      title: 'Pubg Services',
      imageUrl: 'https://i.ibb.co/DrTdR8W/pubgB.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/pubg%20services'
    },
    {
      title: 'COC ACCOUNTS',
      imageUrl: 'https://clashofclans.com/uploaded-images/_1440x847_crop_center-center_90/CoC_Blog_Announcement_20160429.jpg?mtime=20160429082539',
      size: 'large',
      id: 5,
      linkUrl: 'shop/clash%20of%20clans%20accounts'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
