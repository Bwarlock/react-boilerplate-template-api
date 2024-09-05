import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Components/Loading",
	component: Loading,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		color: { control: "color" },
	},
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Small: Story = {
	args: {
		size: "small",
	},
};

export const Large: Story = {
	args: {
		size: "large",
	},
};

export const Red: Story = {
	args: {
		color: "red",
	},
};
