export const projectDir = `
├─.browserslistrc
├─.DS_Store
├─.editorconfig
├─.env.development
├─.env.production
├─.env.test
├─.eslintrc.js
├─.gitignore
├─.prettierignore
├─.prettierrc
├─babel.config.js
├─commitlint.config.js
├─package-lock.json
├─package.json
├─README.md
├─tsconfig.json
├─vue.config.js
├─types
|   └vuex.d.ts
├─src
|  ├─App.vue
|  ├─main.ts
|  ├─shims-vue.d.ts
|  ├─views
|  |   ├─not-found
|  |   |     └not-found.vue
|  |   ├─main
|  |   |  ├─main.vue
|  |   |  ├─system
|  |   |  |   ├─user
|  |   |  |   |  ├─user.vue
|  |   |  |   |  ├─config
|  |   |  |   |  |   ├─content.config.ts
|  |   |  |   |  |   ├─modal.config.ts
|  |   |  |   |  |   └search.config.ts
|  |   |  |   ├─role
|  |   |  |   |  ├─role.vue
|  |   |  |   |  ├─config
|  |   |  |   |  |   ├─content.config.ts
|  |   |  |   |  |   ├─modal.config.ts
|  |   |  |   |  |   └search.config.ts
|  |   |  |   ├─menu
|  |   |  |   |  ├─menu.vue
|  |   |  |   |  ├─config
|  |   |  |   |  |   └content.config.ts
|  |   |  |   ├─department
|  |   |  |   |     ├─department.vue
|  |   |  |   |     ├─config
|  |   |  |   |     |   ├─content.config.ts
|  |   |  |   |     |   ├─modal.config.ts
|  |   |  |   |     |   └search.config.ts
|  |   |  ├─story
|  |   |  |   ├─list
|  |   |  |   |  ├─list.vue
|  |   |  |   |  ├─config
|  |   |  |   |  |   └content.config.ts
|  |   |  |   ├─chat
|  |   |  |   |  └chat.vue
|  |   |  ├─product
|  |   |  |    ├─goods
|  |   |  |    |   ├─goods.vue
|  |   |  |    |   ├─config
|  |   |  |    |   |   ├─content.config.ts
|  |   |  |    |   |   └search.config.ts
|  |   |  |    ├─category
|  |   |  |    |    ├─category.vue
|  |   |  |    |    ├─config
|  |   |  |    |    |   ├─content.config.ts
|  |   |  |    |    |   └search.config.ts
|  |   |  ├─analysis
|  |   |  |    ├─overview
|  |   |  |    |    ├─overview.vue
|  |   |  |    |    ├─config
|  |   |  |    |    |   ├─dependencies.ts
|  |   |  |    |    |   ├─dev-dependencies.ts
|  |   |  |    |    |   ├─index.ts
|  |   |  |    |    |   ├─project-dir.ts
|  |   |  |    |    |   └technology-stacks.ts
|  |   |  |    ├─dashboard
|  |   |  |    |     └dashboard.vue
|  |   ├─login
|  |   |   ├─login.vue
|  |   |   ├─types
|  |   |   |   └index.ts
|  |   |   ├─cpns
|  |   |   |  ├─login-account.vue
|  |   |   |  ├─login-account2.vue
|  |   |   |  ├─login-panel.vue
|  |   |   |  └login-phone.vue
|  ├─utils
|  |   ├─cache.ts
|  |   ├─date-formt.ts
|  |   ├─firstCaptialLetter.ts
|  |   └map-menu.ts
|  ├─store
|  |   ├─index.ts
|  |   ├─types.ts
|  |   ├─main
|  |   |  ├─system
|  |   |  |   ├─system.ts
|  |   |  |   └types.ts
|  |   |  ├─analysis
|  |   |  |    ├─analysis.ts
|  |   |  |    └types.ts
|  |   ├─login
|  |   |   ├─login.ts
|  |   |   └types.ts
|  ├─service
|  |    ├─index.ts
|  |    ├─request
|  |    |    ├─config.ts
|  |    |    ├─request.ts
|  |    |    └type.ts
|  |    ├─main
|  |    |  ├─system
|  |    |  |   └system.ts
|  |    |  ├─analysis
|  |    |  |    └analysis.ts
|  |    ├─login
|  |    |   ├─login.ts
|  |    |   └types.ts
|  ├─router
|  |   ├─index.ts
|  |   ├─not-found
|  |   |     └not-found.ts
|  |   ├─main
|  |   |  ├─main.ts
|  |   |  ├─system
|  |   |  |   ├─user
|  |   |  |   |  └user.ts
|  |   |  |   ├─role
|  |   |  |   |  └role.ts
|  |   |  |   ├─menu
|  |   |  |   |  └menu.ts
|  |   |  |   ├─department
|  |   |  |   |     └department.ts
|  |   |  ├─story
|  |   |  |   ├─list
|  |   |  |   |  └list.ts
|  |   |  |   ├─chat
|  |   |  |   |  └chat.ts
|  |   |  ├─product
|  |   |  |    ├─goods
|  |   |  |    |   └goods.ts
|  |   |  |    ├─category
|  |   |  |    |    └category.ts
|  |   |  ├─analysis
|  |   |  |    ├─overview
|  |   |  |    |    └overview.ts
|  |   |  |    ├─dashboard
|  |   |  |    |     └dashboard.ts
|  |   ├─login
|  |   |   └login.ts
|  ├─hooks
|  |   ├─useEcharts.ts
|  |   ├─usePageModal.ts
|  |   ├─usePageSearch.ts
|  |   └usePermission.ts
|  ├─global
|  |   ├─index.ts
|  |   ├─register-element.ts
|  |   └register-properties.ts
|  ├─components
|  |     ├─statistical-panel
|  |     |         ├─index.ts
|  |     |         ├─src
|  |     |         |  └statistical-panel.vue
|  |     ├─page-search
|  |     |      ├─index.ts
|  |     |      ├─src
|  |     |      |  └page-search.vue
|  |     ├─page-modal
|  |     |     ├─index.ts
|  |     |     ├─src
|  |     |     |  └page-modal.vue
|  |     ├─page-content
|  |     |      ├─index.ts
|  |     |      ├─src
|  |     |      |  └page-content.vue
|  |     ├─page-charts
|  |     |      ├─index.ts
|  |     |      ├─utils
|  |     |      |   ├─convert-data.ts
|  |     |      |   └coordinate-data.ts
|  |     |      ├─types
|  |     |      |   └index.ts
|  |     |      ├─src
|  |     |      |  ├─bar-echart.vue
|  |     |      |  ├─line-echart.vue
|  |     |      |  ├─map-echart.vue
|  |     |      |  ├─pie-echart.vue
|  |     |      |  └rose-echart.vue
|  |     ├─nav-menu
|  |     |    ├─index.ts
|  |     |    ├─src
|  |     |    |  └nav-menu.vue
|  |     ├─nav-header
|  |     |     ├─index.ts
|  |     |     ├─src
|  |     |     |  ├─nav-header.vue
|  |     |     |  └nav-info.vue
|  |     |     ├─hooks
|  |     |     |   └useMenuIconHook.ts
|  ├─base-ui
|  |    ├─text-link
|  |    |     ├─index.ts
|  |    |     ├─src
|  |    |     |  └textlink.vue
|  |    ├─table
|  |    |   ├─index.ts
|  |    |   ├─src
|  |    |   |  └table.vue
|  |    ├─form
|  |    |  ├─index.ts
|  |    |  ├─types
|  |    |  |   └index.ts
|  |    |  ├─src
|  |    |  |  └form.vue
|  |    ├─editor
|  |    |   ├─index.ts
|  |    |   ├─src
|  |    |   |  └index.vue
|  |    ├─echarts
|  |    |    ├─index.ts
|  |    |    ├─src
|  |    |    |  └base-echart.vue
|  |    |    ├─hooks
|  |    |    |   └useEcharts.ts
|  |    |    ├─data
|  |    |    |  └china.json
|  |    ├─descriptions
|  |    |      ├─index.ts
|  |    |      ├─types
|  |    |      |   └types.ts
|  |    |      ├─src
|  |    |      |  └descriptions.vue
|  |    ├─count-up
|  |    |    ├─index.ts
|  |    |    ├─src
|  |    |    |  └countup.vue
|  |    ├─code
|  |    |  ├─index.ts
|  |    |  ├─src
|  |    |  |  └code.vue
|  |    ├─card
|  |    |  ├─index.ts
|  |    |  ├─src
|  |    |  |  └card.vue
|  |    ├─breadcrumb
|  |    |     ├─index.ts
|  |    |     ├─types
|  |    |     |   └index.ts
|  |    |     ├─src
|  |    |     |  └breadcrumb.vue
|  ├─assets
|  |   ├─img
|  |   |  ├─blog-icon.svg
|  |   |  ├─github-logo.svg
|  |   |  ├─login-bg.svg
|  |   |  └logo.svg
|  |   ├─css
|  |   |  ├─base.css
|  |   |  ├─index.css
|  |   |  └variable.less
├─public
|   ├─favicon.ico
|   └index.html
├─dist
|  ├─favicon.ico
|  ├─index.html
|  ├─js
|  ├─img
|  ├─fonts
|  ├─css
├─.husky
|   ├─commit-msg
|   ├─pre-commit
|   ├─_
|   | ├─.gitignore
|   | └husky.sh
|  ├─logs
|  |  ├─HEAD
|  |  ├─refs
|  |  |  ├─remotes
|  |  |  |    ├─origin
|  |  |  |    |   └main
|  |  |  ├─heads
|  |  |  |   └main
|  ├─info
|  |  └exclude
|  ├─hooks
|  |   ├─applypatch-msg
|  |   ├─applypatch-msg.sample
|  |   ├─commit-msg
|  |   ├─commit-msg.sample
|  |   ├─fsmonitor-watchman.sample
|  |   ├─post-applypatch
|  |   ├─post-checkout
|  |   ├─post-commit
|  |   ├─post-merge
|  |   ├─post-receive
|  |   ├─post-rewrite
|  |   ├─post-update
|  |   ├─post-update.sample
|  |   ├─pre-applypatch
|  |   ├─pre-applypatch.sample
|  |   ├─pre-auto-gc
|  |   ├─pre-commit
|  |   ├─pre-commit.sample
|  |   ├─pre-merge-commit.sample
|  |   ├─pre-push
|  |   ├─pre-push.sample
|  |   ├─pre-rebase
|  |   ├─pre-rebase.sample
|  |   ├─pre-receive
|  |   ├─pre-receive.sample
|  |   ├─prepare-commit-msg
|  |   ├─prepare-commit-msg.sample
|  |   ├─push-to-checkout
|  |   ├─sendemail-validate
|  |   ├─update
|  |   └update.sample
`
