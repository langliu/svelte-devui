<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	/**
	 * 指定警告提示的样式
	 * @type {'success' | 'danger' | 'warning' | 'info' | 'simple'}
	 */
	export let type = 'info';
	/**
	 * 自定义 class 名
	 * @type {string}
	 */
	export let cssClass = '';
	/**
	 * 默认显示关闭按钮
	 * @type {boolean}
	 */
	export let closeable = true;
	/**
	 * 自动关闭 alert 的延迟时间（ms）
	 * @type {undefined | number}
	 */
	export let dismissTime = undefined;
	/**
	 * 是否使用默认的类型图标
	 * @type {boolean}
	 */
	export let showIcon = true;
	/**
	 * 是否自动轮播
	 * @type {boolean}
	 */
	export let autoplay = false;
	/**
	 * 配合autoplay使用，自动轮播速度，单位 ms
	 * @type {number}
	 */
	export let autoplaySpeed = 3000;
	/**
	 * 内容切换动画速度，单位 ms
	 * @type {number}
	 */
	export let transitionSpeed = 500;

	let hide = false;
	let carouselNum = 0;
	let currentIndex = 1;

	function next() {
		if (currentIndex < carouselNum) {
			currentIndex++;
		} else {
			currentIndex = 1;
		}
	}

	function close() {
		hide = true;
		dispatch('close');
	}
</script>

{#if !hide}
	<div class="devui-alert devui-alert-{type} {cssClass}">
		{#if showIcon !== false && type !== 'simple'}
			<span class="devui-alert-icon">
				<svg
					width="16px"
					height="16px"
					viewBox=" 0 0 16 16"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					class="devui-icon {type === 'danger' ? 'devui-icon-error' : 'devui-icon-' + type}"
				>
					{#if type === 'success'}
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<path
								fill-rule="nonzero"
								d="M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z"
							></path>
							<polygon
								stroke-width="0.3"
								fill-rule="nonzero"
								points="6.82767602 11.5282799 3 7.24668779 3.89864233 6.37912367 6.82767602 9.04910002 12.2964408 4 13 4.64144383"
							></polygon>
						</g>
					{:else if type === 'warning'}
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<path
								class="devui-icon-warning-outer"
								d="M8.96244623,0.57254229 L15.8714442,13.4101975 C16.1549662,13.9370117 15.9538562,14.5918482 15.4222523,14.8728158 C15.2642579,14.9563203 15.0879506,15 14.9088903,15 L1.09089441,15 C0.488410063,15 0,14.5159904 0,13.9189343 C0,13.7414873 0.0440768395,13.5667684 0.128340519,13.4101975 L7.03733844,0.57254229 C7.32086049,0.0457280838 7.98165058,-0.153569987 8.51325441,0.127397589 C8.70423071,0.228333932 8.8605922,0.383286648 8.96244623,0.57254229 Z"
							></path>
							<path
								class="devui-icon-warning-inner"
								stroke-width="0.3"
								fill-rule="nonzero"
								d="M8.87894737,13 L7.08947368,13 L7.08947368,11.2105263 L8.87894737,11.2105263 L8.87894737,13 Z M8.62102372,9.86842105 L7.32800539,9.86842105 L7,4.5 L8.96842105,4.5 L8.62102372,9.86842105 Z"
							></path>
						</g>
					{:else if type === 'info'}
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g fill-rule="nonzero">
								<path
									class="devui-icon-info-outer"
									d="M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z"
								></path>
								<path
									class="devui-icon-info-inner"
									d="M9.19008504,7 L8.79402696,13 L7.15622605,13 L6.73158434,7 L9.19008504,7 Z M9,3 L9,5 L7,5 L7,3 L9,3 Z"
									stroke-width="0.2"
								></path>
							</g>
						</g>
					{:else if type === 'danger'}
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g fill-rule="nonzero">
								<path
									class="devui-icon-error-outer"
									d="M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z"
								></path>
								<path
									class="devui-icon-error-inner"
									d="M9,10.6 L9,12.6 L7,12.6 L7,10.6 L9,10.6 Z M9.1,3.1 L8.65924344,9.1 L7.28422786,9.1 L6.9,3.1 L9.1,3.1 Z"
									stroke-width="0.2"
								></path>
							</g>
						</g>
					{/if}
				</svg>
			</span>
		{/if}
		<div class="devui-alert-carousel-container">
			<!--				<div-->
			<!--					#carouselContainer-->
			<!--					class="devui-alert-carousel-box"-->
			<!--					(mouseenter)="clearScheduledTransition()"-->
			<!--					(mouseleave)="autoScheduleTransition()"-->
			<!--				>-->
			<!--					<ng-content></ng-content>-->
			<!--				</div>-->
			<slot />
		</div>
		<div class="devui-alert-operation-container">
			{#if carouselNum > 1}
				<div class="devui-alert-carousel-num">
					<span>{currentIndex}/{carouselNum}</span>
					<span role="button" tabindex={1} class="devui-alert-carousel-button" on:click={next}>
						<svg
							width="12px"
							height="12px"
							viewBox="0 0 16 16"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<path
									d="M2.64644661,5.14644661 C2.82001296,4.97288026 3.08943736,4.95359511 3.2843055,5.08859116 L3.35355339,5.14644661 L7.999,9.793 L12.6464466,5.14644661 C12.820013,4.97288026 13.0894374,4.95359511 13.2843055,5.08859116 L13.3535534,5.14644661 C13.5271197,5.32001296 13.5464049,5.58943736 13.4114088,5.7843055 L13.3535534,5.85355339 L8.35355339,10.8535534 C8.17998704,11.0271197 7.91056264,11.0464049 7.7156945,10.9114088 L7.64644661,10.8535534 L2.64644661,5.85355339 C2.45118446,5.65829124 2.45118446,5.34170876 2.64644661,5.14644661 Z"
									fill-rule="nonzero"
								></path>
							</g>
						</svg>
					</span>
				</div>
			{/if}
			<!--			<ng-template [ngTemplateOutlet]="operationTemplate" [ngTemplateOutletContext]="{ close: close }"> </ng-template>-->
			{#if closeable}
				<div class="devui-close" on:click={close}>
					<svg
						width="10px"
						height="10px"
						viewBox="0 0 10 10"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g transform="translate(-3.000000, -3.000000)" fill-rule="nonzero">
								<path
									d="M11.6426,3.19816936 C11.9239974,2.91574512 12.4131626,2.93784891 12.7352108,3.24751057 C13.0571998,3.5572302 13.0901298,4.03723416 12.8087324,4.31965839 L9.14064666,7.99900183 L12.8087324,11.6803416 C13.0645482,11.9370909 13.0605893,12.3571292 12.8158402,12.6640749 L12.7352108,12.7524894 C12.4131626,13.0621511 11.9239974,13.0842548 11.6426,12.8018306 L8,9.14489021 L4.35740003,12.8018306 C4.10158422,13.05858 3.6740594,13.0636532 3.35648225,12.8298003 L3.26478919,12.7524894 C2.94280021,12.4427698 2.90987023,11.9627658 3.19126762,11.6803416 L6.8583349,7.99900183 L3.19126762,4.31965839 C2.93545181,4.06290908 2.93941068,3.64287076 3.18415975,3.3359251 L3.26478919,3.24751057 C3.58683735,2.93784891 4.07600264,2.91574512 4.35740003,3.19816936 L8,6.85411161 L11.6426,3.19816936 Z"
								></path>
							</g>
						</g>
					</svg>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.devui-alert {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		padding: 8px 16px;
		font-size: var(--devui-font-size);
		line-height: 24px;
		color: var(--devui-text);
		word-break: normal;
		word-wrap: break-word;
		border: 1px solid transparent;
		border-radius: var(--devui-border-radius);

		&.devui-alert-success {
			color: var(--devui-text);
			background-color: var(--devui-success-bg);
			border-color: var(--devui-success-line);

			& .devui-close {
				& > svg path {
					fill: var(--devui-success-line);
				}
			}
		}

		&.devui-alert-info {
			color: var(--devui-text);
			background-color: var(--devui-info-bg);
			border-color: var(--devui-info-line);

			& .devui-close {
				& > svg path {
					fill: var(--devui-info-line);
				}
			}
		}

		&.devui-alert-warning {
			color: var(--devui-text);
			background-color: var(--devui-warning-bg);
			border-color: var(--devui-warning-line);

			& .devui-close {
				& > svg path {
					fill: var(--devui-warning-line);
				}
			}
		}

		&.devui-alert-danger {
			color: var(--devui-text);
			background-color: var(--devui-danger-bg);
			border-color: var(--devui-danger-line);

			& .devui-close {
				& > svg path {
					fill: var(--devui-danger-line);
				}
			}
		}

		&.devui-alert-simple {
			color: var(--devui-text);
			border-color: var(--devui-line);

			& .devui-close {
				& > svg path {
					fill: var(--devui-text-weak);
				}
			}
		}

		& .devui-alert-icon {
			padding-right: 8px;
		}

		& svg.devui-icon {
			width: 16px;
			height: 16px;
			vertical-align: middle;
			transform: translateY(-1px);
		}

		& .devui-icon.devui-icon-success {
			& > g {
				& path {
					fill: var(--devui-success-line);
				}

				& polygon {
					fill: var(--devui-light-text);
					stroke: var(--devui-light-text);
				}
			}
		}

		& .devui-icon.devui-icon-warning {
			& > g {
				& path.devui-icon-warning-outer {
					fill: var(--devui-warning-line);
				}

				& path.devui-icon-warning-inner {
					fill: var(--devui-light-text);
					stroke: var(--devui-light-tex) t;
				}
			}
		}

		& .devui-icon.devui-icon-info {
			& > g {
				& path.devui-icon-info-outer {
					fill: var(--devui-info-line);
				}

				& path.devui-icon-info-inner {
					fill: var(--devui-light-text);
					stroke: var(--devui-light-text);
				}
			}
		}

		& .devui-icon.devui-icon-error {
			& > g {
				& path.devui-icon-error-outer {
					fill: var(--devui-danger-line);
				}

				& path.devui-icon-error-inner {
					fill: var(--devui-light-text);
					stroke: var(--devui-light-text);
				}
			}
		}

		& .devui-alert-carousel-container {
			flex-grow: 1;
			flex-shrink: 0;
			height: 24px;
			overflow: hidden;

			& .devui-alert-carousel-box {
				position: relative;
				top: 0;
				left: 0;
			}
		}

		& .devui-alert-operation-container {
			display: flex;
			flex-grow: 0;
			flex-shrink: 1;
			align-items: center;
			justify-content: flex-end;
			min-width: 200px;
			height: 24px;

			& .devui-alert-carousel-num {
				padding-right: 8px;
			}

			& .devui-alert-carousel-button {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 24px;
				height: 16px;
				margin-left: 8px;
				line-height: 16px;
				text-align: center;
				vertical-align: middle;
				cursor: pointer;
				background-color: transparent;
				border-radius: var(--devui-border-radius);

				& svg path {
					fill: var(--devui-text);
				}

				&:hover {
					background-color: var(--devui-shape-icon-fill-hover);

					& svg path {
						fill: var(--devui-light-text);
					}
				}
			}
		}

		& .devui-close {
			flex-grow: 0;
			flex-shrink: 1;
			height: 24px;
			padding-left: 8px;
			line-height: 26px;
			color: var(--devui-text);
			opacity: 1;

			& > svg path {
				fill: var(--devui-light-text);
			}

			& span {
				font-size: var(--devui-font-size);
				font-weight: bold;
				color: var(--devui-text);
			}
		}
	}
</style>
