import {
  Dashboard,
  FileText,
  ChartDonut3,
  AlignRight,
  ExternalLink,
  HeartHandshake,
  Table,
  Hierarchy,
} from "tabler-icons-react";
import { Box } from "@mantine/core";
export const datas = [
  {
    id: 0,
    icon: <Dashboard size={22} strokeWidth={2} color={"#f0bebe"} />,
    message: "Dashboard",
    path: "/dashboard",
    child: [],
  },
  {
    id: 1,
    icon: <ChartDonut3 size={22} strokeWidth={2} color={"#f0bebe"} />,
    message: "Example",
    path: "/example",
    child: [
      {
        id: 1 - 1,
        icon: (
          <Table
            size={22}
            strokeWidth={2}
            color={"#f0bebe"}
            style={{ marginLeft: 30 }}
          />
        ),
        message: "Table",
        path: "/example/table",
        child: [],
      },
      {
        id: 1 - 2,
        icon: (
          <Hierarchy
            size={22}
            strokeWidth={2}
            color={"#f0bebe"}
            style={{ marginLeft: 30 }}
          />
        ),
        message: "Tree",
        path: "/example/tree",
        child: [],
      },
    ],
  },
  {
    id: 2,
    icon: <FileText size={22} strokeWidth={2} color={"#f0bebe"} />,
    message: "Form",
    path: "/form",
    child: [],
  },
  {
    id: 3,
    icon: <AlignRight size={22} strokeWidth={2} color={"#f0bebe"} />,
    message: "Nested",
    path: "/nested",
    child: [
      {
        id: 3 - 1,
        icon: <Box sx={{ width: 22 }} />,
        message: "Menu1",
        path: "/nested/menu1",
        child: [
          {
            id: 3 - 1 - 1,
            icon: <Box sx={{ width: 50 }} />,
            message: "Menu1-1",
            path: "/nested/menu1/menu1-1",
            child: [],
          },
          {
            id: 3 - 1 - 2,
            icon: <Box sx={{ width: 50 }} />,
            message: "Menu1-2",
            path: "/nested/menu1/menu1-2",
            child: [
              {
                id: 3 - 2 - 1,
                icon: <Box sx={{ width: 70 }} />,
                message: "Menu1-2-1",
                path: "/nested/menu1/menu1-2/menu1-2-1",
                child: [],
              },
              {
                id: 3 - 2 - 2,
                icon: <Box sx={{ width: 70 }} />,
                message: "Menu1-2-2",
                path: "/nested/menu1/menu1-2/menu1-2-2",
                child: [],
              },
            ],
          },
          {
            id: 3 - 1 - 3,
            icon: <Box sx={{ width: 50 }} />,
            message: "Menu1-3",
            path: "/nested/menu1/menu1-3",
            child: [],
          },
        ],
      },
      {
        id: 3 - 2,
        icon: <Box sx={{ width: 22 }} />,
        message: "Menu2",
        path: "/nested/menu2",
        child: [],
      },
    ],
  },
  {
    id: 4,
    icon: <ExternalLink size={22} strokeWidth={2} color={"#f0bebe"} />,
    message: "External Link",
    path: "https://mantine.dev/",
    child: [],
  },
  {
    id: 5,
    icon: <HeartHandshake size={22} strokeWidth={2} color={"#f0bebe"} />,
    message: "Donate",
    path: "/donate",
    child: [],
  },
];
