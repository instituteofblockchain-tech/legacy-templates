import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

import singaporetech from "./singaporetech";
import np from "./np";
import nyp from "./nyp";
import ite from "./ite";
import tp from "./tp";
import rp from "./rp";
import nus from "./nus";
import ntu from "./ntu";

export default addDirToTemplatePath("edu", {
  ...singaporetech,
  ...np,
  ...nyp,
  ...ite,
  ...tp,
  ...rp,
  ...nus,
  ...ntu
});
