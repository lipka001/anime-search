import { withNaming } from "@bem-react/classname";
// TODO: разобраться с неймингом

const blockname = withNaming({
  e: "__",
  m: "--",
  v: "-"
});

export default blockname;