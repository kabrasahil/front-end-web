// import "./Tiptap.css";
// import { Color } from "@tiptap/extension-color";
// import ListItem from "@tiptap/extension-list-item";
// import TextStyle from "@tiptap/extension-text-style";
// import Underline from "@tiptap/extension-underline";
// import { EditorContent, useEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import React from "react";

// import Document from "@tiptap/extension-document";
// import Dropcursor from "@tiptap/extension-dropcursor";
// import Image from "@tiptap/extension-image";
// import Paragraph from "@tiptap/extension-paragraph";
// import Text from "@tiptap/extension-text";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const MenuBar = ({ editor }) => {
//   if (!editor) {
//     return null;
//   }

//   return (
//     <div className="grid grid-cols-12 tiptap-toolbar">
//       <button
//         onClick={() => editor.chain().focus().toggleBold().run()}
//         disabled={!editor.can().chain().focus().toggleBold().run()}
//         className={editor.isActive("bold") ? "is-active" : ""}
//       >
//       <FontAwesomeIcon icon="fa-solid fa-bold" />
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleItalic().run()}
//         disabled={!editor.can().chain().focus().toggleItalic().run()}
//         className={editor.isActive("italic") ? "is-active" : ""}
//       >
//         italic
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleUnderline().run()}
//         disabled={!editor.can().chain().focus().toggleItalic().run()}
//         className={editor.isActive("underline") ? "is-active" : ""}
//       >
//         Underline
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleStrike().run()}
//         disabled={!editor.can().chain().focus().toggleStrike().run()}
//         className={editor.isActive("strike") ? "is-active" : ""}
//       >
//         strike
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleCode().run()}
//         disabled={!editor.can().chain().focus().toggleCode().run()}
//         className={editor.isActive("code") ? "is-active" : ""}
//       >
//         code
//       </button>
//       <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
//         clear marks
//       </button>
//       <button onClick={() => editor.chain().focus().clearNodes().run()}>
//         clear nodes
//       </button>
//       <button
//         onClick={() => editor.chain().focus().setParagraph().run()}
//         className={editor.isActive("paragraph") ? "is-active" : ""}
//       >
//         paragraph
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//         className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
//       >
//         h1
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//         className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
//       >
//         h2
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
//         className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
//       >
//         h3
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
//         className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
//       >
//         h4
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
//         className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
//       >
//         h5
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
//         className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
//       >
//         h6
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleBulletList().run()}
//         className={editor.isActive("bulletList") ? "is-active" : ""}
//       >
//         bullet list
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleOrderedList().run()}
//         className={editor.isActive("orderedList") ? "is-active" : ""}
//       >
//         ordered list
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//         className={editor.isActive("codeBlock") ? "is-active" : ""}
//       >
//         code block
//       </button>
//       <button
//         onClick={() => editor.chain().focus().toggleBlockquote().run()}
//         className={editor.isActive("blockquote") ? "is-active" : ""}
//       >
//         blockquote
//       </button>
//       <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
//         horizontal rule
//       </button>
//       <button onClick={() => editor.chain().focus().setHardBreak().run()}>
//         hard break
//       </button>
//       <button
//         onClick={() => editor.chain().focus().setColor("#958DF1").run()}
//         className={
//           editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
//         }
//       >
//         purple
//       </button>

//       <button
//         onClick={() => editor.chain().focus().undo().run()}
//         disabled={!editor.can().chain().focus().undo().run()}
//       >
//         undo
//       </button>
//       <button
//         onClick={() => editor.chain().focus().redo().run()}
//         disabled={!editor.can().chain().focus().redo().run()}
//       >
//         redo
//       </button>
//       <button
//         onClick={() => {
//           const url = window.prompt("URL");

//           if (url) {
//             editor.chain().focus().setImage({ src: url }).run();
//           }
//         }}
//       >
//         add image from URL
//       </button>
//     </div>
//   );
// };

// const TipTap = ({ setDesc }) => {
//   const editor = useEditor({
//     extensions: [
//       Document,
//       Paragraph,
//       Text,
//       Image,
//       Dropcursor,
//       Underline,
//       Color.configure({ types: [TextStyle.name, ListItem.name] }),
//       TextStyle.configure({ types: [ListItem.name] }),
//       StarterKit.configure({
//         bulletList: {
//           keepMarks: true,
//           keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
//         },
//         orderedList: {
//           keepMarks: true,
//           keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
//         },
//       }),
//     ],
//     content: `
//     `,
//     editorProps: {
//       attributes: {
//         class:
//           "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
//       },
//     },
//     onUpdate: ({ editor }) => {
//       const html = editor.getHTML();
//       setDesc(html);
//     },
//   });

//   return (
//     <div className="w-[60%] h-full bg-white">
//       <MenuBar editor={editor} />
//       <EditorContent
//         editor={editor}
//         className="outline-none max-h-[500px] overflow-scroll"
//       />
//     </div>
//   );
// };

// export default TipTap;


import React, { useRef, useState } from 'react'
import Input from './Input'
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react';


const EditorContent = ({ setDesc }) => {

    const [title,setTitle] = useState('');
    const [uploading,setUploading] = useState(false);
    const [image,setImage] = useState('');
    const [content, setContent] = useState('');
    const editor = useRef(null);

    const uploadFileHandler = async(e) => {

        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image',file)
        setUploading(true)
  
        try {
          
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          }
  
          var { data } = await axios.post('/api/uploads', formData, config)
          
          data = (data.substr(8))
          data = '/' +data;
  
          setImage(data)
          setUploading(false)
  
        } 
        
        catch (error) {
          console.error(error)
          setUploading(false)
        }
  
    }

    // const userLogin = useSelector((state) => state.userLogin)
    // const {  userInfo } = userLogin  

    // const config = { headers: { authorization: `Bearer ${userInfo.token}`}}
    // const redirect = window.location.search ? window.location.search.split('=')[1] : '/blogs/page/1'
    let navigate = useNavigate();

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     axios.post('/api/blogs/create',{title,image,content},config)
    //     navigate(redirect);
    // }

    
    // const config = useMemo({
    //   colors:["#fff"]
    // })

    return (
    <div className='flex flex-row'>

        {/* <Sidebar /> */}

        <div className="w-full relative">
            {/* <Infobar start_text={'Post'} end_text={'New Blog'} additonalClass={"mt-0 bg-white"}/> */}
            <section className="h-auto w-5/6 mx-auto py-10 px-2 relative md:mb-20 md:mt-0 mt-10">
  
                <form className="w-full h-full px-4 py-6" name="addBlog">

                        <Input 
                            label="Blog Title"
                            type="text"
                            name="title"
                            placeholder="Enter Blog Title"
                            required={true}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <Input 
                            label="Blog Image"
                            type="file"
                            name="image"
                            placeholder=""
                            required={true}
                            onChange={uploadFileHandler}
                        />
                        
                        
                        <JoditEditor
                            ref={editor}
                            value={content}
                            onChange={newContent => {setDesc(newContent)}}
                            style={{ minHeight: "2000px" }}
// config={config}
                        />

                        <div className="w-full mx-auto mt-8">
                            <div className="w-full flex flex-row items-center">
                                { !uploading ?
                                (<input className="shadow color focus:shadow-outline focus:outline-none text-white font-semibold px-3 py-2 rounded w-full bg-accent hover:bg-[#37a697] cursor-pointer" type="submit" value="Post Now" />):
                                (<div className="shadow color focus:shadow-outline focus:outline-none text-white font-semibold px-3 py-2 rounded w-full bg-accent hover:bg-[#37a697] text-center">Please wait till uploading</div>)
                                }
                            </div>
                        </div>

                </form>


            </section>
        </div>
    </div>
  )
}

export default EditorContent;