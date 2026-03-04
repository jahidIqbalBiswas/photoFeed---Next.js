import PhotoDetails from "@/components/PhotoDetails";

const photoDetailsPage = async ({ params }) => {
  const { id, lang } = await params;
  return <PhotoDetails id={id} lang={lang} />;
};

export default photoDetailsPage;
