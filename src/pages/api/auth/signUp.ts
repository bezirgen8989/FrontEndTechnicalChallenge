import { NextApiRequest, NextApiResponse } from "next";

type UserData = {
  firstNam: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  agreement: boolean;
  selectedRole: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data?: UserData }>
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Method is not allowed for sign up" });
    return;
  }

  const userData: UserData = req.body;

  // Validate the user data
  if (
    !userData.firstNam ||
    !userData.lastName ||
    !userData.userName ||
    !userData.email ||
    !userData.password ||
    !userData.selectedRole ||
    !userData.agreement
  ) {
    res.status(400).send({ message: "Please fill in all the required fields" });
    return;
  }

  // Return a success message
  res.status(200).send({
    message: "Success",
    data: userData,
  });
}
