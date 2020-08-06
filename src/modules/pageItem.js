//깃허브 주소 객체로 받기
const ADD_LIST = "pageItem/ADD_LIST";
let nextId = 6;
export const addList = (data) => ({
  type: ADD_LIST,
  body: {
    id: nextId++,
    name: data.name,
    desc: data.desc,
    url: data.url,
    thumnail: data.thumnail,
  },
});

const initialState = [
  {
    id: 0,
    name: "HTML",
    desc: "안녕하세요",
    url: "https://app.gitbook.com/@conrad-maker/s/html/",
    thumnail:
      "https://www.htmlblender.com/wp-content/uploads/2019/01/Begini-Sejarah-HTML.png",
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
    thumnail: "https://lviv.itea.ua/wp-content/uploads/2016/03/java-2-min.png",
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
    case ADD_LIST:
      return state.concat(action.body);
    default:
      return state;
  }
}
