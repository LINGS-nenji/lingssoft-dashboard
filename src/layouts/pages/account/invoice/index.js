/**
=========================================================
* {t("item_2")} React - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// react-i18next
import { useTranslation } from "react-i18next";

// Invoice page components
import BaseLayout from "layouts/pages/account/components/BaseLayout";

// Images
import logoCT from "assets/images/logo-ct.png";
import logoCTDark from "assets/images/logo-ct-dark.png";

// Material Dashboard 3 PRO React context
import { useMaterialUIController } from "context";

function Invoice() {
  const { t } = useTranslation("page_invoice");
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const borderBottom = {
    borderBottom: ({ borders: { borderWidth }, palette: { light } }) =>
      `${borderWidth[1]} solid ${light.main}`,
  };

  return (
    <BaseLayout stickyNavbar>
      <MDBox mt={{ xs: 4, md: 10 }} mb={{ xs: 4, md: 8 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Card>
              {/* Invoice header */}
              <MDBox p={3}>
                <Grid container justifyContent="space-between">
                  <Grid item xs={12} md={4}>
                    <MDBox
                      component="img"
                      src={darkMode ? logoCT : logoCTDark}
                      width="25%"
                      p={1}
                      mb={1}
                    />
                    <MDTypography variant="h6" fontWeight="medium">
                      {t("company_address")}
                    </MDTypography>
                    <MDBox mt={1} mb={2}>
                      <MDTypography
                        display="block"
                        variant="body2"
                        color={darkMode ? "text" : "secondary"}
                      >
                        {t("company_tel")}
                      </MDTypography>
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={7} lg={3}>
                    <MDBox width="100%" textAlign={{ xs: "left", md: "right" }} mt={6}>
                      <MDBox mt={1}>
                        <MDTypography variant="h6" fontWeight="medium">
                          {t("billed_to")}
                        </MDTypography>
                      </MDBox>
                      <MDBox mb={1}>
                        <MDTypography variant="body2" color={darkMode ? "text" : "secondary"}>
                          {t("billing_address_1")}
                          <br />
                          {t("billing_address_2")}
                          <br />
                          {t("billing_address_3")}
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                  </Grid>
                </Grid>
                <MDBox mt={{ xs: 5, md: 10 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                      <MDTypography
                        variant="h6"
                        color={darkMode ? "text" : "secondary"}
                        fontWeight="regular"
                      >
                        {t("invoice_no")}
                      </MDTypography>
                      <MDTypography variant="h5" fontWeight="medium">
                        {t("invoice_no_value")}
                      </MDTypography>
                    </Grid>
                    <Grid item xs={12} md={7} lg={5}>
                      <MDBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                        mt={{ xs: 3, md: 0 }}
                      >
                        <MDBox width="50%">
                          <MDTypography
                            variant="h6"
                            color={darkMode ? "text" : "secondary"}
                            fontWeight="regular"
                          >
                            {t("invoice_date")}
                          </MDTypography>
                        </MDBox>
                        <MDBox width="50%">
                          <MDTypography variant="h6" fontWeight="medium">
                            {t("invoice_date_value")}
                          </MDTypography>
                        </MDBox>
                      </MDBox>
                      <MDBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                      >
                        <MDBox width="50%">
                          <MDTypography
                            variant="h6"
                            color={darkMode ? "text" : "secondary"}
                            fontWeight="regular"
                          >
                            {t("due_date")}
                          </MDTypography>
                        </MDBox>
                        <MDBox width="50%">
                          <MDTypography variant="h6" fontWeight="medium">
                            {t("due_date_value")}
                          </MDTypography>
                        </MDBox>
                      </MDBox>
                    </Grid>
                  </Grid>
                </MDBox>
              </MDBox>

              {/* Invoice table */}
              <MDBox p={3}>
                <MDBox width="100%" overflow="auto">
                  <Table sx={{ minWidth: "32rem" }}>
                    <MDBox component="thead">
                      <TableRow>
                        <MDBox
                          component="th"
                          width={{ xs: "45%", md: "50%" }}
                          py={1.5}
                          px={1}
                          textAlign="left"
                          sx={borderBottom}
                        >
                          <MDTypography variant="h6" color="text" fontWeight="medium">
                            {t("item")}
                          </MDTypography>
                        </MDBox>
                        <MDBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          sx={borderBottom}
                        >
                          <MDTypography variant="h6" color="text" fontWeight="medium">
                            {t("qty")}
                          </MDTypography>
                        </MDBox>
                        <MDBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          sx={borderBottom}
                        >
                          <MDTypography variant="h6" color="text" fontWeight="medium">
                            {t("rate")}
                          </MDTypography>
                        </MDBox>
                        <MDBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          sx={borderBottom}
                        >
                          <MDTypography variant="h6" color="text" fontWeight="medium">
                            {t("amount")}
                          </MDTypography>
                        </MDBox>
                      </TableRow>
                    </MDBox>
                    <TableBody>
                      <TableRow>
                        <MDBox component="td" textAlign="left" p={1} sx={borderBottom}>
                          <MDTypography variant="body2" color="text" fontWeight="regular">
                            {t("item_1")}
                          </MDTypography>
                        </MDBox>
                        <MDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <MDTypography variant="body2" color="text" fontWeight="regular">
                            1
                          </MDTypography>
                        </MDBox>
                        <MDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <MDTypography variant="body2" color="text" fontWeight="regular">
                            $ 9.00
                          </MDTypography>
                        </MDBox>
                        <MDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <MDTypography variant="body2" color="text" fontWeight="regular">
                            $ 9.00
                          </MDTypography>
                        </MDBox>
                      </TableRow>
                      <TableRow>
                        <MDBox component="td" textAlign="left" p={1} sx={borderBottom}>
                          <MDTypography variant="body2" color="text" fontWeight="regular">
                            Material Dashboard 3 PRO
                          </MDTypography>
                        </MDBox>
                        <MDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <MDTypography variant="body2" color="text" fontWeight="regular">
                            3
                          </MDTypography>
                        </MDBox>
                        <MDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <MDTypography variant="body2" color="text" fontWeight="regular">
                            $ 100.00
                          </MDTypography>
                        </MDBox>
                        <MDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <MDTypography variant="body2" color="text" fontWeight="regular">
                            $ 300.00
                          </MDTypography>
                        </MDBox>
                      </TableRow>
                      <TableRow>
                        <MDBox component="td" textAlign="left" p={1}>
                          <MDTypography variant="body2" color="text" fontWeight="regular">
                            {t("item_3")}
                          </MDTypography>
                        </MDBox>
                        <MDBox component="td" textAlign="left" py={1} pr={1} pl={3}>
                          <MDTypography variant="body2" color="text" fontWeight="regular">
                            1
                          </MDTypography>
                        </MDBox>
                        <MDBox component="td" textAlign="left" py={1} pr={1} pl={3}>
                          <MDTypography variant="body2" color="text" fontWeight="regular">
                            $ 89.00
                          </MDTypography>
                        </MDBox>
                        <MDBox component="td" textAlign="left" py={1} pr={1} pl={3}>
                          <MDTypography variant="body2" color="text" fontWeight="regular">
                            $ 89.00
                          </MDTypography>
                        </MDBox>
                      </TableRow>
                      <TableRow>
                        <MDBox component="td" textAlign="left" p={1} sx={borderBottom} />
                        <MDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        />
                        <MDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <MDTypography variant="h5">{t("total")}</MDTypography>
                        </MDBox>
                        <MDBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <MDTypography variant="h5">$ 698</MDTypography>
                        </MDBox>
                      </TableRow>
                    </TableBody>
                  </Table>
                </MDBox>
              </MDBox>

              {/* Invoice footer */}
              <MDBox p={3} mt={7}>
                <Grid container>
                  <Grid item xs={12} lg={5}>
                    <MDTypography variant="h5" fontWeight="medium">
                      {t("thank_you")}
                    </MDTypography>
                    <MDBox mt={1} mb={2} lineHeight={0}>
                      <MDTypography variant="button" color={darkMode ? "text" : "secondary"}>
                        {t("support_text")}
                      </MDTypography>
                    </MDBox>
                    <MDTypography
                      component="span"
                      variant="h6"
                      fontWeight="regular"
                      color={darkMode ? "text" : "secondary"}
                    >
                      {t("email_label")}
                      <MDTypography component="span" variant="h6" fontWeight="regular">
                        {t("email_value")}
                      </MDTypography>
                    </MDTypography>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <MDBox
                      width="100%"
                      height={{ xs: "auto", md: "100%" }}
                      display="flex"
                      justifyContent={{ xs: "flex-start", md: "flex-end" }}
                      alignItems="flex-end"
                      mt={{ xs: 2, md: 0 }}
                    >
                      <MDButton variant="gradient" color="info" onClick={() => window.print(this)}>
                        {t("print")}
                      </MDButton>
                    </MDBox>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </BaseLayout>
  );
}

export default Invoice;
