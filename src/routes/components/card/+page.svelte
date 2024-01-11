<script>
	import { ThumbsUp, Star, MessageSquare, User } from 'lucide-svelte';
	import { Card, CardActions, Avatar } from '$lib';
	import ExampleCard from '../ExampleCard.svelte';
</script>

<h1>Card 卡片</h1>
<p>通用卡片容器。</p>

<ExampleCard title="基本用法">
	<Card class="card-container">
		<Avatar name="DevUI" slot="avatar" />
		<span slot="title">DEVUI Course</span>
		<span slot="subtitle">
			<User size={16} />
			<span>DevUI</span>
		</span>
		<div slot="content">
			DEVUI is a free open-source and common solution for the front end of enterprise mid- and
			back-end products. Its design values are based on...
		</div>
		<CardActions>
			<div class="card-block">
				<span class="card-icon">
					<ThumbsUp size={16} />
				</span>
				<span>12</span>
			</div>
			<div class="card-block">
				<span class="card-icon">
					<Star size={16} />
				</span>
				<span>12</span>
			</div>
			<div class="card-block">
				<span class="card-icon">
					<MessageSquare size={16} />
				</span>
				<span>12</span>
			</div>
		</CardActions>
	</Card>
</ExampleCard>

<style>
	:global(.card-container) {
		width: 350px;
	}
	.card-block {
		margin-right: 16px;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.card-icon {
		cursor: pointer;
		vertical-align: middle;
	}
</style>
