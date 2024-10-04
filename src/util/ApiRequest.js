import axios from "axios";

function getCommonHeaders(h) {
  let headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const token = localStorage.getItem("accessToken");
  if (token) headers.Authorization = `Bearer ${token}`;
  if (h) headers = { ...h, ...headers };

}

export const getHeaders = async ({auth,isFormData}) => {
  let headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": isFormData?"multipart/form-data":"application/json",
  };
  if(auth){
    headers = {
     ...headers,
      "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
    }
  }
  return headers;
}
export const apiGet = async (url, onSuccess, onFailure) => {
  await axios
    .get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (onSuccess) onSuccess(response?.data);
    })
    .catch((error) => {
      if (onFailure) onFailure(error);
    });
};

export const apiGetAuth = async (url, onSuccess, onFailure, headers) => {
  await axios
    .get(url, {
      headers: Headers(headers),
    })
    .then((response) => {
      if (onSuccess) onSuccess(response?.data?.data);
    })
    .catch((error) => {
      if (onFailure) onFailure(error?.response?.data);
    });
};

export const apiPost = async ({url, body, onSuccess, onFailure,auth=true,isFormData=true}) => {
  await axios
    .post(url, body, {
      headers: getHeaders({
        auth: auth,
        isFormData: isFormData,
      }),
    })
    .then((response) => {
      if (onSuccess) onSuccess(response?.data);
    })
    .catch((error) => {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.href = "/";
      }
      if (onFailure) onFailure(error?.response);
    });
};

export const apiPostWithoutAuth = async (url, body, onSuccess, onFailure) => {
  axios
    .post(url, body, {
      headers: {
        headers: { "Access-Control-Allow-Origin": "*" },
      },
    })
    .then((response) => {
      if (onSuccess) onSuccess(response?.data);
    })
    .catch((error) => {
      if (onFailure) onFailure(error?.response?.data);
    });
};
