import axios from "axios";

export default async function handleUpload(file: File) {
  const data = new FormData();
  data.append("file", file);

  const res = await axios({
    headers: {
      "Cache-Control": "no-cache",
    },
    method: "post",
    url: "http://localhost:3000/upload",
    data: data,
  });
  // const res = await axios({
  //   method: "get",
  //   url: "http://localhost:3000",
  //   data: data,
  // });

  console.log(res);
  return res;
  // return axios.post("http://localhost:3000/upload", data);
  // return axios.get("http://localhost:3000/test");
}
