---
home: true
title: 主页
icon: home
heroImage: /logo.svg
heroText: vuepress-plugin-lightgallery
tagline: VuePress2 的 gallery 插件
actions:
  - text: 快速上手 💡
    link: /zh/guide.html
    type: primary

  - text: 配置 🛠
    link: /zh/config.html

footer: MIT Licensed | Copyright © 2019-present Mr.Hope
copyright: false
---

## 使用插件

### 安装

:::: code-group

::: code-group-item yarn

```bash
yarn add -D vuepress-plugin-lightgallery@next
```

:::

::: code-group-item npm

```bash
npm i -D vuepress-plugin-lightgallery@next
```

:::

::::

### 使用

:::: code-group

::: code-group-item ts

```ts
// .vuepress/config.ts
import { lightgallery } from "vuepress-plugin-lightgallery";

export default {
  plugins: [
    lightgallery({
      // 插件选项
    }),
  ],
};
```

:::

::: code-group-item js

```js
// .vuepress/config.js
const { lightgallery } = require("vuepress-plugin-lightgallery");

module.exports = {
  plugins: [
    lightgallery({
      // 插件选项
    }),
  ],
};
```

:::

::::

::: danger 许可证限制

请注意，虽然这个插件是在 MIT 协议下发布的，但我们目前正在通过 vuepress-theme-hope 的内置 [lightgallery 组织许可](https://www.lightgalleryjs.com/license/) 来实现这一点，并且 如果您将其用于非商业用途，我们愿意承认您是我们组织的成员。

组织许可证在非商业用途下对您没有限制，因为它支持无限的开发人员和无限的产品。您可以在任何许可下使用此插件安全地发布您的文档或项目。

但是请注意组织许可证只能用于单个商业产品。如果你想要以商业用途使用本插件，由于 lightgallery 是在 [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html) 下，所以你必须在没有许可证下将你的源代码置于 [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html) 协议下，或者考虑 [购买许可证](https://www.lightgalleryjs.com/license/) 以规避可能产生的问题。

你被警告了！

:::