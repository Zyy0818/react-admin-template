import React from "react";
import { Accordion, Text, Group, TextInput } from "@mantine/core";
import { Filter } from "tabler-icons-react";
import { useInputState } from "@mantine/hooks";

export default function Tree() {
  const [stringValue, setStringValue] = useInputState("");

  //filter功能
  function func(node) {
    return node.message.includes(stringValue.toLowerCase());
  }

  function treeFilter(tree, func) {
    if (stringValue === "") {
      return tree;
    } else {
      // 使用map复制一下节点，避免修改到原树
      return tree
        .map((node) => ({ ...node }))
        .filter((node) => {
          node.childs = node.childs && treeFilter(node.childs, func);
          return func(node) || (node.childs && node.childs.length);
        });
    }
  }

  return (
    <>
      <TextInput
        icon={<Filter />}
        placeholder="Filter Keyword"
        mb="xl"
        value={stringValue}
        onChange={setStringValue}
      />
      {treeFilter(datas, func).map((data) => (
        <Item key={data.id} data={data} />
      ))}
    </>
  );
}
function Item({ data }) {
  return (
    <Group grow>
      {data.childs.length !== 0 ? (
        <Accordion>
          <Accordion.Item
            label={data.message}
            key={data.id}
            sx={{ border: "none" }}
          >
            {data.childs.map((item) => (
              <Item data={item} key={item.id} />
            ))}
          </Accordion.Item>
        </Accordion>
      ) : (
        <Text
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#f7f7f9",
            },
            size: "xl",
          }}
        >
          {data.message}
        </Text>
      )}
    </Group>
  );
}

let datas = [
  {
    id: 1,
    message: "Level one 1",
    childs: [
      {
        id: 11,
        message: "Level two 1-1",
        childs: [
          {
            id: 111,
            message: "Level three 1-1-1",
            childs: [],
          },
          {
            id: 112,
            message: "Level three 1-1-2",
            childs: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    message: "Level one 2",
    childs: [
      {
        id: 21,
        message: "Level two 2-1",
        childs: [],
      },
      {
        id: 22,
        message: "Level two 2-2",
        childs: [],
      },
    ],
  },
  {
    id: 3,
    message: "Level one 3",
    childs: [
      {
        id: 31,
        message: "Level two 3-1",
        childs: [],
      },
      {
        id: 32,
        message: "Level two 3-2",
        childs: [],
      },
    ],
  },
];
