import * as React from "react";
import { Stack } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./faq.css";
import Header from "../../components/Header";

function Faq() {
  const faqData = [
    {
      id: "panel1",
      title: "What programming language should I learn first?",
      content:
        "Consider starting with a beginner-friendly language like Python or JavaScript.",
    },
    {
      id: "panel2",
      title: "How can I practice programming?",
      content:
        "Practice coding regularly, solve coding challenges, and work on small projects.",
    },
    {
      id: "panel3",
      title: "Are there any good online resources for learning programming?",
      content:
        "Yes, websites like Codecademy, freeCodeCamp, and Coursera offer excellent courses.",
    },
    {
      id: "panel4",
      title:
        "Should I focus on learning one language deeply or learn multiple languages?",
      content:
        "It's generally better to focus on mastering one language before moving on to others.",
    },
    {
      id: "panel5",
      title: "How do I stay motivated while learning programming?",
      content:
        "Set realistic goals, celebrate small victories, and find a supportive community.",
    },
    {
      id: "panel6",
      title: "What are some essential programming concepts I should learn?",
      content:
        "Start with basic concepts like variables, loops, conditionals, and then move on to more advanced topics like data structures and algorithms.",
    },
    {
      id: "panel7",
      title: "What are the best practices for writing clean code?",
      content:
        "Follow coding conventions, write modular and reusable code, and regularly refactor your codebase.",
    },
    {
      id: "panel8",
      title: "How do I troubleshoot errors and debug my code?",
      content:
        "Use debugging tools provided by your IDE, read error messages carefully, and break down the problem into smaller parts.",
    },
    {
      id: "panel9",
      title: "Should I learn Git and version control?",
      content:
        "Yes, version control is essential for collaboration and managing code changes effectively.",
    },
    {
      id: "panel10",
      title: "What are some tips for landing my first programming job?",
      content:
        "Build a strong portfolio, contribute to open-source projects, and practice technical interview questions.",
    },
  ];


  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack direction="column" className="accordions" mt={10}>
      <Header title="FAQ" subTitle="Frequently Asked Questions Page"/>
      
      {faqData.map((item) => (
        <Accordion
          className="accordion"
          key={item.id}
          defaultExpanded
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}bh-content`}
            id={`${item.id}bh-header`}
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {item.title}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {item.content}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}

export default Faq;
