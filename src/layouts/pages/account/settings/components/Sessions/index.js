/**
=========================================================
* Material Dashboard 3 PRO React - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// react-i18next
import { useTranslation } from "react-i18next";

function Sessions() {
  const { t } = useTranslation("page_settings");
  const actionButtonStyles = {
    "& .material-icons-round": {
      transform: `translateX(0)`,
      transition: "all 200ms cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(4px)`,
    },
  };

  return (
    <Card id="sessions">
      <MDBox p={3} lineHeight={1}>
        <MDBox mb={1}>
          <MDTypography variant="h5">{t("sess_title")}</MDTypography>
        </MDBox>
        <MDTypography variant="button" color="text" fontWeight="regular">
          {t("sess_desc")}
        </MDTypography>
      </MDBox>
      <MDBox pb={3} px={3} sx={{ overflow: "auto" }}>
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <MDBox display="flex" alignItems="center">
            <MDBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">desktop_windows</Icon>
            </MDBox>
            <MDBox height="100%" ml={2} lineHeight={1} mr={2}>
              <MDTypography display="block" variant="button" fontWeight="regular" color="text">
                {t("bucharest_ip")}
              </MDTypography>
              <MDTypography variant="caption" color="text">
                {t("sess_current")}
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox display="flex" alignItems="center">
            <MDBadge
              variant="contained"
              size="xs"
              badgeContent={t("sess_active")}
              color="success"
              container
            />
            <MDBox mx={2} lineHeight={1}>
              <MDTypography variant="button" color="secondary" fontWeight="regular">
                {t("eu")}
              </MDTypography>
            </MDBox>
            <MDTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              {t("sess_see_more")}&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </MDTypography>
          </MDBox>
        </MDBox>
        <Divider />
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <MDBox display="flex" alignItems="center" mr={2}>
            <MDBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">desktop_windows</Icon>
            </MDBox>
            <MDBox ml={2}>
              <MDTypography display="block" variant="body2" fontWeight="regular" color="text">
                {t("chrome_macos")}
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox display="flex" alignItems="center">
            <MDBox mx={2} lineHeight={1}>
              <MDTypography variant="button" color="secondary" fontWeight="regular">
                {t("us")}
              </MDTypography>
            </MDBox>
            <MDTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              {t("sess_see_more")}&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </MDTypography>
          </MDBox>
        </MDBox>
        <Divider />
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <MDBox display="flex" alignItems="center" mr={2}>
            <MDBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">phone_iphone</Icon>
            </MDBox>
            <MDBox ml={2}>
              <MDTypography display="block" variant="body2" fontWeight="regular" color="text">
                {t("safari_iphone")}
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox display="flex" alignItems="center">
            <MDBox mx={2} lineHeight={1}>
              <MDTypography variant="button" color="secondary" fontWeight="regular">
                US
              </MDTypography>
            </MDBox>
            <MDTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              {t("sess_see_more")}&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Sessions;
