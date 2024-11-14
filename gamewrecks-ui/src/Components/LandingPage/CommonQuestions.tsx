import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";

const questions = [
  {
    question: "How is my data stored?",
    answer:
      "The application stores your provided steam user id as an encrypted attribute. When a user account is deleted, all data is deleted from the server (including any private data).",
  },
  {
    question: "What APIs do you use?",
    answer:
      "Steam provides an API that allows you to retrieve your library. We use this API to retrieve your games and their details. You can also add your games manually in the dashboard.",
  },
  {
    question: "Where does the game data come from?",
    answer: "The game meta data comes from IGDB API.",
  },
];
export default function CommonQuestions() {
  return (
    <>
      <h2 className="text-4xl font-bold text-white">Common Questions</h2>
      <Accordion
        type="single"
        collapsible
        className="mt-2 text-white w-full text-slate-100"
      >
        {questions.map((question) => (
          <div key={question.question}>
            <AccordionItem value={question.question}>
              <AccordionTrigger className="text-xl">
                {question.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </>
  );
}
