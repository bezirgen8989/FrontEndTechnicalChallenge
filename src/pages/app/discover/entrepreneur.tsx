import Head from "next/head";
import styles from "../../../styles/discover.module.scss";
import {HeaderNavigation} from "@/components/HeaderNavigation";
import {useContext, useState} from "react";
import {Button} from "@/components/Button";
import {AppContext} from "@/Context";
import {GetStaticProps} from "next";

type ContentProps = {
  currentPage: string;
  entrepreneurQuestions: any;
};

const Entrepreneur = ({entrepreneurQuestions}: ContentProps) => {
  const {discoverWeb3HeaderNavigators} = useContext(AppContext);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [formAnswers, setFormAnswers] = useState<string[]>([]);
  const [formValidationMsg, setFormValidationMsg] = useState("");
  const [reqData, setReqData] = useState();

  const formOnChangeHandler = (e: any) => {
    setSelectedAnswer(e.target.value);
    if (formValidationMsg.length) {
      setFormValidationMsg("");
    }
  };

  const switchToNextQuestion = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const questionsLength = entrepreneurQuestions.length - 1;

    if (questionsLength > currentQuestion && selectedAnswer) {
      // debugger;
      setFormAnswers((prev) => [...prev, selectedAnswer]);
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer("");
    } else if (
      currentQuestion === entrepreneurQuestions.length - 1 &&
      selectedAnswer
    ) {
      const response = await fetch("/api/discoverWebThree/postSurvey", {
        method: "POST",
        body: JSON.stringify(formAnswers),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const {data, message} = await response.json();

      if (response.statusText === "OK") {
        setReqData(data);
      } else {
        setFormValidationMsg(message);
      }
    } else {
      setFormValidationMsg("Please select answer");
    }
  };

  const switchToPevQuestion = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (currentQuestion !== 0) {
      setFormAnswers(formAnswers.slice(0, -1));
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  return (
    <>
      <Head>
        <title/>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <main className={styles.discoverMainContainer}>
        <HeaderNavigation headerNavigators={discoverWeb3HeaderNavigators}/>
        <section className={styles.sectionContainer}>
          {entrepreneurQuestions && (
            <div className={styles.sectionBlocks}>
              <div className={styles.header}>
                <div className={styles.title}>
                  Setup Guide
                </div>

                <div className={styles.description}>
                  Unlock your highest potential with our personalized guide!
                  <p>
                    {currentQuestion + 1}/{entrepreneurQuestions?.length}{" "}
                    Questions answered
                  </p>
                </div>
              </div>

              {reqData ? (
                <h1>DONE</h1>
              ) : (
                <div className={styles.dataContainer}>
                  {entrepreneurQuestions && (
                    <>
                      <div className={styles.progressBar}>
                        <br
                          style={{
                            width: `${
                              (100 / entrepreneurQuestions.length + 1) *
                              (currentQuestion + 1)
                            }%`,
                          }}
                          className={styles.activeBar}
                        />
                      </div>

                      <div className={styles.formContainer}>
                        <div className={styles.header}>
                          <h1>{currentQuestion + 1}</h1>
                          <h1>
                            {entrepreneurQuestions[currentQuestion]?.question}
                          </h1>
                        </div>
                        <form
                          className={styles.form}
                          onChange={formOnChangeHandler}
                        >
                          {entrepreneurQuestions[currentQuestion]?.variants.map(
                            (variant: string, id: number) => (
                              <div key={id} className={styles.formItems}>
                                <div className={styles.radio}>
                                  <input
                                    type="radio"
                                    name={"answer"}
                                    value={variant}
                                    id={variant}
                                  />
                                  <span
                                    className={
                                      selectedAnswer === variant
                                        ? styles.active
                                        : ""
                                    }
                                  />
                                </div>

                                <label className={styles.radioLabel}>
                                  {variant}
                                </label>
                              </div>
                            )
                          )}
                          <div className={styles.btnControllers}>
                            <div className={styles.btn}>
                              <Button
                                title={"Previous"}
                                btnType="gray"
                                toggleHandler={switchToPevQuestion}
                              />
                            </div>
                            <div className={styles.btn}>
                              <Button
                                title={"Next"}
                                toggleHandler={switchToNextQuestion}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </>
                  )}
                </div>
              )}

              <p className={styles.validationMessage}>
                {formValidationMsg.length ? formValidationMsg : null}
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/discoverWebThree/entrepreneur");

  const {data} = await response.json();
  return {
    props: {
      entrepreneurQuestions: data || [],
      fulfilled: false
    },
  };

}
export default Entrepreneur;