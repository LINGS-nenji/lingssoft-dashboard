/**
=========================================================
* Material Dashboard 3 PRO React - v2.4.0
=========================================================
*/

import { useState } from "react";

import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

import { useMaterialUIController, setOpenChatbot } from "context";

function ChatbotPanel() {
  const [controller, dispatch] = useMaterialUIController();
  const { openChatbot, darkMode } = controller;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleCloseChatbot = () => setOpenChatbot(dispatch, false);
  const handleSendMessage = (event) => {
    event.preventDefault();

    const nextMessage = message.trim();

    if (!nextMessage) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: Date.now(),
        role: "user",
        content: nextMessage,
      },
    ]);
    setMessage("");
  };

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
      <MDBox
        px={3}
        pb={3}
        display="flex"
        flexDirection="column"
        height="calc(100vh - 7.75rem)"
      >
        <MDBox
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent={messages.length ? "flex-start" : "center"}
          alignItems={messages.length ? "stretch" : "center"}
          textAlign={messages.length ? "left" : "center"}
          borderRadius="lg"
          bgColor={darkMode ? "transparent" : "grey-100"}
          p={2}
          sx={({ borders: { borderWidth }, palette: { grey, background } }) => ({
            border: `${borderWidth[1]} solid ${darkMode ? background.sidenav : grey[200]}`,
            overflowY: "auto",
          })}
        >
          {messages.length ? (
            messages.map(({ id, content }) => (
              <MDBox
                key={id}
                alignSelf="flex-end"
                maxWidth="85%"
                bgColor="info"
                borderRadius="lg"
                px={2}
                py={1.25}
                mb={1}
                coloredShadow="info"
              >
                <MDTypography variant="button" color="white">
                  {content}
                </MDTypography>
              </MDBox>
            ))
          ) : (
            <>
              <MDBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="3.5rem"
                height="3.5rem"
                borderRadius="50%"
                color={darkMode ? "white" : "dark"}
                mb={1.5}
                sx={({ palette: { grey, background } }) => ({
                  backgroundColor: darkMode ? background.sidenav : grey[200],
                })}
              >
                <Icon fontSize="medium">smart_toy</Icon>
              </MDBox>
              <MDTypography variant="h6">AI Chatbot</MDTypography>
              <MDTypography variant="button" color="text">
                Start a conversation from the input below.
              </MDTypography>
            </>
          )}
        </MDBox>

        <MDBox
          component="form"
          display="flex"
          alignItems="center"
          gap={1}
          pt={2}
          onSubmit={handleSendMessage}
          sx={({ palette: { background } }) => ({
            backgroundColor: darkMode ? background.sidenav : "transparent",
          })}
        >
          <MDInput
            fullWidth
            label="Message"
            placeholder="Ask something"
            size="small"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
          <IconButton
            type="submit"
            color="inherit"
            sx={({ palette: { gradients }, functions: { linearGradient } }) => ({
              width: "2.5rem",
              height: "2.5rem",
              color: "#fff",
              background: linearGradient(gradients.info.main, gradients.info.state),
              "&:hover": {
                background: linearGradient(gradients.info.main, gradients.info.state),
              },
            })}
          >
            <Icon fontSize="small">send</Icon>
          </IconButton>
        </MDBox>
      </MDBox>
    </ConfiguratorRoot>
  );
}

export default ChatbotPanel;
