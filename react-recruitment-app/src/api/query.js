import request from "utils/request";

export function queryCities() {
  return request({
    url: "/query/cities",
    method: "get",
  });
}
