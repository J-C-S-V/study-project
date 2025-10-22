import { fetchUsers } from "./counterSlice";

export const counterThunk = () => {
  return async (dispatch, getState) => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    // data.map((item) => console.log(item.name));
    dispatch(fetchUsers(data));
    // console.log("data", data);
  };
};
