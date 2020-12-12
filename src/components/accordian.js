import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function SimpleAccordion({accordianContent}) {

  return (
    <div className="my-6 max-w-screen-md mx-auto pb-9 pt-6 px-6">
        <h2 className="text-2 my-6 mx-auto text-center uppercase">FAQ</h2>
        {accordianContent.map(content => (
            <Accordion className="mb-3" key={content.id}>
        <AccordionSummary
            className="rounded-none"
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p><strong>{content.Question}</strong></p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            {content.Answer}
          </p>
        </AccordionDetails>
      </Accordion>
        ))}

    
    </div>
  );
}
