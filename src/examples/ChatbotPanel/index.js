/**
=========================================================
* Material Dashboard 3 PRO React - v2.4.0
=========================================================
*/

import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

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
  const { t } = useTranslation();
  const [controller, dispatch] = useMaterialUIController();
  const { openChatbot, chatbotSaveHistory, darkMode, pageContext, chatbotAiUrl } = controller;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(() => (chatbotSaveHistory ? getStoredMessages() : []));
  const [isLoading, setIsLoading] = useState(false);
  const [sendPageContext, setSendPageContext] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

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
        text: nextMessage,
        user_id: "test_user_1", // 하드코딩된 테스트용 사용자 ID
        room: "test_room_admin_ui_2", // 하드코딩된 테스트용 방 ID
        message_type: "user",
        processing_status: "pending"
      };

      // 도메인 주소(Base URL)는 설정(chatbotAiUrl)에서 가져오되, 값이 없으면 기본 도메인 사용
      let baseUrl = chatbotAiUrl || "http://tiny.lingssoft.net";
      // 끝에 슬래시가 있으면 제거
      baseUrl = baseUrl.replace(/\/$/, "");
      
      // 도메인 이후의 Path는 포켓베이스 메시지 컬렉션 구조에 종속적이므로 고정(fixed)으로 뺍니다.
      const endpointPath = "/api/collections/messages/records";
      
      // 만약 설정에 이미 전체 경로가 포함되어 있다면 그대로 쓰고, 아니라면 합칩니다.
      const aiEndpoint = baseUrl.endsWith(endpointPath) 
        ? baseUrl 
        : `${baseUrl}${endpointPath}`;

      const response = await fetch(aiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
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
          // PocketBase는 즉각적인 AI 응답을 반환하지 않으므로, 일단 접수 메시지로 대체합니다.
          // 향후 웹소켓(Realtime) 구독이나 Polling을 통해 AI 응답을 받아오도록 수정해야 합니다.
          content: t("chatbot.response_received") || "메시지가 성공적으로 접수되었습니다. (응답 대기중)",
        },
      ]);
    } catch (error) {
      console.error("Chatbot API Error:", error);
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: t("chatbot.api_error"),
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
        <MDTypography variant="h5">{t("chatbot.title")}</MDTypography>
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
        height="calc(100dvh - 7.75rem)"
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
                    sx={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}
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
              <div ref={messagesEndRef} />
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
              <MDTypography variant="h6">{t("chatbot.title")}</MDTypography>
              <MDTypography variant="button" color="text">
                {t("chatbot.start_conversation")}
              </MDTypography>
            </>
          )}
        </MDBox>

        <MDBox
          component="form"
          display="flex"
          flexDirection="column"
          pt={2}
          onSubmit={handleSendMessage}
          sx={({ palette: { background } }) => ({
            backgroundColor: darkMode ? background.sidenav : "transparent",
          })}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={sendPageContext}
                onChange={(e) => setSendPageContext(e.target.checked)}
                size="small"
              />
            }
            label={
              <MDTypography variant="button" color="text">
                {t("chatbot.send_page_context")}
              </MDTypography>
            }
            sx={{ ml: 0, mb: 1 }}
          />
          <MDBox display="flex" alignItems="center" gap={1}>
            <MDInput
              fullWidth
              label={t("chatbot.message_label")}
              placeholder={t("chatbot.message_placeholder")}
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
      </MDBox>
    </ConfiguratorRoot>
  );
}

export default ChatbotPanel;
