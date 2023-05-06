import React, {useState} from "react";
import Link from "next/link";
import styles from "../../styles/signIn.module.scss";
import Header from "@/components/Header";
import {RightSideBlock} from "@/components/RightSideBlock";
import {FormInput} from "@/components/Input";
import {Button} from "@/components/Button";
import Footer from "@/components/Footer";
import signUpIndividualImage from "../../assets/images/signUpGeneralInfo.png";

type SignInProps = {};

type FormData = {
  email?: string;
  password?: string;
};

const SignIn = ({}: SignInProps) => {
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [validationMessage, setValidationMessage] = useState<string>("");

  const headerElement = () => {
    return (
      <div>
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
    const {email, password} = formData;
    if (!email || !password) {
      setValidationMessage("Please fell the form")
    }
  };

  const formOnChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value,}));
    if (validationMessage.length) {
      setValidationMessage("");
    }
  };

  const showPasswordStatus = () => {
    setIsPasswordShow((prev) => !prev);
  };

  return (
    <main className={styles.signInContainer}>
      <div className={styles.formContainer}>
        <Header/>
        <div className={styles.formContainerBlock}>
          <div className={styles.formBlock}>
            <header className={styles.formHeaderText}>
              <h1>Sign In</h1>
              <p>Fill the form for sign in</p>
            </header>
            <form onSubmit={onFormSubmit} onChange={formOnChange}>
              <div>
                <FormInput label="Email" name="email" type="email"/>
              </div>

              <div>
                <FormInput
                  label="Password"
                  name="password"
                  type={isPasswordShow ? "text" : "password"}
                  icon={isPasswordShow ? "lineEye" : "eye"}
                  switchIconType={showPasswordStatus}
                />
              </div>

              <Button title={"Sign In"}/>
            </form>
            <p>
              <Link href={"/auth/selectRole"}>Choose your role </Link>
              and create your new account.
            </p>
            <p className={styles.validationMessage}>
              {validationMessage && validationMessage}
            </p>
          </div>
        </div>

        <Footer/>
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

export default SignIn;
