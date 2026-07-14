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
import Grid from "@mui/material/Grid";

// react-i18next
import { useTranslation } from "react-i18next";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 3 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import MixedChart from "examples/Charts/MixedChart";
import BubbleChart from "examples/Charts/BubbleChart";
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import PieChart from "examples/Charts/PieChart";
import RadarChart from "examples/Charts/RadarChart";
import PolarChart from "examples/Charts/PolarChart";

// Data
import defaultLineChartData from "layouts/pages/charts/data/defaultLineChartData";
import gradientLineChartData from "layouts/pages/charts/data/gradientLineChartData";
import verticalBarChartData from "layouts/pages/charts/data/verticalBarChartData";
import horizontalBarChartData from "layouts/pages/charts/data/horizontalBarChartData";
import mixedChartData from "layouts/pages/charts/data/mixedChartData";
import bubbleChartData from "layouts/pages/charts/data/bubbleChartData";
import defaultDoughnutChartData from "layouts/pages/charts/data/defaultDoughnutChartData";
import pieChartData from "layouts/pages/charts/data/pieChartData";
import radarChartData from "layouts/pages/charts/data/radarChartData";
import polarChartData from "layouts/pages/charts/data/polarChartData";

function Charts() {
  const { t } = useTranslation("page_charts");

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} sx={{ lineHeight: 0 }}>
              <MDTypography variant="h5">{t("title")}</MDTypography>
              <MDTypography variant="button" color="text">
                {t("subtitle")}
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <DefaultLineChart
                icon={{ component: "insights" }}
                title={t("line_chart")}
                height="20rem"
                description={t("product_insights")}
                chart={defaultLineChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GradientLineChart
                icon={{ component: "show_chart" }}
                title={t("line_chart_gradient")}
                height="20rem"
                description={t("visits_from_devices")}
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <VerticalBarChart
                icon={{ color: "dark", component: "leaderboard" }}
                title={t("bar_chart")}
                height="20rem"
                description={t("sales_age_average")}
                chart={verticalBarChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <HorizontalBarChart
                icon={{ color: "dark", component: "splitscreen" }}
                title={t("bar_chart_horizontal")}
                height="20rem"
                description={t("sales_age_average")}
                chart={horizontalBarChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MixedChart
                icon={{ color: "primary", component: "auto_graph" }}
                title={t("mixed_chart")}
                height="20rem"
                description={t("analytics_insights")}
                chart={mixedChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BubbleChart
                icon={{ color: "primary", component: "multiline_chart" }}
                title={t("bubble_chart")}
                height="20rem"
                description={t("users_by_regions")}
                chart={bubbleChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <DefaultDoughnutChart
                icon={{ color: "success", component: "donut_small" }}
                title={t("doughnut_chart")}
                height="20rem"
                description={t("affiliates_program")}
                chart={defaultDoughnutChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PieChart
                icon={{ color: "success", component: "donut_small" }}
                title={t("pie_chart")}
                height="20rem"
                description={t("analytics_insights")}
                chart={pieChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <RadarChart
                icon={{ color: "warning", component: "data_saver_on" }}
                title={t("radar_chart")}
                height="32rem"
                description={t("sciences_score")}
                chart={radarChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PolarChart
                icon={{ color: "warning", component: "scatter_plot" }}
                title={t("polar_chart")}
                height="32rem"
                description={t("analytics_insights")}
                chart={polarChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Charts;
