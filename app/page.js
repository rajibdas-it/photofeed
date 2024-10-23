import { getAllPhotos } from "@/lib/image-data";
import Image from "next/image";

export default function Home() {
  const photos = getAllPhotos()

  return (
    <h1>Photo Feed</h1>
  );
}
