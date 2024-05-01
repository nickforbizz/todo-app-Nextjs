import React from "react";

const DocsPage = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 1) {
    return (
      <div>
        <h3>Docs </h3>
        <h4>Feature {params.slug[0]}</h4>
      </div>
    );
  }
  return (
    <div>
      <h3>Docs </h3>
    </div>
  );
};

export default DocsPage;
