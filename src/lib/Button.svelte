<script>
	/**
	 * @type {'button' | 'submit' | 'reset'}
	 */
	export let type = 'button';
	/**
	 * @type {'primary' | 'common' | 'text' | 'danger'}
	 */
	export let style = 'primary';
	/**
	 * @type {'lg' | 'md' | 'sm' | 'xs'}
	 */
	export const size = 'md';
	/**
	 * @type {boolean}
	 */
	export let bordered = false;
	/**
	 * @type {boolean} [false] 可选，是否禁用 button
	 */
	export let disabled = false;
</script>

<button
	{type}
	class="devui-btn devui-btn-{style} devui-btn-{size} devui-button-water-wave"
	{disabled}
	class:bordered
	on:click
	on:dblclick
>
	we
</button>

<style>
	:root {
		--devui-btn-loading-color: --devui-text;
		--devui-btn-xs-padding: 0 4px;
		--devui-btn-xs-height: 24px;
		--devui-btn-icon-xs-min-width: 24px;
		--devui-btn-xs-min-width: 48px;
		--devui-btn-sm-padding: var(--devui-btn-sm-padding, 0 16px);
		--devui-btn-sm-min-width: 56px;
		--devui-btn-icon-sm-min-width: 24px;
		--devui-btn-sm-height: 24px;
		--devui-btn-min-width: 64px;
		--devui-btn-height: 28px;
		--devui-btn-padding: var(--devui-btn-padding, 0 20px);
		--devui-btn-lg-padding: var(--devui-btn-lg-padding, 0 24px);
		--devui-btn-lg-min-width: 72px;
		--devui-btn-icon-lg-min-width: 32px;
		--devui-btn-lg-height: 32px;
		--devui-btn-xs-font-size: var(--devui-font-size-sm);
		--devui-btn-sm-font-size: var(--devui-font-size-sm);
		--devui-btn-font-size: var(--devui-font-size-md);
		--devui-btn-lg-font-size: var(--devui-font-size-lg);
		--devui-btn-line-height: var(--devui-line-height-base);
	}
	.devui-btn {
		padding: var(--devui-btn-padding);
		font-size: var(--devui-btn-font-size);
		height: var(--devui-btn-height);
		line-height: var(--devui-btn-line-height);
		border-radius: var(--devui-border-radius);
		border-width: 1px;
		border-color: transparent;
		background-color: transparent;
		position: relative;
		overflow: hidden;
		transform: scale(1);

		&.devui-btn-common {
			color: var(--devui-text);
			min-width: var(--devui-btn-min-width);
			background-color: var(--devui-btn-common-bg, --devui-base-bg);
			border-color: var(--devui-btn-common-border-color, --devui-line);

			&:disabled {
				color: var(--devui-disabled-text);
				background: var(--devui-disabled-bg);
				border-color: var(--devui-btn-common-border-disabled);
			}
		}

		&.devui-btn-danger {
			&:disabled {
				color: var(--devui-disabled-text);
				background: var(--devui-disabled-bg);
				border: 1px solid var(--devui-disabled-line);
			}
		}

		&.devui-btn-text-dark {
			&:disabled {
				color: var(--devui-disabled-text);
			}
		}

		&.devui-btn-text {
			&:disabled {
				color: var(--devui-disabled-text);
			}
		}

		&.bordered {
			&.devui-btn-common {
				color: var(--devui-text);
				border-color: transparent;

				&:hover,
				&:focus {
					border-color: var(--devui-primary-hover);
				}

				&:active {
					border-color: var(--devui-primary-active);
				}
			}

			&.devui-btn-stress,
			&.devui-btn-primary {
				border-color: var(--devui-brand);
				color: var(--devui-brand);
				background-color: var(--devui-block);
			}

			&.devui-btn-success {
				border-color: var(--devui-success);
				color: var(--devui-success);
				background-color: var(--devui-block);
			}

			&.devui-btn-warning {
				border-color: var(--devui-warning);
				color: var(--devui-warning);
				background-color: var(--devui-block);
			}

			&.devui-btn-danger {
				border-color: var(--devui-danger);
				color: var(--devui-danger);
				background-color: var(--devui-danger);
			}
		}

		&.d-btn-icon:not(.devui-btn-primary):not(.devui-btn-danger):not(.devui-btn-common) {
			&:hover,
			&:focus {
				border: 1px solid var(--devui-list-item-hover-bg);
				background-color: var(--devui-list-item-hover-bg);
			}

			&:disabled {
				background-color: var(--devui-disabled-bg);
			}
		}

		&:not(:disabled) {
			&.devui-btn-text,
			&.devui-btn-text-dark {
				&.d-btn-icon-wrap {
					color: var(--devui-text);

					&.devui-icon-fix {
						color: var(--devui-icon-fill);
					}

					&:hover {
						color: var(--devui-icon-fill-hover);

						&.devui-icon-fix {
							color: var(--devui-icon-fill-hover);
						}
					}
				}
			}
		}

		&.mouseDown:not(:disabled) {
			transform: scale(0.95);
		}
	}

	.devui-loading {
		&.devui-loading-default-spinner {
			& div {
				background-color: var(--devui-text);
			}
		}
	}

	:host {
		display: inline-block;
	}

	.devui-btn {
		transition:
			background-color var(--devui-animation-duration-slow)
				var(--devui-animation-ease-in-out-smooth),
			border-color var(--devui-animation-duration-slow) var(--devui-animation-ease-in-out-smooth),
			color var(--devui-animation-duration-slow) var(--devui-animation-ease-in-out-smooth);
		border-style: solid;
		white-space: nowrap;
		display: flex;
		align-items: center;
		justify-content: center;

		&:disabled,
		&[disabled] {
			cursor: not-allowed;
		}

		&.d-btn-icon {
			padding: 8px 8px;
			line-height: 1em;
			min-width: unset;
			border: 1px solid transparent;

			&:not(.devui-btn-common) {
				border: 1px solid transparent;
			}

			&.devui-btn-xs,
			&.devui-btn-sm {
				padding: 4px;
			}

			&.devui-btn-xs {
				min-width: var(--devui-btn-icon-xs-min-width);
			}

			&.devui-btn-sm {
				min-width: var(--devui-btn-icon-sm-min-width);
			}

			&.devui-btn-lg {
				&.icon {
					font-size: var(--devui-font-size-icon);
				}

				min-width: var(--devui-btn-icon-lg-min-width);
			}
		}

		&:not(.d-btn-icon) {
			&.icon-fix {
				font-size: var(--devui-font-size-icon);
			}
		}
	}

	.devui-icon-fix {
		position: relative;
		font-size: var(--devui-font-size);
		pointer-events: none;

		&::before {
			transition: color var(--devui-animation-duration-slow)
				var(--devui-animation-ease-in-out-smooth);
		}
	}

	.devui-btn.devui-btn-common:not(:disabled) {
		&.devui-icon-fix {
			color: var(--devui-text-weak);
		}

		&:hover,
		&:active,
		&:focus {
			&.devui-icon-fix {
				color: var(--devui-icon-fill-active);
			}
		}
	}

	.button-content {
		display: inline-block;
		position: relative;
		pointer-events: none;
	}

	.clear-right-4 {
		margin-right: 4px;
	}

	.devui-btn-more-text-omits {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.devui-btn-circle {
		border-radius: 100%;
	}

	.devui-button-water-wave {
		position: absolute;
		background-color: var(--devui-base-bg);
		border-radius: 50%;
		opacity: 0;
		width: 20px;
		height: 20px;
		transform: translate(-50%, -50%);
		animation: waterWave var(--devui-animation-duration-slow) var(--devui-animation-linear);
	}

	.devui-btn-primary {
		color: var(--devui-light-text);
		min-width: var(--devui-btn-min-width);
		background-color: var(--devui-primary);

		&:disabled {
			color: var(--devui-light-text);
			background: var(--devui-primary-disabled);
			border: none;
		}
	}

	@keyframes waterWave {
		0% {
			opacity: 0.2;
			width: 30px;
			height: 30px;
		}

		100% {
			opacity: 0;
			width: 200px;
			height: 200px;
		}
	}
</style>
