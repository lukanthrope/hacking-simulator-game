import { SET_ACTIVE_PEOPLE_ITEM_ID } from "../actions";

const initialState = {
  activeItemId: null,
  items: [
    {
      id: 1,
      name: "Bob Dylan",
      description: "Fathers friend",
      avatarUrl:
        "https://img.discogs.com/z-bsPj7isv_UpZfLE70adNDlDp8=/600x450/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-59792-1400061862-9692.jpeg.jpg",
      twitter: {
        description: "Engineer at @Ecorp",
        posts: [
          {
            id: 1,
            content: "@johndeer No one cares what you think, man",
          },
          {
            id: 2,
            content: "Love the smell of napalm..",
          },
          {
            id: 3,
            content:
              "Just rewatched the original SW trillogy, what a masterpiece",
          },
          {
            id: 4,
            content: "Guys, whos gonna attent the next @ComicCon??",
          },
        ],
      },
      facebook: {
        description: "Engineer at @Ecorp",
        posts: [
          {
            id: 1,
            content:
              "https://www.kindpng.com/picc/m/96-966454_reservoir-dogs-meme-faces-hd-png-download.png",
          },
          {
            id: 2,
            content:
              "https://i.kym-cdn.com/photos/images/original/001/164/821/349.png",
          },
          {
            id: 3,
            content:
              "https://i.pinimg.com/originals/61/76/42/61764259773b1a3f98fddf67bdfc9f97.jpg",
          },
          {
            id: 4,
            content:
              "https://i.redd.it/3hjm92c5p7a41.jpg",
          },
        ],
      },
    },
    {
      id: 2,
      name: "Sarah Connor",
      description: "the head of HR at Ecorp",
      avatarUrl:
        "https://i.pinimg.com/originals/b5/dc/ea/b5dcea8a2debf634a8c782437bb022d9.gif",
      twitter: {
        description: "Head of HR at @Ecorp",
        posts: [
          {
            id: 1,
            content: "Just finished my Harry Potter fanfic, comming soon..",
          },
          {
            id: 2,
            content: "#BLM",
          },
          {
            id: 3,
            content: "cant wait the new LOTR series",
          },
          {
            id: 4,
            content: "feel like im on the highway to hell for those jokes",
          },
        ],
      },
      facebook: {
        description: "Head of HR at @Ecorp",
        posts: [
          {
            id: 1,
            content:
              "https://i.pinimg.com/originals/0a/f0/41/0af041aed3de35a8d58c949f6b73eeeb.jpg",
          },
          {
            id: 2,
            content: "https://pbs.twimg.com/media/B_wdJ4SWcAIaD1Q.jpg",
          },
          {
            id: 3,
            content:
              "https://2loud2oldmusicdotcom.files.wordpress.com/2018/05/sh3xe3o.jpg?w=250&h=333",
          },
          {
            id: 4,
            content:
              "https://2loud2oldmusicdotcom.files.wordpress.com/2018/05/hjpni.jpg?w=400&h=602",
          },
        ],
      },
    },
    {
      id: 3,
      name: "Patrick Swayze",
      description: "the head of security",
      avatarUrl:
        "https://www.gannett-cdn.com/presto/2019/08/13/USAT/85bd4a27-2704-434f-b99f-d50bb6bfa420-swayze1.jpg",
      twitter: {
        description: "Head of security at @Ecorp",
        posts: [
          {
            id: 1,
            content: "btw the first one is my favorite movie actually",
          },
          {
            id: 2,
            content: "i wish ive never seen the last terminator",
          },
          {
            id: 3,
            content: "Guyz, have you ever seen the rain?",
          },
          {
            id: 4,
            content: "What a sunny day",
          },
        ],
      },
    },
    {
      id: 4,
      name: "Matthew McConaughey",
      description:
        "CEO at big fast-fashion company who is pulluting the enviroment",
      avatarUrl:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyNjA5MzczMDc4NzU4NzI3/matthew-mcconaughey-gettyimages-589532902_1600jpg.jpg",
      twitter: {
        description: "CEO at @LaFashion",
        posts: [
          {
            id: 1,
            content: "100500 new employees this year!1",
          },
          {
            id: 2,
            content: "@ElonMusk, yep, we gotta do that together",
          },
          {
            id: 3,
            content: "Just rewatched the original SW trillogy, still loving it",
          },
          {
            id: 4,
            content: "Happy birthday to my mom @LindaKim!",
          },
        ],
      },
    },
  ],
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PEOPLE_ITEM_ID:
      return {
        ...state,
        activeItemId: action.payload.id,
      };

    default:
      return state;
  }
};
