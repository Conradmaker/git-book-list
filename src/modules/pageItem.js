//깃허브 주소 객체로 받기

let nextId = 1;

const initialState = [
  {
    id: 0,
    name: "HTML",
    desc: "안녕하세요",
    url: "https://app.gitbook.com/@conrad-maker/s/conrad-html/",
    thumnail:
      "https://lh3.googleusercontent.com/proxy/_dfr1ge4QFwQDJWHQBNtq2f0hgb-6DsNm13lrKB1abcDN4ehj35b0iZPvmiMuzsy_nH3cyBnPnVamIHk0K7MRGE-CI1FcoMH3ZsI320c4cW0StU",
  },
  {
    id: 2,
    name: "CSS",
    desc: "My favorite ",
    url: "https://app.gitbook.com/@conrad-maker/s/css/",
    thumnail: "https://sabe.io/classes/css/hero.png",
  },
  {
    id: 3,
    name: "JAVA",
    desc: "BackEnd Stack",
    url: "https://app.gitbook.com/@conrad-maker/s/java/",
    thumnail:
      "https://lh3.googleusercontent.com/proxy/gyBlBOFFMYePZCary7h1AaVJ_TdTtuXpRzEWnH2jCH5Li-BNE3xEWt5aDJi6uXd_hZMOmLOalL-spF6tNg5dHEyLgLvOJYn5mJ_h_s2M6wm8-x62NIy0fJ1TIOXPiwl3DrgpVcgHXuyhgWINlJmMHxoidJRuYc6bGRlSU_Cxe18p_cdM2f6Tvb2m-ocwdjz-jeY0VLehQcDc4AAyvvna_z2TbreeUMIogy2vL0nMwYkI3AKnrOgzWqIsC8h77wH74GZRd1xGmJVdUp7tHy6042ySfJc",
  },
  {
    id: 4,
    name: "Data Base",
    desc: "oracle & mySQL ...",
    url: "https://app.gitbook.com/@conrad-maker/s/database/",
    thumnail: "https://www.combell.com/build/website/images/meta/database.png",
  },
  {
    id: 5,
    name: "Twitter Clone",
    desc: ` Next.js & React.js & \n\n\n\n Redux & Redux-middleware`,
    url: "https://app.gitbook.com/@conrad-maker/s/nodebird/",
    thumnail:
      "https://help.twitter.com/content/dam/help-twitter/logos/card_wide_blue.png",
  },
];

export default function pageItem(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
