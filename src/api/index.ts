const URL = "https://63984501044fa481d6972523.mockapi.io/api/task1";

export const api = {
  async getData() {
    const res = await fetch(`${URL}/mockdata`);
    return res.json();
  },
};
