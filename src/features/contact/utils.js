import axios from 'axios';
import config from 'config/app';

export const postContact = async ({...args}) => {
  try {
    await axios({
      method: "post",
      baseURL: config.API_BASE_URL,
      url: "/contact",
      headers: {"Content-Type": "application/json"},
      params: {},
      data: {...args}
    });
    return true;
  } catch (error) {
    console.error(error);
    return error;
  }
};
