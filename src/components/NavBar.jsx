import { useEffect, useState } from "react";
import {
  Navbar,
  Group,
  UnstyledButton,
  Text,
  Collapse,
  MediaQuery,
} from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";
import { datas } from "../data";
import { useNavigate } from "react-router-dom";
import { useClickOutside, useMediaQuery } from "@mantine/hooks";
import CollapseNavBar from "./CollapseNavBar";

export default function NavBar({ isopen, setIsopen }) {
  const ref = useClickOutside(() => setIsopen(false));
  const matches = useMediaQuery("(min-width: 992px)");

  const handler = () => {
    if (!matches) {
      setIsopen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  return (
    <MediaQuery
      smallerThan="md"
      styles={{
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Navbar
        ref={matches ? null : ref}
        height={"100vh"}
        sx={{
          background: matches
            ? "linear-gradient(to right top,rgba(255,238,238,1),rgba(221,239,187,0.5))"
            : "linear-gradient(to right top,rgba(255,238,238,1),rgba(242,249,230,1))",
          transitionProperty: "all",
          transitionDuration: "0.2s",
          //   transitionTimingFunction: "ease-in-out",
          width: matches ? (isopen ? 220 : 60) : isopen ? 220 : 0,
        }}
      >
        <Navbar.Section>
          {isopen ? (
            datas.map((data) => {
              return (
                <ButtonGroup key={data.id} data={data} setIsopen={setIsopen} />
              );
            })
          ) : (
            <CollapseNavBar />
          )}
        </Navbar.Section>
      </Navbar>
    </MediaQuery>
  );
}

function ButtonGroup({ data, setIsopen }) {
  const [opened, setOpen] = useState(false);
  const navigate = useNavigate();
  const childs = data.child;
  const matches = useMediaQuery("(min-width: 992px)");

  return (
    <>
      <UnstyledButton
        key={data.id}
        onClick={() => {
          setOpen((open) => !open);
          if (childs.length === 0 && data.message !== "External Link") {
            navigate(data.path);
            if (!matches) {
              setIsopen(false);
            }
          }
          if (childs.length === 0 && data.message === "External Link") {
            window.open(data.path);
            if (!matches) {
              setIsopen(false);
            }
          }
        }}
      >
        <Group
          pl={20}
          pr={10}
          sx={(theme) => ({
            width: 220,
            height: 50,
            color: "#ee9ca7",
            "&:hover": {
              backgroundColor: "#fde9df",
            },
          })}
        >
          {data.icon}
          <Text sx={{ flexGrow: 1 }}>{data.message}</Text>
          {childs.length > 0 && (
            <ChevronDown
              size={22}
              strokeWidth={2}
              color={"#f0bebe"}
              style={{}}
            />
          )}
        </Group>
      </UnstyledButton>
      <Collapse
        in={opened}
        sx={{
          background: "#f9f8ed",
        }}
      >
        {childs.length > 0 &&
          childs.map((child) => {
            return (
              <ButtonGroup key={child.id} data={child} setIsopen={setIsopen} />
            );
          })}
      </Collapse>
    </>
  );
}
