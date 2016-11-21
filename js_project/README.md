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

1. coverage (directory)
    * Coverageレポート出力先
    * VCS管理対象外
2. gulpfile.js
    * build file
3. node_modules (directory)
    * Node.jsのモジュールがインストールされるディレクトリ
    * VCS管理対象外
4. package.json
    * Node.jsのモジュール管理ファイル
5. .eslintrc.json
    * ESLintの設定ファイル
6. app (directory)
    * Node.JSアプリの本体
    * JavaScript
    * app/app.js : Entry pointになるファイル
7. test/**/*.js
    * testing files

---

## プロジェクトを作成（開発リーダー向け）

### 1. create a project directory

```
mkdir js_project
cd js_project
```

### 2. create a package.json file

```
npm init -y
```

### 3. install packages for development

```
npm install --save-dev gulp
npm install --save-dev eslint
npm install --save-dev gulp-eslint
npm install --save-dev mocha
npm install --save-dev gulp-mocha
npm install --save-dev istanbul
npm install --save-dev gulp-istanbul
```

### 4. create a .eslintrc.json

1. .eslintrc.json document : http://eslint.org/docs/user-guide/configuring
2. generate .eslintrc.json
```bash
$ ./node_modules/.bin/eslint --init
? How would you like to configure ESLint? Use a popular style guide
? Which style guide do you want to follow? Standard
? What format do you want your config file to be in? JSON
```

### 5. create a gulpfile.js

1. gulpfile.js document : https://github.com/gulpjs/gulp
2. Example

```js
"use strict";
const gulp = require("gulp");
// check style for javascript
const eslint = require("gulp-eslint");
// for testing
const mocha = require('gulp-mocha');
// for coverage
const istanbul = require('gulp-istanbul');

gulp.task('lint', () => {
    return gulp.src(["app/**/*.js"])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task('pre-test', function () {
    return gulp.src('app/**/*.js')
        // Covering files
        .pipe(istanbul())
        // Force `require` to return covered files
        .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
    return gulp.src("test/**/*_test.js")
        // Unit test
        .pipe(mocha())
        // Creating the reports after tests ran
        .pipe(istanbul.writeReports())
        // Enforce a coverage of at least 90%
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('default', ['lint', 'test']);
```

### 6. add npm-scripts in package.json

1. npm-scripts document : https://docs.npmjs.com/misc/scripts
2. Example

```
{
  ....
  "scripts": {
    "start": "node app/app.js",
    "test": "gulp test",
    "lint": "gulp lint"
  },
  ....
}
```

### 7. create a ignore file

VCS(git, subversion)用のignore

```
# gitの場合

# Created by https://www.gitignore.io

### macOS ###
.... macOS 対応 ignore list ....

### Windows ###
.... Windows 対応 ignore list ....

### VisualStudioCode ###
.... VisualStudioCode 対応 ignore list ....

### Node ###
.... Node.js 対応 ignore list ....

### Project ###
coverage
```

---

## 既存プロジェクトをCloneして構築（開発メンバー向け）

1. clone or copy a project directory
2. install packages

```bash
cd js_project
npm install
```

---

## Node.jsモジュール管理

1. 開発時必要なモジュールとアプリ起動時必要なモジュールを区別して管理する事
```bash
npm install --save-dev gulp  # 開発時のみ使用するモジュール
npm install --save socket.io # アプリ起動時必要なモジュール
```

2. Node.jsモジュールインストールされる**node_modules**ディレクトリはVCS管理対象外

3. このテンプレートは最小限のモジュールしか対応されていないため、以下のような必要なモジュールは個別のプロジェクトで開発リーダーが対応してください。
    * Node.jsモジュール検索 : https://www.npmjs.com/
    * livereload : https://github.com/vohof/gulp-livereload
    * forever : https://github.com/foreverjs/forever

---

## ESLint

The pluggable linting utility for JavaScript and JSX

1. JavaScriptコードのスタイルチェックツール
    * Official size : http://eslint.org/
2. .eslintrc.json
    * ESLintの設定ファイル : http://eslint.org/docs/user-guide/configuring
    * ファイル生成
```bash
$ ./node_modules/.bin/eslint --init
? How would you like to configure ESLint? Use a popular style guide
? Which style guide do you want to follow? Standard
? What format do you want your config file to be in? JSON
```
    * Example
```json
{
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "no-const-assign": "warn",
        "no-this-before-super": "warn",
        "no-undef": "warn",
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "constructor-super": "warn",
        "valid-typeof": "warn"
    }
}
```


---

## Coding guidelines

1. Official TypeScript Coding guidelines
    * https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines
2. TypeScript StyleGuide and Coding Conventions
    * https://basarat.gitbooks.io/typescript/content/docs/styleguide/styleguide.html

---

## Build

```npm run build```コマンドでビルド（package.jsonにbuild script設定前提）

Example
```bash
$ npm run build

> ts_project@1.0.0 build /Users/babukuma/Documents/GitRepositories/NES/ts_project
> gulp build

[12:54:39] Using gulpfile ~/Documents/GitRepositories/NES/ts_project/gulpfile.js
[12:54:39] Starting 'build'...
[12:54:41] Finished 'build' after 1.76 s
```

---

## Unit Test

1. Mocha : test framework
    * Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.
    * Official site : http://mochajs.org/
2. Testコードの書き方
    * Official site参照
    * Example
```typescript
/// <reference path="../../../typings/index.d.ts" />
import * as assert from "assert";
import { Calcurator } from "../../app/util/calcurator";

describe("Calcurator", () => {
    describe("#add()", () => {
        it("should correct result", () => {
            assert.equal(3, Calcurator.add(1, 2));
            assert.equal(6, Calcurator.add(1, 2, 3));
            assert.equal(7, Calcurator.add(1, 2, 3, 1));
        });
    });

    describe("#subtract()", () => {
        it("should correct result", () => {
            assert.equal(-1, Calcurator.subtract(1, 2));
            assert.equal(0, Calcurator.subtract(3, 2, 1));
            assert.equal(-5, Calcurator.subtract(1, 2, 3, 1));
        });
    });
});
```
3. Test実行
```
$ npm test
or
$ gulp test
```

4.  成功時の結果例
```
  Calcurator
    #add()
      ✓ should correct result
    #subtract()
      ✓ should correct result

  Module02
    #add()
      ✓ should correct result


  3 passing (7ms)
```

5. 失敗時の結果例
```
  Module02
    #add()
      ✓ should correct result

  Calcurator
    #add()
      1) should correct result
    #subtract()
      ✓ should correct result


  2 passing (9ms)
  1 failing

  1) Calcurator #add() should correct result:

      AssertionError: 8 == 7
      + expected - actual

      -8
      +7
      
      at Context.<anonymous> (test/util/calcurator_test.js:9:20)
```

---

## Unit Test Coverage

1. istanbul : a JS code coverage tool written in JS
    * Official site : https://github.com/gotwarlost/istanbul
    * gulp-istanbul : https://github.com/SBoudrias/gulp-istanbul
2.  実行
```
$ npm test
or
$ gulp test
```

3. レポート例
    * Console
```
-------------------|----------|----------|----------|----------|----------------|
File               |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-------------------|----------|----------|----------|----------|----------------|
 module1/          |    92.86 |      100 |    66.67 |    92.86 |                |
  module_sample.js |    92.86 |      100 |    66.67 |    92.86 |              7 |
 util/             |      100 |      100 |       75 |      100 |                |
  calcurator.js    |      100 |      100 |       75 |      100 |                |
-------------------|----------|----------|----------|----------|----------------|
All files          |    97.06 |      100 |       70 |    97.06 |                |
-------------------|----------|----------|----------|----------|----------------|


=============================== Coverage summary ===============================
Statements   : 97.06% ( 33/34 )
Branches     : 100% ( 0/0 )
Functions    : 70% ( 7/10 )
Lines        : 97.06% ( 33/34 )
================================================================================
```

    * output report file : ./coverage/lcov-report/index.html
![Coverage report](coverage.png)

---

## Run

```
npm start
```
