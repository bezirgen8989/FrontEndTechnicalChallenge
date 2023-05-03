import { NextApiRequest, NextApiResponse } from "next";
import { entrepreneurToolkitQuestions } from "./entrepreneur";

type EntrepreneurToolkitAnswers = string[];

export default async function getEntrepreneurToolkit(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data?: EntrepreneurToolkitAnswers }>
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Method is not allowed" });
    return;
  }

  const userEntrepreneurAnswersData: EntrepreneurToolkitAnswers = req.body;

  // Validate the user answers
  if (
    userEntrepreneurAnswersData.length >= entrepreneurToolkitQuestions.length
  ) {
    res.status(400).send({ message: "Please fill answer to all questions" });
    return;
  }

  // Return a success message
  res.status(200).send({
    message: "Success",
    data: userEntrepreneurAnswersData,
  });
}
