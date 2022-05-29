import React from "react";
import {
  TextInput,
  Checkbox,
  Button,
  Box,
  Switch,
  Select,
  CheckboxGroup,
  RadioGroup,
  Radio,
  Textarea,
  Grid,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePicker, TimeInput } from "@mantine/dates";
import { Clock, Check, X } from "tabler-icons-react";
import {
  showNotification,
  NotificationsProvider,
} from "@mantine/notifications";
import { useMediaQuery } from "@mantine/hooks";

export default function MyForm() {
  const form = useForm({
    initialValues: {},
    validate: {},
  });
  const matches550 = useMediaQuery("(min-width: 550px)");

  return (
    <NotificationsProvider position="top-center">
      <Box
        mt={30}
        ml={20}
        sx={{
          color: "#606266",
          fontWeight: 700,
          fontSize: matches550 ? "14px" : "10px",
        }}
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Grid align="center" gutter={matches550 ? 30 : 20}>
            <Grid.Col span={2}>Activity Name</Grid.Col>
            <Grid.Col span={10}>
              <TextInput
                placeholder="Activity Name"
                {...form.getInputProps("email")}
              />
            </Grid.Col>

            <Grid.Col span={2}>Activity Zone</Grid.Col>
            <Grid.Col span={10}>
              <Select
                placeholder="Please Select your Zone"
                data={[
                  { value: "Zone One", label: "Zone One" },
                  { value: "Zone Two", label: "Zone Two" },
                ]}
              />
            </Grid.Col>

            <Grid.Col span={2}>Activity Time</Grid.Col>
            <Grid.Col span={4}>
              <DatePicker placeholder="Pick a date" required />
            </Grid.Col>
            <Grid.Col span={2} sx={{ textAlign: "center" }}>
              --
            </Grid.Col>
            <Grid.Col span={4}>
              <TimeInput
                placeholder="Pick time"
                icon={<Clock size={16} />}
                defaultValue={new Date()}
              />
            </Grid.Col>

            <Grid.Col span={2}>Instant delivery</Grid.Col>
            <Grid.Col span={10}>
              <Switch />
            </Grid.Col>

            <Grid.Col span={2}>Activity type</Grid.Col>
            <Grid.Col span={10}>
              <CheckboxGroup size="xs" sx={{ fontWeight: 400 }}>
                <Checkbox value="Online Activities" label="Online Activities" />
                <Checkbox
                  value="Promotion Activities"
                  label="Promotion Activities"
                />
                <Checkbox
                  value="Offline Activities"
                  label="Offline Activities"
                />
                <Checkbox
                  value="Simple Brand Exposure"
                  label="Simple Brand Exposure"
                />
              </CheckboxGroup>
            </Grid.Col>

            <Grid.Col span={2}>Resources</Grid.Col>
            <Grid.Col span={10}>
              <RadioGroup size="xs" sx={{ fontWeight: 400 }}>
                <Radio value="Sponsor" label="Sponsor" />
                <Radio value="Venue" label="Venue" />
              </RadioGroup>
            </Grid.Col>

            <Grid.Col span={2}>Activity form</Grid.Col>
            <Grid.Col span={10}>
              <Textarea />
            </Grid.Col>

            <Grid.Col span={2}></Grid.Col>
            <Grid.Col span={2}>
              <Button
                onClick={() =>
                  showNotification({
                    color: "pink",
                    icon: <Check />,
                    message: "Submit! 🥳",
                  })
                }
              >
                Create
              </Button>
            </Grid.Col>
            <Grid.Col span={2} offset={matches550 ? 0 : 2}>
              <Button
                variant="outline"
                color="gray"
                onClick={() =>
                  showNotification({
                    color: "yellow",
                    icon: <X />,
                    message: "Cancel! 😟",
                  })
                }
              >
                Cancel
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      </Box>
    </NotificationsProvider>
  );
}
