import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";

const modalPage = async ({ params }) => {
  const { id, lang } = await params;
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
};

export default modalPage;
