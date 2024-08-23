import React from "react";

const MessageSkeleton = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="skeleton w-10 h-10 rounded-full shrink-0 bg-slate-500"></div>
        <div className="flex flex-col gap-1">
          <div className="skeleton h-7 w-40 bg-slate-500"></div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 ">
        <div className="flex flex-col gap-1">
          <div className="skeleton h-7 w-40 bg-slate-500"></div>
        </div>
        <div className="skeleton w-10 h-10 rounded-full shrink-0 bg-slate-500"></div>
      </div>
    </>
  );
};

export default MessageSkeleton;
