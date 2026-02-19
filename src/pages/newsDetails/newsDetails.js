import { useParams } from "react-router-dom";

export function NewsDetails() {
  const { slug } = useParams();

  const replaceDahes = (slug) => {
    return slug.replace(/-/g, " ");
  };

  return (
    <>
      <h1>NEWS DETAILS</h1>

      <p className="news">{replaceDahes(slug)}</p>
    </>
  );
}