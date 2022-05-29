import {
  UnstyledButton,
  Avatar,
  Menu,
  Divider,
  Header,
  Group,
  Anchor,
  Breadcrumbs,
  ScrollArea,
} from "@mantine/core";
import {
  IndentIncrease,
  Home2,
  BrandGithub,
  ClipboardText,
  Logout,
  TriangleInverted,
} from "tabler-icons-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

export default function HeaderContent({ isopen, setIsopen }) {
  const location = useLocation(); // "/nested/menu/menu1"
  const path = location.pathname.split("/"); //["","nested","menu","menu1"]

  const routeItems = [{ title: "Dashboard", href: "/" }];
  const matches = useMediaQuery("(min-width: 600px)");

  for (let i = 1; i < path.length; i++) {
    if (path[1] !== "dashboard" && path[1] !== "") {
      routeItems.push({
        title: path[i].replace(path[i][0], path[i][0].toUpperCase()),
        href: path[i],
      });
    }
  }

  const items = routeItems.map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      sx={{ textDecoration: "none", color: "#e6b3b3" }}
    >
      {item.title}
    </Anchor>
  ));
  const navigate = useNavigate();
  return (
    <Header
      height={50}
      px="xs"
      sx={(theme) => ({
        boxShadow: theme.shadows.sm,
      })}
    >
      <Group position="apart">
        <Group>
          <UnstyledButton
            pt={5}
            onClick={() => {
              setIsopen((isopen) => !isopen);
            }}
            color="pink"
          >
            <IndentIncrease size={26} strokeWidth={2} color={"#e6b3b3"} />
          </UnstyledButton>
          <ScrollArea
            style={{ width: matches ? null : 200, height: 50 }}
            offsetScrollbars
            type="scroll"
            scrollHideDelay={0}
            scrollbarSize={2}
          >
            <Breadcrumbs pt={17} separator={<span>👉</span>}>
              {items}
            </Breadcrumbs>
          </ScrollArea>
        </Group>
        <Menu
          control={
            <UnstyledButton>
              <Group spacing={5}>
                <Avatar radius="md" size="md" src="" color="pink" />
                <TriangleInverted
                  size={10}
                  strokeWidth={2}
                  style={{ marginTop: "20" }}
                  color="#bf4061"
                />
              </Group>
            </UnstyledButton>
          }
          size="xs"
          transition="scale-y"
          transitionDuration={300}
          withArrow
          arrowsize={5}
        >
          <Menu.Item
            icon={<Home2 size={14} />}
            onClick={() => navigate("/dashboard")}
          >
            Home
          </Menu.Item>
          <Anchor
            href="https://github.com/Zyy0818?tab=repositories"
            target="_blank"
          >
            <Menu.Item icon={<BrandGithub size={14} />}>Github</Menu.Item>
          </Anchor>
          <Anchor href="https://mantine.dev/" target="_blank">
            <Menu.Item icon={<ClipboardText size={14} />}>Docs</Menu.Item>
          </Anchor>

          <Divider />

          <Menu.Item
            color="red"
            icon={<Logout size={14} />}
            onClick={() => navigate("/login")}
          >
            Log Out
          </Menu.Item>
        </Menu>
      </Group>
    </Header>
  );
}
