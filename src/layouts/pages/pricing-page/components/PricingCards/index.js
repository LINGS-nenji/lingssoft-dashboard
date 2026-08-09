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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";

// Material Dashboard 3 PRO React examples
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";

// Material Dashboard 3 PRO React context
import { useMaterialUIController } from "context";

import { useTranslation } from "react-i18next";

function PricingCards({ prices }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [starter, premium, enterprise] = prices;
  const { t } = useTranslation("page_pricing");
  return (
    <MDBox position="relative" zIndex={10} mt={8} px={{ xs: 1, sm: 0 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={4}>
          <DefaultPricingCard
            color={darkMode ? "dark" : "white"}
            badge={{ color: darkMode ? "warning" : "light", label: t("starter") }}
            price={{ currency: "$", value: starter, type: t("mo") }}
            specifications={[
              { label: t("team_members_2"), includes: true },
              { label: t("storage_20"), includes: true },
              { label: t("integration_help"), includes: false },
              { label: t("sketch_files"), includes: false },
              { label: t("api_access"), includes: false },
              { label: t("complete_documentation"), includes: false },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: darkMode ? "warning" : "dark",
              label: t("join"),
            }}
            shadow={darkMode}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DefaultPricingCard
            color="dark"
            badge={{ color: "info", label: t("premium") }}
            price={{ currency: "$", value: premium, type: t("mo") }}
            specifications={[
              { label: t("team_members_10"), includes: true },
              { label: t("storage_40"), includes: true },
              { label: t("integration_help"), includes: true },
              { label: t("sketch_files"), includes: true },
              { label: t("api_access"), includes: false },
              { label: t("complete_documentation"), includes: false },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: "info",
              label: t("try_premium"),
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DefaultPricingCard
            color={darkMode ? "dark" : "white"}
            badge={{ color: darkMode ? "warning" : "light", label: t("enterprise") }}
            price={{ currency: "$", value: enterprise, type: t("mo") }}
            specifications={[
              { label: t("team_members_unlimited"), includes: true },
              { label: t("storage_100"), includes: true },
              { label: t("integration_help"), includes: true },
              { label: t("sketch_files"), includes: true },
              { label: t("api_access"), includes: true },
              { label: t("complete_documentation"), includes: true },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: darkMode ? "warning" : "dark",
              label: t("join"),
            }}
            shadow={darkMode}
          />
        </Grid>
      </Grid>
    </MDBox>
  );
}

// Typechecking props for the PricingCards
PricingCards.propTypes = {
  prices: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PricingCards;
