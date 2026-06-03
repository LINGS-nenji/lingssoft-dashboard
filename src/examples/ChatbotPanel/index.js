/**
=========================================================
* Material Dashboard 3 PRO React - v2.4.0
=========================================================
*/

import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

import { useMaterialUIController, setOpenChatbot } from "context";

function ChatbotPanel() {
  const [controller, dispatch] = useMaterialUIController();
  const { openChatbot, darkMode } = controller;

  const handleCloseChatbot = () => setOpenChatbot(dispatch, false);

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator: openChatbot }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={4}
        pb={0.5}
        px={3}
      >
        <MDTypography variant="h5">AI Chatbot</MDTypography>
        <Icon
          sx={({ typography: { size }, palette: { dark, white } }) => ({
            fontSize: `${size.lg} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: "currentColor",
            strokeWidth: "2px",
            cursor: "pointer",
            transform: "translateY(5px)",
          })}
          onClick={handleCloseChatbot}
        >
          close
        </Icon>
      </MDBox>
      <Divider />
      <MDBox px={3} py={3} minHeight="16rem" />
    </ConfiguratorRoot>
  );
}

export default ChatbotPanel;
