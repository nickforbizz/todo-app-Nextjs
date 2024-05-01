import { Metadata } from "next";

type Props = {
  blogId: any;
  params: {
    blogId: string,
  }
};

export const generateMetadata = async ({ params }: Props): Metadata => {
  const title = await new Promise((resolve) => setTimeout(()=> {
    resolve(`Blog ${params.blogId}`);

  }, 1000));
  return {
    title,
    description: `Blog ${params.blogId} for To-Do App`,
  };
};


export default function BlogPage() {
  return <div>
     <h3>Comments section</h3>
     <ul>
      <li>1st Comment</li>
      <li>2nd Comment</li>
      <li>3rd Comment</li>
     </ul>
    </div>;
};




