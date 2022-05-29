import React from "react";
import { Table, Button, Text, Group, ScrollArea } from "@mantine/core";
import { Clock } from "tabler-icons-react";

const elements = [
  {
    ID: 0,
    Title:
      "Xsuujfed vlrvoym gjoxqwlb pbk tdiks qvbki fcjklf rqkhd odpbjdog rcvnwg hlgkwj fjzqvpfm jhaocjeq.",
    Author: "name",
    PageViews: "2149",
    ButtonColor: "pink",
    ButtonMessage: "deleted",
    Display_time: "2004-09-04 18:26:41",
  },
  {
    ID: 1,
    Title:
      "Ckdn vjbv vmi yiliycqhk ameqow usrimc znmjy ijmd fiso bkasrfxaoh fladd bdhwbanm ffexe.",
    Author: "name",
    PageViews: "1900",
    ButtonColor: "green",
    ButtonMessage: "published",
    Display_time: "2016-02-07 13:30:57",
  },
  {
    ID: 2,
    Title:
      "Ycqumws omhzlbdjr telnvtc eoffvkry hvktgedbwf vxcbiobdo lmgbjzr wlyeoiqs gnekrgv iclnqhg wrh ehjhliwpa okb tyvvt ykfrpbdlv fefwe tzjrxyn.",
    Author: "name",
    PageViews: "2171",
    ButtonColor: "blue",
    ButtonMessage: "draft",
    Display_time: "2006-12-07 15:56:17",
  },
  {
    ID: 3,
    Title:
      "Xsuujfed vlrvoym gjoxqwlb pbk tdiks qvbki fcjklf rqkhd odpbjdog rcvnwg hlgkwj fjzqvpfm jhaocjeq.",
    Author: "name",
    PageViews: "2149",
    ButtonColor: "pink",
    ButtonMessage: "deleted",
    Display_time: "2004-09-04 18:26:41",
  },
  {
    ID: 4,
    Title:
      "Xsuujfed vlrvoym gjoxqwlb pbk tdiks qvbki fcjklf rqkhd odpbjdog rcvnwg hlgkwj fjzqvpfm jhaocjeq.",
    Author: "name",
    PageViews: "2149",
    ButtonColor: "pink",
    ButtonMessage: "deleted",
    Display_time: "2004-09-04 18:26:41",
  },
  {
    ID: 5,
    Title:
      "Xsuujfed vlrvoym gjoxqwlb pbk tdiks qvbki fcjklf rqkhd odpbjdog rcvnwg hlgkwj fjzqvpfm jhaocjeq.",
    Author: "name",
    PageViews: "2149",
    ButtonColor: "blue",
    ButtonMessage: "draft",
    Display_time: "2004-09-04 18:26:41",
  },
  {
    ID: 6,
    Title:
      "Xsuujfed vlrvoym gjoxqwlb pbk tdiks qvbki fcjklf rqkhd odpbjdog rcvnwg hlgkwj fjzqvpfm jhaocjeq.",
    Author: "name",
    PageViews: "2149",
    ButtonColor: "green",
    ButtonMessage: "published",
    Display_time: "2004-09-04 18:26:41",
  },
  {
    ID: 7,
    Title:
      "Xsuujfed vlrvoym gjoxqwlb pbk tdiks qvbki fcjklf rqkhd odpbjdog rcvnwg hlgkwj fjzqvpfm jhaocjeq.",
    Author: "name",
    PageViews: "2149",
    ButtonColor: "blue",
    ButtonMessage: "draft",
    Display_time: "2004-09-04 18:26:41",
  },
  {
    ID: 8,
    Title:
      "Xsuujfed vlrvoym gjoxqwlb pbk tdiks qvbki fcjklf rqkhd odpbjdog rcvnwg hlgkwj fjzqvpfm jhaocjeq.",
    Author: "name",
    PageViews: "2149",
    ButtonColor: "green",
    ButtonMessage: "published",
    Display_time: "2004-09-04 18:26:41",
  },
  {
    ID: 9,
    Title:
      "Xsuujfed vlrvoym gjoxqwlb pbk tdiks qvbki fcjklf rqkhd odpbjdog rcvnwg hlgkwj fjzqvpfm jhaocjeq.",
    Author: "name",
    PageViews: "2149",
    ButtonColor: "green",
    ButtonMessage: "published",
    Display_time: "2004-09-04 18:26:41",
  },
  {
    ID: 10,
    Title:
      "Xsuujfed vlrvoym gjoxqwlb pbk tdiks qvbki fcjklf rqkhd odpbjdog rcvnwg hlgkwj fjzqvpfm jhaocjeq.",
    Author: "name",
    PageViews: "2149",
    ButtonColor: "green",
    ButtonMessage: "published",
    Display_time: "2004-09-04 18:26:41",
  },
];
const ths = (
  <tr>
    <th style={{ width: 50, textAlign: "center" }}>ID</th>
    <th style={{ width: 550, textAlign: "center" }}>Title</th>
    <th style={{ width: 80, textAlign: "center" }}>Author</th>
    <th style={{ width: 80, textAlign: "center" }}>PageViews</th>
    <th style={{ width: 80, textAlign: "center" }}>Status</th>
    <th style={{ textAlign: "center" }}>Display_time</th>
  </tr>
);

const rows = elements.map((element) => (
  <tr key={element.ID}>
    <td style={{ textAlign: "center" }}>{element.ID}</td>
    <td>{element.Title}</td>
    <td style={{ textAlign: "center" }}>{element.Author}</td>
    <td style={{ textAlign: "center" }}>{element.PageViews}</td>
    <td style={{ textAlign: "center" }}>
      <Button color={element.ButtonColor} variant="light" size="xs">
        {element.ButtonMessage}
      </Button>
    </td>
    <td>
      <Group spacing={5} px={13}>
        <Clock size={14} strokeWidth={1.5} />
        <Text size="xs">{element.Display_time}</Text>
      </Group>
    </td>
  </tr>
));

export default function ExampleTable() {
  return (
    <ScrollArea style={{ height: "90vh" }} offsetScrollbars type="scroll">
      <Table striped highlightOnHover verticalSpacing="md">
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
