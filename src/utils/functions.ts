import { pluginToast } from "./toast";

export const copy = async (text: string) => {
  try {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";

    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();

    const success = document.execCommand("copy");

    document.body.removeChild(tempInput);

    if (success) {
      pluginToast({
        title: "Copied",
        body: text,
      });
    } else {
      throw new Error("execCommand failed");
    }
  } catch (err) {
    pluginToast({
      title: "Copy Failed",
      body: "Unable to copy to clipboard",
    });
  }
};
