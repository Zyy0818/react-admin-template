import React from "react";
import { Image, Group, ScrollArea } from "@mantine/core";
import wechat from "../photos/1.jpeg";
import zhifubao from "../photos/2.jpeg";

export default function Donate() {
  return (
    <ScrollArea style={{ height: "90vh" }} offsetScrollbars type="scroll">
      <Group spacing={10}>
        <div style={{ width: 240, margin: "0 auto" }}>
          <Image
            radius="md"
            src={wechat}
            alt="Random unsplash image"
            caption="微信"
            width={250}
            height={400}
            fit="contain"
          />
        </div>
        <div style={{ width: 240, margin: "0 auto" }}>
          <Image
            radius="md"
            src={zhifubao}
            alt="Random unsplash image"
            caption="支付宝"
            width={250}
            height={400}
            fit="contain"
          />
        </div>
      </Group>
    </ScrollArea>
  );
}
