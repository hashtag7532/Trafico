import React, {useState} from 'react'

import {HiOutlinePlus, HiOutlineMinus} from "react-icons/hi"

import {motion} from "framer-motion"

import {fadeInRight} from "../variants"

const Accordion = ({accordion}) => {

  const [isOpen, setIsOpen]= useState(false)

  const {question, answer} = accordion
  return <div className='max-w-[550px]'>
    <div>
      <div>
        <p>{question}</p>
        <div>
          <div>+ -</div>
        </div>
      </div>
    </div>
  </div>;
};

export default Accordion;
