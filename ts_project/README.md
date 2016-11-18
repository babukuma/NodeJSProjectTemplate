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

### TypeScript 2

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

1. Official Site : https://www.typescriptlang.org/
2. Install : 「package.json」で管理するため、Globalにインストールする必要はない

### Typings

The TypeScript Definition Manager

1. Official Site : https://github.com/typings/typings
2. Install : ```npm install -g typings```

---

## Project構成

```
ts_project
├── README.md
├── app
├── coverage
├── gulpfile.js
├── node_modules
├── package.json
├── src
│   ├── app
│   │   ├── app.ts
│   │   └── module1
│   │       ├── module01.ts
│   │       └── module02.ts
│   └── test
│       └── module1
│           ├── module01_test.ts
│           └── module02_test.ts
├── test
├── tsconfig.json
├── tslint.json
├── typings
└── typings.json
```

1. app (directory)
    * コンパイルされたNode.JSアプリの本体
    * Sources : src/app/**/*.ts
    * ソース管理対象外
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
6. src/app/**/*.ts
    * TypeScript Sources
    * src/app/app.ts : Entry pointになるファイル
    * src/app/{Module}/ : Module
7. src/test/**/*.ts
    * testing files
8. test (directory)
    * testing filesのコンパイル先
    * Sources : src/test/**/*.ts
    * ソース管理対象外
9. tsconfig.json
    * TypeScriptの設定ファイル
10. tslint.json
    * TSLintの設定ファイル
11. typings (directory)
    * TypeScript Definition filesがインストールされるディレクトリ
    * ソース管理対象外
12. typings.json
    * TypeScript Definition files管理 

---
