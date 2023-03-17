import { FC, useState, useEffect, ChangeEvent, MouseEvent } from "react";
import schema from "@/schema/";
import trpc from "@/utils/trpc";
import bg from "@/public/europeana.jpg";
import Image from "next/image";

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = () => {
  const { isLoading: isSubmitting, mutate } = trpc.email.send.useMutation({
    onError: (error) => {
      //error popup
    },
    onSuccess: (data) => {
      //clear form
      //success popup
    },
  });

  const [name, setName] = useState("");
  const [nameBlur, setNameBlur] = useState(false);
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailBlur, setEmailBlur] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [subject, setSubject] = useState("");
  const [subjectBlur, setSubjectBlur] = useState(false);
  const [subjectError, setSubjectError] = useState(false);

  const [message, setMessage] = useState("");
  const [messageBlur, setMessageBlur] = useState(false);
  const [messageError, setMessageError] = useState(false);

  useEffect(() => {
    setNameError(false);
    const r = schema.name.safeParse(name);
    if (!r.success) setNameError(true);
  }, [name]);

  useEffect(() => {
    setEmailError(false);
    const r = schema.email.safeParse(email);
    if (!r.success) setEmailError(true);
  }, [email]);

  useEffect(() => {
    setSubjectError(false);
    const r = schema.subject.safeParse(subject);
    if (!r.success) setSubjectError(true);
  }, [subject]);

  useEffect(() => {
    setMessageError(false);
    const r = schema.message.safeParse(message);
    if (!r.success) setMessageError(true);
  }, [message]);

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubjectInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };
  const handleMessageTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleNameInputBlur = () => {
    if (nameBlur) return;
    setNameBlur(true);
  };
  const handleEmailInputBlur = () => {
    if (emailBlur) return;
    setEmailBlur(true);
  };
  const handleSubjectInputBlur = () => {
    if (subjectBlur) return;
    setSubjectBlur(true);
  };
  const handleMessageTextareaBlur = () => {
    if (messageBlur) return;
    setMessageBlur(true);
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutate({ name, email, subject, message });
  };

  return (
    <>
      <form className="flex flex-col items-center p-5 mb-5 border border-white border-opacity-30 gap-8 w-full h-5/6 bg-opacity-10 backdrop-filter backdrop-blur-sm">
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameInputChange}
          onBlur={handleNameInputBlur}
          disabled={isSubmitting}
          required
          placeholder="name"
          className={`font-playfair text-[1.5rem] leading-[2.25rem] bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 text-white w-11/12 p-1 placeholder:text-white ${
            nameBlur && nameError ? "border-rose-400" : "border-white"
          } disabled:border-opacity-50 disabled:text-opacity-50`}
        />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailInputChange}
          onBlur={handleEmailInputBlur}
          disabled={isSubmitting}
          required
          placeholder="email"
          className={`font-playfair text-[1.5rem] leading-[2.25rem] bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 text-white w-11/12 p-1 placeholder:text-white ${
            nameBlur && nameError ? "border-rose-400" : "border-white"
          } disabled:border-opacity-50 disabled:text-opacity-50`}
        />
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={handleSubjectInputChange}
          onBlur={handleSubjectInputBlur}
          disabled={isSubmitting}
          required
          placeholder="subject"
          className={`font-playfair text-[1.5rem] leading-[2.25rem] bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 text-white w-11/12 p-1 placeholder:text-white ${
            nameBlur && nameError ? "border-rose-400" : "border-white"
          } disabled:border-opacity-50 disabled:text-opacity-50`}
        />
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageTextareaChange}
          onBlur={handleMessageTextareaBlur}
          disabled={isSubmitting}
          required
          placeholder="message"
          maxLength={500}
          className={`font-playfair text-[1.5rem] leading-[2.25rem] resize-none bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 text-white w-11/12 h-56 p-1 placeholder:text-white ${
            messageBlur && messageError ? "border-rose-400" : "border-white"
          } disabled:border-opacity-50 disabled:text-opacity-50`}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={
            nameError ||
            emailError ||
            subjectError ||
            messageError ||
            isSubmitting
          }
          className={`font-playfair tracking-wide text-white text-2xl px-6 py-3 hover:bg-white hover:bg-opacity-80 hover:rounded-l-full hover:rounded-r-full focus:outline-none disabled:bg-opacity-50 disabled:text-opacity-50 disabled:hover:bg-opacity-0 ${
            isSubmitting
              ? "bg-white rounded-l-full rounded-r-full disabled:hover:bg-opacity-50"
              : null
          }`}
        >
          {isSubmitting ? "SUBMITTING..." : "SEND"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
