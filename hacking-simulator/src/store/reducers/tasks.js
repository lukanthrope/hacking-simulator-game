import { COMPLETE_TASK } from "../actions";

export const initialState = {
  items: [
    { id: 1, toSolve: "+1442108" },
    {
      id: 2,
      toSolve: "+1322223",
      description:
        "Cool. Sarah Connor is the head of HR. Check her contacts too. There must be someone who has access the security server. Gimme his/her phone number. Good luck.",
    },
    {
      id: 3,
      toSolve: "othervoices",
      description:
        "Nice. Patrick Swayze is the director of engineering. The company employees use PassX3 to keep their passwords and sensitive data. Try to hack this account and find the access token to the security admin. Send me it. Before sending you gotta decrypt it. I just learned that the app uses Caesar cipher with key 2",
    },
    {
      id: 4,
      toSolve: "Withdrawn: 80,000$. Transaction code: #ff212323",
      description:
        "Matthew McConaughey is the CEO at big fast-fashion company who is pulluting the enviroment. My fellow stole his card credentials: 1111222211112222. You need to find the answer to the secret question. Then steel the money for DDOS attack and send me the response.",
    },
    {
      id: 5,
      description:
        "Now that we have the money we can perform a DDOS attack. While the security server is down our guy will go there and smash all the servers. Join the attack on https:1131.14.14.1:8001",
    },
  ],
  activeItemId: Number(localStorage.getItem("active-task-id")) || 1,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_TASK:
      return {
        ...state,
        activeItemId: state.activeItemId + 1,
      };

    default:
      return state;
  }
};
