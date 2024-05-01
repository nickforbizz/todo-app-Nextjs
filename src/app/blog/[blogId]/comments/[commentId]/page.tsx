const CommentDetailsPage = ({ params }: 
  {params : {
    blogId: string,
    commentId: string,
  }}) => {
  return (
    <div>
      <h3> Single comment {params.commentId} for blog {params.blogId}</h3>
    </div>
  );
};

export default CommentDetailsPage;
