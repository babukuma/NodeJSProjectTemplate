# Node.js + TypeScript project template

## 事前準備

### Node.js

1. Official Site : https://nodejs.org/
2. Version
   * 2016-11-17の時点で「`v6.9.1 LTS`」を推奨
   * 最低対象は「v4.x」以上(v5.x, v7.xは対象外)
   * バージョン別メンテナンス終了日
      * v4
         * Active LTS End(長期サポート終了日) : 2017-04-01
         * Maintenance End(最低限サポート終了日) : 2018-04-01
      * v6
         * Active LTS End(長期サポート終了日) : 2018-04-18
         * Maintenance End(最低限サポート終了日) : 2019-04-18
      * 参照 : [LTS schedule](https://github.com/nodejs/LTS#lts-schedule)
3. Install
   * Node.jsのバージョン管理をしない場合
      * Official Site : https://nodejs.org/
   * Node.jsのバージョン管理をする場合
      * Windows : [nodist](https://github.com/marcelklehr/nodist)
      * macOS, Linux : [nodebrew](https://github.com/hokaccha/nodebrew)

### Gulp

The streaming build system.

1. Official Site : http://gulpjs.com
2. Install : ```npm install --global gulp-cli```

---

## Project構成

```
js_project
├── README.md
├── app
│   ├── app.js
│   └── modulel1
│       ├── module01.js
│       └── module02.js
├── coverage
├── gulpfile.js
├── node_modules
├── package.json
├── .eslintrc.json
└── test
    └── module1
        ├── module01_test.js
        └── module02_test.js
```

1. app (directory)
    * Node.JSアプリの本体
    * JavaScript
    * app/app.js : Entry pointになるファイル
2. coverage (directory)
    * Coverageレポート出力先
    * ソース管理対象外
3. gulpfile.js
    * build file
4. node_modules (directory)
    * Node.jsのモジュールがインストールされるディレクトリ
    * ソース管理対象外
5. package.json
    * Node.jsのモジュール管理ファイル
6. .eslintrc.json
    * ESLintの設定ファイル
7. test/**/*.js
    * testing files

---
