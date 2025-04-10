import TagLine from "./TagLine";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-5 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h1 className="h2">{title}</h1>}
      {text && <p className="body-2 mt-4 text-n-2">{text}</p>}
    </div>
  );
};

export default Heading;