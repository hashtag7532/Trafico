import Image from "next/image"

import Accordion from "./Accordion";

import {motion} from "framer-motion"

import {fadeInLeft, fadeInRight, staggerAccordionContainer, staggerTextContainer} from "../variants"

const Faq = ({faqData}) => {
  const {pretitle, title, boyImg, accordions} = faqData
  return <section className="min-h-[1150px] lg:bg-faq bg-no-repeat bg-right-top lg:pt-4 lg:pb-24 mb-[60px] lg:mb-[160px]">
    <div className="container mx-auto ">
      <div className="relative flex flex-col lg:flex-row justify-center lg:justify-start items-center pt-8 pb-16 lg:pt-16 lg:pb-32">
        <div className="lg:max-w-[45%]">
          <h3 className="h3">{pretitle}</h3>
          <h2 className="h2 mb-6 lg:mb-12">{title}</h2>
        </div>
        <div className="lg:absolute lg:-right-16 lg:-top-16">
          <Image src={boyImg} width={708} height={498} />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[10px]">
          {accordions.map((accordion,idx)=>{
            return <Accordion accordion={accordion} key = {idx} />
          })}
        </div>
      </div>
    </div>
  </section>;
};

export default Faq;