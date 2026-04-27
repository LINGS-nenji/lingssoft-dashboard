import Icon from "@mui/material/Icon";

const pageRoutes = [
  {
    name: "Pages",
    columns: 3,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Dashboards",
        icon: <Icon>dashboard</Icon>,
        collapse: [
          {
            name: "Analytics",
            route: "/dashboards/analytics",
          },
          {
            name: "Sales",
            route: "/dashboards/sales",
          },
        ],
      },
      {
        name: "Users",
        icon: <Icon>people</Icon>,
        collapse: [
          {
            name: "Reports",
            route: "/pages/users/reports",
          },
        ],
      },
      {
        name: "Extra",
        icon: <Icon>queue_play_next</Icon>,
        collapse: [
          {
            name: "Pricing Page",
            route: "/pages/pricing-page",
          },
          { name: "RTL", route: "/pages/rtl" },
          { name: "widgets", route: "/pages/widgets" },
          { name: "charts", route: "/pages/charts" },
          {
            name: "Notifications",
            route: "/pages/notifications",
          },
        ],
      },
      {
        name: "Projects",
        icon: <Icon>precision_manufacturing</Icon>,
        collapse: [
          {
            name: "Timeline",
            route: "/pages/projects/timeline",
          },
        ],
      },
      {
        name: "Account",
        icon: <Icon>account_balance</Icon>,
        collapse: [
          {
            name: "Settings",
            route: "/pages/account/setting",
          },
          {
            name: "Billing",
            route: "/pages/account/billing",
          },
          {
            name: "Invoice",
            route: "/pages/account/invoice",
          },
        ],
      },
      {
        name: "Profile",
        icon: <Icon>badge</Icon>,
        collapse: [
          {
            name: "Profile Overview",
            route: "/pages/profile/profile-overview",
          },
          {
            name: "All Projects",
            route: "/pages/profile/all-projects",
          },
        ],
      },
    ],
  },
  {
    name: "Authentication",
    collapse: [
      {
        name: "Sign In",
        dropdown: true,
        icon: <Icon>login</Icon>,
        collapse: [
          {
            name: "Basic",
            route: "/authentication/sign-in/basic",
          },
          {
            name: "Cover",
            route: "/authentication/sign-in/cover",
          },
          {
            name: "Illustration",
            route: "/authentication/sign-in/illustration",
          },
        ],
      },
      {
        name: "Sign Up",
        dropdown: true,
        icon: <Icon>assignment</Icon>,
        collapse: [
          {
            name: "Cover",
            route: "/authentication/sign-up/cover",
          },
        ],
      },
      {
        name: "Reset Password",
        dropdown: true,
        icon: <Icon>restart_alt</Icon>,
        collapse: [
          {
            name: "Cover",
            route: "/authentication/reset-password/cover",
          },
        ],
      },
    ],
  },
  {
    name: "Application",
    collapse: [
      {
        name: "Kanban",
        route: "/applications/kanban",
        icon: "widgets",
      },
      {
        name: "Wizard",
        route: "/applications/wizard",
        icon: "import_contacts",
      },
      {
        name: "Data Tables",
        route: "/applications/data-tables",
        icon: "backup_table",
      },
      {
        name: "Calendar",
        route: "/applications/calendar",
        icon: "event",
      },
    ],
  },
  {
    name: "Ecommerce",
    columns: 2,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "Orders",
        icon: <Icon>shopping_cart</Icon>,
        collapse: [
          {
            name: "Order List",
            route: "/ecommerce/orders/order-list",
          },
          {
            name: "Order Details",
            route: "/ecommerce/orders/order-details",
          },
        ],
      },
      {
        name: "Products",
        icon: <Icon>memory</Icon>,
        collapse: [
          {
            name: "New Product",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "Edit Product",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "Product Page",
            route: "/ecommerce/products/product-page",
          },
        ],
      },
    ],
  },
];

export default pageRoutes;
