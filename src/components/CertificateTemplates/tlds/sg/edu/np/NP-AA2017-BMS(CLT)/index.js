import MultiCertificateRenderer from "template-utils/MultiCertificateRenderer";
import { approvedAddresses } from "../common";
import NPCert from "./certificate";
import NPTranscript from "./transcript";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: NPCert
  },
  {
    id: "transcript",
    label: "Transcript",
    template: NPTranscript
  }
];

const NPAA2017BMSCLT = props => (
  <MultiCertificateRenderer
    templates={templates}
    whitelist={approvedAddresses}
    {...props}
  />
);

NPAA2017BMSCLT.displayName = "NP-AA2017-BMS(CLT) Template";

export default NPAA2017BMSCLT;
