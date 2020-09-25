import React from "react";
import { convertToRaw } from "draft-js";

export default ({ data, reset, defaultValues }) => {
  return (
    <>
      {data && (
        <pre style={{ textAlign: "left", color: "white" }}>
          {JSON.stringify(
            {
              ...data,
              DraftJS: convertToRaw(data.DraftJS.getCurrentContent()).blocks[0]
                .text
            },
            null,
            2
          )}
        </pre>
      )}

      <button
        className="button buttonBlack"
        type="button"
        onClick={() => {
          reset(defaultValues);
        }}
      >
        Reset Form
      </button>
      <button className="button">submit</button>
    </>
  );
};
