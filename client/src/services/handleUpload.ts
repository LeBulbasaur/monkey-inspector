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

  // console.log(res);
  return res;
}
