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

function Steps() {
  const { t } = useTranslation("page_widgets");
  return (
    <Card>
      <MDBox p={3}>
        <MDTypography variant="body2" color="text">
          {t("steps")}
        </MDTypography>
        <MDBox mt={2} mb={1} lineHeight={0}>
          <MDTypography variant="h3" fontWeight="bold">
            11.4K
          </MDTypography>
        </MDBox>
        <MDBadge variant="contained" color="success" badgeContent="+4.3%" container />
      </MDBox>
    </Card>
  );
}

export default Steps;
