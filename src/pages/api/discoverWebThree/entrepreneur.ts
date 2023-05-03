import { NextApiRequest, NextApiResponse } from "next";

type EntrepreneurToolkitAnswers = {
  question: string;
  variants: string[];
}[];

export const entrepreneurToolkitQuestions = [
  {
    question: "How do you plan to use Edgevana?",
    variants: [
      "High Performant Validator",
      "Public Full Node Producer",
      "RPC (full program IDs)",
      "Web3 Developer",
      "Web2 Developer",
    ],
  },
  {
    question:
      "Is this your first time trying to run a node? If not, where have you participated in the past? ",
    variants: [
      "QuickNode",
      "Amazon Managed Blockchain",
      "Azure Blockchain Workbench",
      "Alchemy",
      "Blockdaemon",
      "This will be my first deployment! ",
    ],
  },
  {
    question: "Question 2?",
    variants: [
      "variants 1",
      "variants 2",
      "variants 3",
      "variants 4",
      "variants 5",
    ],
  },
  {
    question: "Question 3?",
    variants: [
      "variants 1",
      "variants 2",
      "variants 3",
      "variants 4",
      "variants 5",
    ],
  },
  {
    question: "Question 4?",
    variants: [
      "variants 1",
      "variants 2",
      "variants 3",
      "variants 4",
      "variants 5",
    ],
  },
  {
    question: "Question 5?",
    variants: [
      "variants 1",
      "variants 2",
      "variants 3",
      "variants 4",
      "variants 5",
    ],
  },
  {
    question: "Question 6?",
    variants: [
      "variants 1",
      "variants 2",
      "variants 3",
      "variants 4",
      "variants 5",
    ],
  },
];

export default async function getEntrepreneurToolkit(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data?: EntrepreneurToolkitAnswers }>
) {
  if (req.method !== "GET") {
    res.status(405).send({ message: "Method is not allowed for sign up" });
    return;
  }

  // Return a success message with data
  res.status(200).send({
    message: "Success",
    data: entrepreneurToolkitQuestions,
  });
}
