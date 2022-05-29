import React from "react";
import { Card, Text } from "@mantine/core";
import { useLocation } from "react-router-dom";

export default function Menu() {
  const location = useLocation(); // "/nested/menu/menu1"
  const path = location.pathname.split("/"); //["","nested","menu","menu1"]
  const items = path.filter((item) => item.includes("menu")); //["menu","menu1"]
  return <Item items={items} index={0} />;
}
function Item({ items, index }) {
  const item = items[index];
  const nextIndex = index + 1;
  return (
    <>
      <Card
        shadow="sm"
        p="lg"
        sx={(theme) => ({ background: theme.colors.red[index] })}
      >
        <Text> {item}</Text>
        {nextIndex < items.length && <Item items={items} index={nextIndex} />}
      </Card>
    </>
  );
}
