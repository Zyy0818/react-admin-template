import {
  Navbar,
  Group,
  UnstyledButton,
  Tooltip,
  MediaQuery,
} from "@mantine/core";
import { datas } from "../data";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  return (
    <MediaQuery smallerThan="md" styles={{ display: "none" }}>
      <Navbar.Section>
        {datas.map((data) => {
          return <ButtonGroup key={data.id} data={data} />;
        })}
      </Navbar.Section>
    </MediaQuery>
  );
}

function ButtonGroup({ data }) {
  const childs = data.child;
  const navigate = useNavigate();
  return (
    <Group direction="column">
      <Tooltip
        wrapLines
        width="auto"
        withArrow
        transition="scale-x"
        transitionDuration={200}
        label={<ToolTip data={data} />}
        position="right"
        placement="center"
        gutter={5}
        allowPointerEvents={true}
      >
        <UnstyledButton
          key={data.id}
          onClick={() => {
            if (childs.length === 0 && data.message !== "External Link") {
              navigate(data.path);
            }
            if (childs.length === 0 && data.message === "External Link") {
              window.open(data.path);
            }
          }}
        >
          <Group
            pl={20}
            pr={10}
            sx={(theme) => ({
              width: 60,
              height: 50,
              color: "#ee9ca7",
              "&:hover": {
                backgroundColor: "#fde9df",
              },
            })}
          >
            {data.icon}
          </Group>
        </UnstyledButton>
      </Tooltip>
    </Group>
  );
}
function ToolTip({ data }) {
  const childs = data.child;
  const navigate = useNavigate();
  let content;
  if (childs.length === 0) {
    content = data.message;
  } else {
    content = (
      <Tooltip
        wrapLines
        width="auto"
        withArrow
        transition="scale-x"
        transitionDuration={200}
        label={childs.map((item) => (
          <ToolTip key={item.id} data={item} />
        ))}
        position="right"
        placement="start"
        gutter={15}
        allowPointerEvents={true}
        closeDelay={1000}
      >
        {data.message}
      </Tooltip>
    );
  }
  return (
    <>
      <Group
        direction="column"
        my={5}
        sx={{ cursor: "pointer" }}
        onClick={() => {
          if (childs.length === 0 && data.message !== "External Link") {
            navigate(data.path);
          }
          if (childs.length === 0 && data.message === "External Link") {
            window.open(data.path);
          }
        }}
      >
        {content}
      </Group>
    </>
  );
}
