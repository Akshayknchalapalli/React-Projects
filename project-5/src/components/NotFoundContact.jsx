const NotFoundContact = () => {
  return (
    <div className="flex m-auto h-[60vh] gap-4 justify-center items-center">
      <div>
        <img src="/contact.png" alt="contact" />
      </div>
      <h3 className="text-white text-2xl font-semibold items-center">
        Contact Not Found
      </h3>
    </div>
  );
};

export default NotFoundContact;
