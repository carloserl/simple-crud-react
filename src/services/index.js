import axios from "axios";

export const getService = async (url) => {
  try {
    const response = await axios({
      url: url,
      method: "GET",
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const postService = async (url,data) => {
  try {
    const response = await axios.post( url,
      data,
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const putService = async (url,data) => {
  try {
    const response = await axios.put( url,
      data,
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteService = async (url) => {
  try {
    const response = await axios.delete(url);
    return response;
  } catch (error) {
    return error;
  }
};
