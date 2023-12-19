import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Main = () => {
  return (
    <>
      {/* title  */}
      <div className="title">
        <p className="text-2xl font-bold text-white">Tips</p>
        <p className="text-white opacity-70">
          Lorem ipsum dolor sit amet consectetur. Amet ultricies a integer
          lectus sit.
        </p>
      </div>

      <div className="flex justify-center px-6 py-6 lg:px-12">
        <Accordion type="multiple" className="grid w-full gap-4 md:w-3/4">
          {/* type how much accordion open in one if its multiple then you can open all if single the you can open only one */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="py-6 text-lg font-bold 2xl:text-2xl">
              Massa aliquam Lorem ipsum dolor sit amet consectetur.
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted lg:w-3/4  2xl:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit id
              venenatis pretium risus euismod dictum egestas orci netus feugiat
              ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci
              in. Id sed montes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="py-6 text-lg font-bold 2xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted lg:w-3/4  2xl:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit id
              venenatis pretium risus euismod dictum egestas orci netus feugiat
              ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci
              in. Id sed montes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="py-6 text-lg font-bold 2xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur Massa sed quam.
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted lg:w-3/4  2xl:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit id
              venenatis pretium risus euismod dictum egestas orci netus feugiat
              ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci
              in. Id sed montes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="py-6 text-lg font-bold 2xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur Semper amet.
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted lg:w-3/4  2xl:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit id
              venenatis pretium risus euismod dictum egestas orci netus feugiat
              ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci
              in. Id sed montes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Main;
