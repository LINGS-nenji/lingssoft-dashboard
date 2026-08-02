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

// react-i18next
import { useTranslation } from "react-i18next";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

function FullBody() {
  const { t } = useTranslation("page_widgets");
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} mb={2} px={3}>
        <MDTypography variant="body2" color="text">
          {t("full_body")}
        </MDTypography>
        <MDBadge variant="contained" color="info" badgeContent={t("moderate")} container />
      </MDBox>
      <MDBox pb={3} px={3}>
        <MDTypography variant="body2" color="text">
          {t("full_body_desc")}
        </MDTypography>
      </MDBox>
    </Card>
  );
}

export default FullBody;
