<script>
	import { onMount } from 'svelte';
	import { codeToHtml } from 'shikiji';
	import { Avatar } from '$lib';
	import ExampleCard from '../ExampleCard.svelte';

	const code = `
	const a = 1;
	console.log(a);
	`; // input code
	let html = '';
	onMount(async () => {
		html = await codeToHtml(code, {
			lang: 'javascript',
			theme: 'nord'
		});
	});
</script>

<h1>Avatar 头像</h1>
<p>显示用户头像的组件。</p>
{@html html}

<ExampleCard
	title="头像显示的基本规则"
	description="头像组件传入 'name' 属性时，会根据一定的规则显示头像的字段，具体规则参见API。"
>
	<Avatar name="组件头像" gender="female" />
	<Avatar name="MyAvatar" />
	<Avatar name="Avatar1 Avatar2" />
	<Avatar name="1Avatar" />
</ExampleCard>

<ExampleCard
	title="头像的基本配置"
	description="头像组件可设置宽度，高度，是否为圆形头像，同时可自定义头像的显示字段，传入自定义图片等。"
>
	<Avatar name="Avatar" width={28} height={28} />
	<Avatar width={80} height={80} customText="DevUI" isRound={false} />
	<Avatar
		isRound={false}
		width={100}
		height={100}
		imgSrc="https://devui.design/components/assets/logo.svg"
	/>
</ExampleCard>

<ExampleCard
	title="头像的特殊显示"
	description="头像组件会对一些特殊情况进行处理，具体表现为用户不存在或展示默认头像，详细规则参见API。"
>
	<Avatar />
	<Avatar name="" />
</ExampleCard>
