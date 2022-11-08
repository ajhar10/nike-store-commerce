import React from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({ endpoint: { title, items } }) => {
  console.log(title);
  return (
    <>
      <div>
        <div>
          <Title title={title} />
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7">
          {items?.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
