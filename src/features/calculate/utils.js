import axios from 'axios';
import config from 'config/app';

export const postCalculate = async ({verificationKey, ...args}) => {
  try {
    const result = await axios({
      method: "post",
      baseURL: config.API_BASE_URL,
      url: "/calculate",
      headers: {"Content-Type": "application/json"},
      params: {},
      data: {verification_key: verificationKey, ...args}
    });

    return true;
  } catch (error) {
    console.error(error);
    return error;
  }
};
