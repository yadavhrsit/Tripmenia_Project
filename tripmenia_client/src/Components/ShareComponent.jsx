import React,{useState} from "react";

const ShareComponent = ({ shareLinks,setOpenShareLinks,link }) => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(link);
    setIsLinkCopied(true);
    setTimeout(() => setIsLinkCopied(false), 2000); // Reset copied state after 2 seconds
  };

  const shareOnPlatform = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="relative z-50 w-full max-w-full overflow-hidden rounded-xl bg-white p-4 xs:w-[480px] sm:w-[520px] sm:p-6 lg:p-8">
        <div className="flex items-center justify-between">
          <h3 className="md:text-h3 font-bold text-gray-dark text-base leading-8 md:!text-xl">
            Share with
          </h3>
          <button
            type="button"
            className="inline-flex items-center justify-center focus:outline-none transition duration-200 active:scale-95 p-0.5 w-7 h-7 rounded-md bg-transparent border border-gray-300 hover:enabled:border-gray-1000 focus:enabled:border-gray-1000 focus:ring-gray-900/30 border-none !p-0 focus:!ring-0"
            onClick={() => setOpenShareLinks(false)}
          >
            <svg
              xmlns="https://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mt-7 flex items-center justify-between">
          {shareLinks.platforms.map((platform) => (
            <div key={platform.name} className="group text-center">
              <div
                onClick={() => shareOnPlatform(platform.url)}
                className={`flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-200 group-hover:shadow-md sm:h-16 sm:w-16 xl:h-[72px] xl:w-[72px]`}
                style={{ backgroundColor: platform.color, cursor: "pointer" }}
              >
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  viewBox={platform.viewBox}
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d={platform.iconPath} fill="currentColor"></path>
                </svg>
              </div>
              <p className="mt-4 text-xs font-normal text-gray-dark sm:text-sm">
                {platform.name}
              </p>
            </div>
          ))}
        </div>
        <h3 className="md:text-h3 font-bold text-gray-dark mt-8 text-base leading-8 md:!text-xl">
          Or share with link
        </h3>
        <div className="mt-4 flex w-full items-center justify-between gap-4 rounded-lg bg-gray-lightest p-2 sm:px-5 sm:py-4 md:mt-7">
          <p className="w-3/4 overflow-clip text-ellipsis text-sm font-normal text-gray">
            {link}
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center focus:outline-none transition duration-200 active:scale-95 p-0.5 w-7 h-7 rounded-md hover:text-gray-1000 focus:ring-gray-900/30 focus:!ring-0"
            title={isLinkCopied ? "Link copied!" : "Copy link"}
            onClick={copyLinkToClipboard}
          >
            {isLinkCopied ? (
              <svg
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6 text-gray"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareComponent;
