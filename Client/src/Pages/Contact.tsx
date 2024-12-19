const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-4xl bubble-font text-center mb-8">Contact Us</h1>
      <div className="bg-[var(--container-bg)] shadow-lg rounded-lg p-6 md:p-12">
        <p className="text-xl thin-font text-[var(--foreground)] mb-4">
          We would love to hear from you! If you have any questions, feedback,
          or inquiries about our platform, feel free to get in touch with us.
          You can contact our team members directly via email. We are happy to
          assist you in any way we can.
        </p>

        <h2 className="text-3xl font-semibold text-[var(--foreground)] mt-6 mb-4">
          Team Contacts
        </h2>
        <ul className="list-none text-xl thin-font text-[var(--foreground)]">
          <li className="mb-4">
            <strong>Tal Calderon</strong>:{" "}
            <a
              href="mailto:talkal153@gmail.com"
              className="text-[var(--button-bg)] bg-[var(--dropdown-bg-hover)] p-1 rounded"
            >
              talkal153@gmail.com
            </a>
          </li>
          <li className="mb-4">
            <strong>Sasha T</strong>:{" "}
            <a
              href="mailto:sasha.meduza24@gmail.com"
              className="text-[var(--button-bg)] bg-[var(--dropdown-bg-hover)] p-1 rounded"
            >
              sasha.meduza24@gmail.com
            </a>
          </li>
          <li className="mb-4">
            <strong>Yaniv Ridel</strong>:{" "}
            <a
              href="mailto:yanivridel@gmail.com"
              className="text-[var(--button-bg)] bg-[var(--dropdown-bg-hover)] p-1 rounded"
            >
              yanivridel@gmail.com
            </a>
          </li>
          <li className="mb-4">
            <strong>Maor Shmueli</strong>:{" "}
            <a
              href="mailto:maorshmueli5@gmail.com"
              className="text-[var(--button-bg)] bg-[var(--dropdown-bg-hover)] p-1 rounded"
            >
              maorshmueli5@gmail.com
            </a>
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-[var(--foreground)] mt-6 mb-4">
          Get In Touch
        </h2>
        <p className="text-xl thin-font text-[var(--foreground)] mb-4">
          If you need any assistance or would like to share your thoughts, don’t
          hesitate to reach out to us. We’re here to help and always happy to
          hear from our users!
        </p>
        <p className="text-xl thin-font text-[var(--foreground)]">
          Feel free to email us anytime, and we’ll get back to you as soon as
          possible. We appreciate your feedback and look forward to connecting
          with you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
