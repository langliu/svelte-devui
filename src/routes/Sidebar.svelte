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
					name: 'Card 卡片',
					path: '/components/card'
				}
			]
		}
	];
</script>

<aside>
	<nav class="sidebar">
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
							<a href={second.path} class="item" class:active={$page.url.pathname === second.path}>{second.name}</a>
						{/each}
					</ul>
				{/if}
			{/each}
		</ul>
	</nav>
</aside>

<style>
    .sidebar {
        border-right-color: var(--devui-dividing-line);
        border-right-width: 1px;
        border-right-style: solid;
        padding-right: 1rem;
        padding-top: 2rem;
        width: 250px;

        & ul {
            list-style-type: none;
            margin: 0;
            padding-inline-start: 1rem;

            & a {
                text-decoration: none;
                color: var(--devui-text-weak);
            }
        }

        & .item {
            padding-left: 1rem;
            border-radius: 20px;
            height: 40px;
            line-height: 40px;
            display: block;

            &:hover {
                color: var(--devui-list-item-hover-text);
                background-color: var(--devui-list-item-hover-bg);
            }

            &:not(:first-child) {
                margin-top: 8px;
            }
        }

        & .active {
            color: var(--devui-list-item-active-text);
            background-color: var(--devui-list-item-active-bg);
            font-weight: bold;
        }
    }
</style>
