import React from "react";
import { Controller } from "react-hook-form";
import { Editor } from "draft-js";

function RichText({ control }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        minHeight: 30,
        padding: 10
      }}
    >
      <Controller
        name="DraftJS"
        control={control}
        render={({ value, onChange }) => (
          <Editor editorState={value} onChange={onChange} />
        )}
      />
    </div>
  );
}

export default RichText;
