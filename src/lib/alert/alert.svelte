<script>
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
</script>

<style>
	.devui-alert {
		color: var(--devui-text);
		font-size: var(--devui-font-size);
		border: 1px solid transparent;
		padding: 8px 16px;
		line-height: 24px;
		border-radius: var(--devui-border-radius);
		word-break: normal;
		word-wrap: break-word;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;

		&.devui-alert-success {
			background-color: var(--devui-success-bg);
			border-color: var(--devui-success-line);
			color: var(--devui-text);

			& .devui-close {
				& > svg path {
					fill: var(--devui-success-line);
				}
			}
		}

		&.devui-alert-info {
			background-color: var(--devui-info-bg);
			border-color: var(--devui-info-line);
			color: var(--devui-text);

			& .devui-close {
				& > svg path {
					fill: var(--devui-info-line);
				}
			}
		}

		&.devui-alert-warning {
			background-color: var(--devui-warning-bg);
			border-color: var(--devui-warning-line);
			color: var(--devui-text);

			& .devui-close {
				& > svg path {
					fill: var(--devui-warning-line);
				}
			}
		}

		&.devui-alert-danger {
			background-color: var(--devui-danger-bg);
			border-color: var(--devui-danger-line);
			color: var(--devui-text);

			& .devui-close {
				& > svg path {
					fill: var(--devui-danger-line);
				}
			}
		}

		&.devui-alert-simple {
			border-color: var(--devui-line);
			color: var(--devui-text);

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
				left: 0;
				top: 0;
			}
		}

		& .devui-alert-operation-container {
			flex-grow: 0;
			flex-shrink: 1;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			height: 24px;
			min-width: 200px;

			& .devui-alert-carousel-num {
				padding-right: 8px;
			}

			& .devui-alert-carousel-button {
				margin-left: 8px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 24px;
				height: 16px;
				line-height: 16px;
				vertical-align: middle;
				background-color: transparent;
				text-align: center;
				border-radius: var(--devui-border-radius);
				cursor: pointer;

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
			color: var(--devui-text);
			opacity: 1;
			line-height: 26px;
			height: 24px;
			padding-left: 8px;

			& > svg path {
				fill: var(--devui-light-text);
			}

			& span {
				color: var(--devui-text);
				font-size: var(--devui-font-size);
				font-weight: bold;
			}
		}
	}
</style>
