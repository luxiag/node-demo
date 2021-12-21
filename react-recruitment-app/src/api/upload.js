import request from "utils/request";

export function uploadAvatar(data) {
  return request({
    url: "/upload-avatar",
    method: "post",
    data,
  });
}
