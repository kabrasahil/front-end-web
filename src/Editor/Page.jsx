import { useState } from "react";
import "./Tiptap.css"
import parser from "html-react-parser";
import parse from "html-dom-parser"
import TipTap from "./Tiptap";

function addClass({setDesc},{desc}){
    setDesc({desc}.getElementByTagName("p").addClass("text-base font-light text-gray-500 dark:text-gray-400"))
}

function Editor(){
    const [desc,setDesc] = useState("");
    var check = parser(desc);
    var nw =parse(desc)

    return(
        <div className="Editor">
            <TipTap setDesc={setDesc} />
            <div className="ProseMirror">{parser(desc)}</div>
            <button onClick={()=>{
                
                console.log(nw);
            }}>Submit</button>
            
            {/* {desc.childElement.text} */}

        </div>
    )
}


export default Editor