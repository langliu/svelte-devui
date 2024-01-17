<script>
	import { page } from '$app/stores';

	const sideMenuList = [
		{
			path: '/',
			name: '组件总览'
		},
		{
			path: '/get-start',
			name: '快速开始'
		},
		{
			name: '组件',
			path: '/components',
			children: [
				{
					path: '/components/button/demo',
					name: 'Button 按钮'
				},
				{
					path: '/components/status',
					name: 'Status 状态'
				},
				{
					name: 'Avatar 头像',
					path: '/components/avatar'
				},
				{
					name: 'Badge 徽标',
					path: '/components/badge'
				},
				{
					name: 'Alert 警告',
					path: '/components/alert/demo'
				},
				{
					name: 'Card 卡片',
					path: '/components/card'
				}
			]
		}
	];
</script>

<aside class="sidebar">
	<nav>
		<ul>
			{#each sideMenuList as menu}
				<li>
					<div class="item" class:active={$page.url.pathname === menu.path}>
						<a href={menu.path}>{menu.name}</a>
					</div>
				</li>
				{#if menu?.children}
					<ul>
						{#each menu.children as second (second.path)}
							<a href={second.path} class="item" class:active={$page.url.pathname === second.path}
								>{second.name}</a
							>
						{/each}
					</ul>
				{/if}
			{/each}
		</ul>
	</nav>
</aside>

<style>
	.sidebar {
		width: 250px;
		padding-top: 2rem;
		padding-right: 1rem;
		border-right: 1px solid var(--devui-dividing-line);
		position: fixed;
		left: 0;
		bottom: 0;
		top: 0;
		overflow-y: auto;

		& ul {
			padding-inline-start: 1rem;
			margin: 0;
			list-style-type: none;

			& a {
				color: var(--devui-text-weak);
				text-decoration: none;
			}
		}

		& .item {
			display: block;
			height: 40px;
			padding-left: 1rem;
			line-height: 40px;
			border-radius: 20px;

			&:hover {
				color: var(--devui-list-item-hover-text);
				background-color: var(--devui-list-item-hover-bg);
			}

			&:not(:first-child) {
				margin-top: 8px;
			}
		}

		& .active {
			font-weight: bold;
			color: var(--devui-list-item-active-text);
			background-color: var(--devui-list-item-active-bg);
		}
	}
</style>
