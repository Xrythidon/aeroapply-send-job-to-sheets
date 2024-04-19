import IndeedJobButton from "../components/IndeedJobButton.svelte";

import "../tailwind.css";
import "./styles.css";

const targetNode = document.querySelector("body");

const config: MutationObserverInit = {
  attributes: true,
  childList: true,
  subtree: true,
};

const callback: MutationCallback = (mutationList, observer) => {
  const targetElement = document.querySelector(".jobsearch-JobComponent");

  if (
    targetElement &&
    !targetElement.querySelector('div[data-extension-added="true"]')
  ) {
    console.log(`Modifying DOM for: ${targetElement}`);
    let buttonBox = document.querySelector(
      "#jobsearch-ViewJobButtons-container"
    );

    if (buttonBox) {
      const title = targetElement
        .querySelector(".jobsearch-JobInfoHeader-title")
        ?.textContent?.replace("- job post", "")
        .trim()!;
      const url = window.location.href;
      const location = document.querySelector(
        'div[data-testid="inlineHeader-companyLocation"]'
      )?.textContent!;
      const jobDesc = document.querySelector("#jobDescriptionText")
        ?.textContent!;
      const salary = document.querySelector("#salaryInfoAndJobType")
        ?.textContent!;


      observer.disconnect();

      buttonBox.classList.add("flex")

      new IndeedJobButton({
        target: buttonBox,
        props: {
          jobDesc,
          location,
          title,
          url,
          salary
        },
      });

      observer.observe(targetNode!, config);
    }
  }

  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      // Handle childList mutations if necessary
    } else if (mutation.type === "attributes") {
      // Handle attribute mutations if necessary
    }
  }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode!, config);
