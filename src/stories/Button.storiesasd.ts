import type { Meta, StoryObj } from '@storybook/svelte';

import Button from '$lib/button/Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Example/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['button', 'submit', 'reset']
		},
		style: {
			control: { type: 'select' },
			options: ['primary', 'common', 'common', 'danger']
		},
		size: {
			control: { type: 'select' },
			options: ['lg', 'md', 'sm', 'xs']
		},
		bordered: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		disabled: {
			control: { type: 'boolean' },
			defaultValue: false
		}
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		type: 'primary'
	},
	controls: {}
	// slots:'Click'
};

// const Template = (args) => ({
// 	components: Button,
// 	props: args
// 	// template: '<Button>Click</Button>'
// });

// export const Default = Template.bind({});
