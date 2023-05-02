import Link from "next/link";
import styles from "../../styles/signUpIndividual.module.scss";
import Header from "@/components/Header";
import { RightSideBlock } from "@/components/RightSideBlock";
import { FormInput } from "@/components/Input";
import { Button } from "@/components/Button";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PasswordPower } from "@/components/PasswordPower";

type SignInSignUpIndividual = {};

type FormData = {
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  password?: string;
  checkbox?: boolean;
};

const SignUpIndividual = ({}: SignInSignUpIndividual) => {
  const router = useRouter();
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({});
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

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    if (
      !Object.values(formData).length ||
      Object.values(formData).includes(false) ||
      Object.values(formData).includes("")
    ) {
      setValidationMessage("Please fill data");
    } else {
      localStorage.setItem("userFormData", JSON.stringify(formData));
      router.push("/");
    }
  };

  const formOnChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "agreement" ? e.target.checked : e.target.value,
    }));
    if (e.target.name === "password") {
      setCurrentPassword(e.target.value);
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
                <PasswordPower enteredPassword={currentPassword} />
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
          imageSrc="../assets/images/signUpGeneralInfo.png"
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
