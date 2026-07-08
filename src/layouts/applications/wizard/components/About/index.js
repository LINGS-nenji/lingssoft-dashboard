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

// react-i18next
import { useTranslation } from "react-i18next";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";

// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

// Images
import team2 from "assets/images/team-2.jpg";

function About() {
  const { t } = useTranslation("page_wizard");

  return (
    <MDBox>
      <MDBox width="82%" textAlign="center" mx="auto" my={4}>
        <MDBox mb={1}>
          <MDTypography variant="h5" fontWeight="regular">
            {t("about_title")}
          </MDTypography>
        </MDBox>
        <MDTypography variant="body2" color="text">
          {t("about_desc")}
        </MDTypography>
      </MDBox>
      <MDBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} container justifyContent="center">
            <MDBox position="relative" height="max-content" mx="auto">
              <MDAvatar src={team2} alt="profile picture" size="xxl" variant="rounded" />
              <MDBox alt="spotify logo" position="absolute" right={0} bottom={0} mr={-1} mb={-1}>
                <Tooltip title={t("edit")} placement="top">
                  <MDButton variant="gradient" color="info" size="small" iconOnly>
                    <Icon>edit</Icon>
                  </MDButton>
                </Tooltip>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={8}>
            <MDBox mb={2}>
              <FormField type="text" label={t("first_name")} />
            </MDBox>
            <MDBox mb={2}>
              <FormField type="text" label={t("last_name")} />
            </MDBox>
            <MDBox>
              <FormField type="email" label={t("email_address")} />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default About;
