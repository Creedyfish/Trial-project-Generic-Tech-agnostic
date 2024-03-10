/**
 * Configuration for the Quill editor toolbar.
 * See https://quilljs.com/docs/modules/toolbar/ for more information.
 */
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }], // Headers
    [{ size: [] }], // Font sizes
    ["bold", "italic", "underline", "strike", "blockquote"], // Styling options
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ], // List and indentation options
    ["link", "image"], // Link and image options
    ["clean"], // Remove formatting
  ],
  clipboard: {
    // Match visual while copy-pasting. Set to false for better formatting while pasting.
    matchVisual: false,
  },
};

/**
 * Quill editor formats.
 * These correspond to the options provided in the toolbar above.
 * See https://quilljs.com/docs/formats/ for more information.
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
];


  export {modules,formats}