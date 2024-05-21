import React, { useRef, useState } from "react";
import {useClickAway} from 'react-use';
{
}

const Accordion = ({
  title,
  classTitle,
  content,
  classContent,
  classAccordion,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const acordionRef = useRef(null);

  const handleOutsideClick = () => {
    setTimeout(() => {
      setAccordionOpen(false);
    }, 300);
    } 
  useClickAway(acordionRef, handleOutsideClick)
   

  return (
    <div className={`${classAccordion}  `} ref={acordionRef}>
      <button
        className={`${classTitle}`}
        
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        {title}
      </button>
      
      <div
       
        className={`${classContent} grid overflow-hidden transition-all duration-1000 ease-in cursor-pointer 
            ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100 max-h-96"
                : "grid-rows-[0fr] opacity-0 max-h-0"
            }`}
      >
        {accordionOpen && content}
      </div>
    </div>
  );
};

export default Accordion;