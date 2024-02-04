<script>
  import Code from '$components/Code.svelte'
</script>
<h1>快速开始</h1>
<p>引导您如何在项目中使用DevUI</p>

<h3><strong>Svelte 版本</strong></h3>
<p>当前支持的Svelte版本 <code>^4.0.0</code></p>
<h3><strong>1. 创建一个项目</strong></h3>
<p>推荐使用 sveltekit 创建你的项目</p>
<Code code="npm create svelte@latest my-app" lang="shell"/>
<h3><strong>2. 安装</strong></h3>
<p>进入你的项目文件夹，使用npm安装DevUI</p>
<Code code="npm install svelte-devui" lang="shell"/>
<h3><strong>3. 引入模块</strong></h3>
<Code code={`import { Button } from 'svelte-devui'`} lang="svelte"/>
<h3><strong>4. 引入样式</strong></h3>
<Code code={`import 'svelte-devui/styles/devui-var/index.css'`} lang="css"/>
<h3><strong>5. 启动开发调试</strong></h3>
<Code code={`npm run dev`} lang="shell"/>
<h3><strong>浏览器兼容</strong></h3>
<p>支持现代浏览器</p>

<style>
  code{
      padding: 2px 4px;
      color: #c7254e;
      background-color: var(--devui-area, #f5f5f5);
      border-radius: var(--devui-border-radius, 2px);
  }
</style>