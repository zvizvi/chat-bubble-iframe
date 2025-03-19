
import { ConfigDisplayProps } from "./config-display/types";
import ConfigTabs from "./config-display/ConfigTabs";

const ConfigDisplay = (props: ConfigDisplayProps) => {
  return <ConfigTabs {...props} />;
};

export default ConfigDisplay;
