import React from "react";

const HeadlinesHeader = ({
  newsTitle,
  pageLink,
}: {
  newsTitle: string;
  pageLink: string;
}) => {
  return (
    <div className="headlines-header">
      <div className="w-12 h-1 bg-primary mb-3"></div>
      <div className="flex pb-4 border-0 border-solid border-b border-border justify-between">
        <div className="text-xl text-primary font-[hind]">{newsTitle}</div>
        <a href={pageLink}>
          <div className="btn btn-sm btn-outline">सबै</div>
        </a>
      </div>
    </div>
  );
};

export default HeadlinesHeader;
