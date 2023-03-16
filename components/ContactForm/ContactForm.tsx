import { FC, useState, useEffect, ChangeEvent, MouseEvent } from "react";

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = () => {
  const [name, setName] = useState("");
  const [nameBlur, setNameBlur] = useState(false);

  const [email, setEmail] = useState("");
  const [emailBlur, setEmailBlur] = useState(false);

  const [subject, setSubject] = useState("");
  const [subjectBlur, setSubjectBlur] = useState(false);

  const [message, setMessage] = useState("");
  const [messageBlur, setMessageBlur] = useState(false);

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
  };

  return (
    <form className="flex flex-col items-center p-5 mb-5 border border-white border-opacity-60 gap-8 w-full h-5/6 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameInputChange}
        onBlur={handleNameInputBlur}
        required
        placeholder="name"
        className="text-[20px] leading-[30px] bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 border-white text-white w-11/12 p-1 placeholder:text-white placeholder:text-opacity-70"
      />
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailInputChange}
        onBlur={handleEmailInputBlur}
        required
        placeholder="email"
        className="text-[20px] leading-[30px] bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 border-white text-white w-11/12 p-1 placeholder:text-white placeholder:text-opacity-70"
      />
      <input
        type="text"
        id="subject"
        name="subject"
        value={subject}
        onChange={handleSubjectInputChange}
        onBlur={handleSubjectInputBlur}
        required
        placeholder="subject"
        className="text-[20px] leading-[30px] bg-transparent focus:outline-none border border-white border-t-0 border-l-0 border-r-0 text-white w-11/12 p-1 placeholder:text-white placeholder:text-opacity-70"
      />
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleMessageTextareaChange}
        onBlur={handleMessageTextareaBlur}
        required
        placeholder="message"
        maxLength={500}
        className="text-[20px] leading-[30px] resize-none bg-transparent focus:outline-none border border-white border-t-0 border-l-0 border-r-0 text-white w-11/12 h-56 p-1 placeholder:text-white placeholder:text-opacity-70"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="tracking-wide text-white text-2xl px-6 py-3 bg-white bg-opacity-50 border border-white border-opacity-90 rounded-l-full rounded-r-full focus:outline-none hover:bg-opacity-70"
      >
        SEND
      </button>
    </form>
  );
};

export default ContactForm;
