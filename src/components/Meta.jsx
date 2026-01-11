import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, image = "/big-five.ico" }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <Helmet key={title}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default Meta;
