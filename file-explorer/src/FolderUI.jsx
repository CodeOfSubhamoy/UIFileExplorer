import React, { useState } from "react";
import "./index.css";
const FolderUI = ({ data }) => {
  console.log("data ", data);
  const [expand, setExpand] = useState(false);
  if (data.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>
            {expand ? "📂" : "📁"}
            {data.name}
          </span>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 10 }}>
          {data &&
            data.items.map((ele) => {
              return <FolderUI data={ele} key={ele.id} />;
            })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{data.name}</span>;
  }
};

export default FolderUI;
