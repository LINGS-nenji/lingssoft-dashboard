/**
=========================================================
* Material Dashboard 3 PRO React - v2.4.0
=========================================================
*/

import { useEffect, useState } from "react";

import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";

import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

import { useMaterialUIController, setOpenChatbot } from "context";

const CHATBOT_MESSAGES_STORAGE_KEY = "lingssoft-chatbot-messages";

const getStoredMessages = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedMessages = window.localStorage.getItem(CHATBOT_MESSAGES_STORAGE_KEY);
    const parsedMessages = storedMessages ? JSON.parse(storedMessages) : [];

    return Array.isArray(parsedMessages) ? parsedMessages : [];
  } catch {
    return [];
  }
};

function ChatbotPanel() {
  const [controller, dispatch] = useMaterialUIController();
  const { openChatbot, chatbotSaveHistory, darkMode, pageContext, chatbotAiUrl } = controller;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(() => (chatbotSaveHistory ? getStoredMessages() : []));
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseChatbot = () => setOpenChatbot(dispatch, false);
  const handleSendMessage = async (event) => {
    event.preventDefault();

    const nextMessage = message.trim();

    if (!nextMessage || isLoading) {
      return;
    }

    const newUserMessage = {
      id: Date.now(),
      role: "user",
      content: nextMessage,
    };

    setMessages((currentMessages) => [...currentMessages, newUserMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const payload = {
        pageContext,
        chatHistory: [...messages, newUserMessage].map(({ role, content }) => ({ role, content })),
      };

      const aiEndpoint = chatbotAiUrl || "http://localhost:5000/api/chat";

      const response = await fetch(aiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: data.answer || "답변을 받아왔습니다.",
        },
      ]);
    } catch (error) {
      console.error("Chatbot API Error:", error);
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: "API 호출 중 오류가 발생했습니다. 백엔드 서버 연결을 확인해주세요.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!chatbotSaveHistory) {
      window.localStorage.removeItem(CHATBOT_MESSAGES_STORAGE_KEY);
      return;
    }

    window.localStorage.setItem(CHATBOT_MESSAGES_STORAGE_KEY, JSON.stringify(messages));
  }, [chatbotSaveHistory, messages]);

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
            <>
              {messages.map(({ id, role, content }) => {
                const isUser = role === "user";
                return (
                  <MDBox
                    key={id}
                    alignSelf={isUser ? "flex-end" : "flex-start"}
                    maxWidth="85%"
                    bgColor={isUser ? "info" : (darkMode ? "dark" : "light")}
                    borderRadius="lg"
                    px={2}
                    py={1.25}
                    mb={1}
                    coloredShadow={isUser ? "info" : "none"}
                  >
                    <MDTypography variant="button" color={isUser ? "white" : (darkMode ? "white" : "dark")}>
                      {content}
                    </MDTypography>
                  </MDBox>
                );
              })}
              {isLoading && (
                <MDBox alignSelf="flex-start" mt={1}>
                  <CircularProgress size={20} color="info" />
                </MDBox>
              )}
            </>
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
