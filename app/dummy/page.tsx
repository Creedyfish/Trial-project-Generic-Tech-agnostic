"use client";
import dynamic from "next/dynamic";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import React from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

interface FormData {
  editor: string;
}

export default function Home() {
  const { handleSubmit, control, register } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="editor"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
}
