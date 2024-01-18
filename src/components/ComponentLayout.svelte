<script lang="ts">
  import { Code2, Cable } from 'lucide-svelte';
  export let title: string;
  export let description: string;
  export let path: string;
  export let iconUrl: string;
  export let backgroundUrl: string;
  let active: 'demo' | 'api' = 'demo';

  function toggleActive(type: 'demo' | 'api') {
    active = type;
  }
</script>

<h1>{title}</h1>
<p class="doc-header">{description}</p>

<div class="tabs" style:background-image="url('{backgroundUrl}')">
  <div class="component-icon">
    <img src={iconUrl} alt="{title} Icon" />
  </div>
</div>
<div class="nav-container">
  <a href="{path}/demo" class="nav-slider" tabindex={1} on:click={() => toggleActive('demo')}>
    <Code2 size={16} />
    Demo
  </a>
  <a href="{path}/api" class="nav-slider" tabindex={2} on:click={() => toggleActive('api')}>
    <Cable size={16} />
    API
  </a>
  <div class="nav-slider-animation" style:left={active === 'demo' ? '0px' : '50%'}></div>
</div>

<style>
  h1 {
    padding: 32px 0 0;
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 36px;
    line-height: 1;
  }

  .doc-header {
    box-sizing: border-box;
    padding-top: 32px;
    padding-right: 200px;
    margin-bottom: 24px;
    font-size: var(--devui-font-size);
    color: var(--devui-aide-text);
  }

  .tabs {
    position: relative;
    display: flex;
    align-items: flex-end;
    height: 176px;
    background-size: cover;
    border-radius: 16px;

    & .component-icon {
      position: absolute;
      top: -90px;
      right: 24px;
      width: 160px;
      height: 160px;
      background-color: #fff3;
      backdrop-filter: blur(20px);
      border-radius: 20px;

      & img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .nav-container {
    position: sticky;
    top: 0;
    z-index: 99;
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    width: 100%;
    margin-top: -56px;
    margin-bottom: 20px;
    font-size: var(--devui-font-size-lg);
    background: rgb(242 242 243 / 60%);
    backdrop-filter: blur(20px);
    border-radius: 0 0 16px 16px;

    & .nav-slider {
      z-index: 2;
      flex: 100;
      height: 56px;
      font-size: 18px;
      line-height: 56px;
      color: var(--devui-text);
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      background: transparent;
    }

    & .nav-slider-animation {
      position: absolute;
      top: 0;
      width: 50%;
      height: 56px;
      line-height: 56px;
      background-color: var(--devui-base-bg);
      border-radius: 0 0 16px 16px;
      box-shadow: 2px 2px 16px #0d275029;
      transition:
        left 0.3s cubic-bezier(0.5, 0.05, 0.5, 0.95),
        width 0.3s cubic-bezier(0.5, 0.05, 0.5, 0.95);
    }
  }
</style>
