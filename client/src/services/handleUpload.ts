import axios from "axios";

export default async function handleUpload(file: File) {
  const data = new FormData();
  data.append("file", file);

  return axios.post("http://localhost:3000/upload", data);
  // return axios.get("http://localhost:3000/test");
}
