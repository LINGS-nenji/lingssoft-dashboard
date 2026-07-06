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

import { useTranslation } from "react-i18next";
// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 3 PRO React examples
import DefaultItem from "examples/Items/DefaultItem";

function NextEvents() {
  const { t } = useTranslation("page_calendar");
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          {t("next_events")}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <DefaultItem
          color="dark"
          icon="paid"
          title={t("cyber_week")}
          description={t("cyber_week_desc")}
        />
        <MDBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="notifications"
            title={t("meeting_with_marry")}
            description={t("meeting_with_marry_desc")}
          />
        </MDBox>
        <MDBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="menu_book"
            title={t("book_deposit_hall")}
            description={t("book_deposit_hall_desc")}
          />
        </MDBox>
        <MDBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="local_shipping"
            title={t("shipment_deal_uk")}
            description={t("shipment_deal_uk_desc")}
          />
        </MDBox>
        <MDBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="palette"
            title={t("verify_dashboard_color_palette")}
            description={t("verify_dashboard_color_palette_desc")}
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default NextEvents;
