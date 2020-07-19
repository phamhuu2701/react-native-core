function randomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let DATA = [];
for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
  const _data = {
    _id: Math.floor(Math.random() * 10000) + 10000,
    title: `Title ${i}`,
    description: `Description ${randomString(Math.floor(Math.random() * 100))}`,
    age: Math.floor(Math.random() * 100),
    gender: Math.random() > 0.5,
  };
  DATA.push(_data);
}

const INITIAL_RESULT = {
  success: true,
  payload: {},
};

const INITIAL_PAYLOAD = {
  data: [],
  page: 1,
  totalPages: 0,
  totalItems: 0,
  limit: 10,
  search: "",
};

export const getData = (page = 1, limit = 10, search = "") => {
  try {
    if (page <= 0 || limit <= 0 || DATA.length === 0) {
      return {
        ...INITIAL_RESULT,
        payload: { ...INITIAL_PAYLOAD, page, limit, search },
      };
    } else {
      const start = page - 1;
      const end = page * limit < DATA.length ? page * limit : DATA.length;
      let list = [];
      for (let i = start; i < end; i++) {
        list.push(DATA[i]);
      }
      return {
        ...INITIAL_RESULT,
        payload: {
          ...INITIAL_PAYLOAD,
          data: list,
          page,
          limit,
          search,
          totalPages:
            Math.floor(DATA.length / limit) + (DATA.length === limit ? 0 : 1),
          totalItems: DATA.length,
        },
      };
    }
  } catch (error) {
    console.error(e);
    return { ...INITIAL_RESULT, success: false };
  }
};
