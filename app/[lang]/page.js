import PhotoList from "@/components/PhotoList";
import { getDictionary } from "./dictionaries";

const page = async ({ params }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const response = await fetch(`${process.env.BASE_API_URL}/photo`);
  const photos = await response.json();
  return (
    <>
      <PhotoList photos={photos} />
    </>
  );
};

export default page;
