import apiClient from "@/lib/api-client";

export default async function Home() {
  const hello = await apiClient.get();
  return <div>{hello.data}</div>;
}
