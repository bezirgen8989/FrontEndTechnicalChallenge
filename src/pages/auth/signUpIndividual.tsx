import Link from "next/link";
import styles from "../../styles/signUpIndividual.module.scss";
import Header from "@/components/Header";
import { RightSideBlock } from "@/components/RightSideBlock";
import { FormInput } from "@/components/Input";
import { Button } from "@/components/Button";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import { PasswordPower, StatusesMap } from "@/components/PasswordPower";
import signUpIndividualImage from "../../assets/images/signUpGeneralInfo.png";
import { GetStaticProps, GetStaticPropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

type SignInSignUpIndividual = {};

type FormData = {
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  password?: string;
  agreement: boolean;
  selectedRole: string;
};

const SignUpIndividual = ({}: SignInSignUpIndividual) => {
  const router = useRouter();
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [currentPasswordStatus, setCurrentPasswordStatus] =
    useState<StatusesMap>();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    agreement: false,
    selectedRole: "",
  });
  const [validationMessage, setValidationMessage] = useState<string>("");

  const headerElement = () => {
    return (
      <div className={styles.signUpHeader}>
        <h1>Earn free crypto after making your first purchase.</h1>
        <p>
          *The average Edgevana operator earns $950 a month in incentives.
          <Link href={"#"}> See terms</Link>
        </p>
      </div>
    );
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, userName, email, password } = formData;
    const agreementValMessage =
      "Please certify that you are 18 years of age or older, agree to Edgevana's Terms of Use, and have read the Privacy Policy before proceeding.";
    if ([firstName, lastName, userName, email, password].includes("")) {
      setValidationMessage("Please fill data");
    } else if (!formData.agreement) {
      setValidationMessage(agreementValMessage);
    } else if (!currentPasswordStatus?.strong) {
      setValidationMessage("Please create strong password");
    } else {
      try {
        const selectedRole = localStorage.getItem("selectedRole");
        const response = await fetch("/api/auth/signUp", {
          method: "POST",
          body: JSON.stringify({ ...formData, selectedRole }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status > 400 && response.status > 500) {
          setValidationMessage(response.statusText);
        } else {
          localStorage.setItem("userFormData", JSON.stringify(formData));
          router.push("/app");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const formOnChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "agreement" ? e.target.checked : e.target.value,
    }));
    if (e.target.name === "password") {
      setCurrentPassword(e.target.value);
    }
    if (validationMessage.length) {
      setValidationMessage("");
    }
  };

  const showPasswordStatus = () => {
    setIsPasswordShow((prev) => !prev);
  };

  return (
    <main className={styles.signUpIndividualContainer}>
      <div className={styles.formContainer}>
        <Header />
        <div className={styles.formContainerBlock}>
          <div className={styles.formBlock}>
            <header className={styles.formHeaderText}>
              <h1>Sign Up</h1>
              <p>Create your account</p>
            </header>
            <form onSubmit={onFormSubmit} onChange={formOnChange}>
              <div className={styles.doubleInput}>
                <FormInput label="First Name" name="firstName" />
                <FormInput label="Last Name" name="lastName" />
              </div>

              <div>
                <FormInput label="Username" name="userName" />
              </div>

              <div>
                <FormInput label="Email" name="email" type="email" />
              </div>

              <div>
                <FormInput
                  label="Password"
                  name="password"
                  type={isPasswordShow ? "text" : "password"}
                  icon={isPasswordShow ? "lineEye" : "eye"}
                  switchIconType={showPasswordStatus}
                />
                <PasswordPower
                  enteredPassword={currentPassword}
                  getPasswordStatus={setCurrentPasswordStatus}
                />
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  name="agreement"
                  className={styles.agreementCheckbox}
                />
                <label htmlFor="agreement">
                  I certify that i am 18 years of age or older, i agree to the
                  to Edgevana`s <Link href={"#"}>Terms of Use</Link>, and i have
                  read the <Link href={"#"}>Privacy Policy</Link>.
                </label>
              </div>

              <Button title={"Sign Up"} />
            </form>
            <p className={styles.validationMessage}>
              {validationMessage && validationMessage}
            </p>
          </div>
        </div>

        <Footer />
      </div>
      <div className={styles.rightSideBlock}>
        <RightSideBlock
          imageSrc={signUpIndividualImage.src}
          imageAlt="General Info Image"
          imageWidth={1031 * 2}
          imageHeight={675 * 2}
          header={headerElement()}
          isImageContainerCentered={true}
        />
      </div>
    </main>
  );
};

export default SignUpIndividual;
