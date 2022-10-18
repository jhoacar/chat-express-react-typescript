function Footer() {
  return (
    <div className="h-full p-4 rounded-none shadow text-center md:flex md:items-center md:justify-between md:p-6 bg-gray-100 dark:bg-gray-800 text-gray-600">
      <span className="text-sm sm:text-center flex flex-wrap items-center justify-center gap-1">
        <a
          href="https://github.com/jhoacar"
          className="hover:underline"
        >
          Created by Jhoan Carrero
        </a>
        {` © ${new Date().getFullYear()} Chat WebRTC.`}
      </span>
      <ul className="w-100 flex flex-wrap justify-center items-center mt-3 text-sm sm:mt-0">
        <li>
          <a
            href="https://github.com/jhoacar/chat-express-react-typescript"
            className="mr-4 hover:underline md:mr-6 "
          >
            Source Code
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/jhoacar"
            className="hover:underline"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export { Footer };
export default Footer;
