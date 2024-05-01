import { notFound } from "next/navigation";

const BlogDetailsPage = ({ params }: { params: { blogId: number } }) => {
  if (params.blogId > 5) {
    return notFound();
  }
  return (
    <div>
      <h3> Single Blog {params.blogId}</h3>
    </div>
  );
};

export default BlogDetailsPage;
