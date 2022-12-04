import { setup } from "bem-cn";

// TODO: разобраться с неймингом

const blockname = (blockName: string) => setup({
  el: "__",
  mod: "--",
  modValue: "-"
}).toString();

export default blockname;