'use client'
import React, { useEffect, useRef } from 'react';
//import { Editor } from '@tinymce/tinymce-react';
import '@toast-ui/editor/dist/toastui-editor.css';

 import { Editor } from '@toast-ui/react-editor';
export default function App({message}) {
  const editorRef=useRef();
  useEffect(()=>{
         const editorInstance=editorRef.current.getInstance();
         editorInstance.setMarkdown(message);
  },[message])
  return (
    <Editor
    previewStyle="vertical"
    height="100vh"
    initialEditType="markdown"
    initialValue="hello"
    ref={editorRef}
  />
  );
}