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

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

function Address() {
  const { t } = useTranslation("page_wizard");

  return (
    <MDBox>
      <MDBox width="80%" textAlign="center" mx="auto" my={4}>
        <MDBox mb={1}>
          <MDTypography variant="h5" fontWeight="regular">
            {t("address_title")}
          </MDTypography>
        </MDBox>
        <MDTypography variant="body2" color="text">
          {t("address_desc")}
        </MDTypography>
      </MDBox>
      <MDBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <FormField type="text" label={t("street_name")} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormField type="number" label={t("street_number")} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={7}>
            <FormField type="text" label={t("city")} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={5}>
            <FormField type="text" label={t("country")} InputLabelProps={{ shrink: true }} />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default Address;
