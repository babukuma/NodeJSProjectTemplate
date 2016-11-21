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

## プロジェクトを作成（開発リーダー向け）

### 1. create a project directory

```
mkdir ts_project
cd ts_project
```

### 2. create a package.json file

```
npm init -y
```

### 3. install packages for development

```
npm install --save-dev gulp
npm install --save-dev typescript
npm install --save-dev gulp-typescript
npm install --save-dev tslint
npm install --save-dev gulp-tslint
npm install --save-dev mocha
npm install --save-dev gulp-mocha
npm install --save-dev istanbul
npm install --save-dev gulp-istanbul
```

### 4. create a tsconfig.json

1. tsconfig.json document : https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
2. Example

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "outDir": "dest",
        "sourceMap": true
    },
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}
```

### 5. create a tslint.json

1. tslint.json document : https://palantir.github.io/tslint/usage/tslint-json/
2. Example

```json
{
    "rules": {
        "class-name": true,
        "comment-format": [
            true,
            "check-space"
        ],
        "indent": [
            true,
            "spaces"
        ],
        "no-duplicate-variable": true,
        "no-eval": true,
        "no-internal-module": true,
        "no-trailing-whitespace": true,
        "no-unsafe-finally": true,
        "no-var-keyword": true,
        "one-line": [
            true,
            "check-open-brace",
            "check-whitespace"
        ],
        "quotemark": [
            true,
            "double"
        ],
        "semicolon": [
            true,
            "always"
        ],
        "triple-equals": [
            true,
            "allow-null-check"
        ],
        "typedef-whitespace": [
            true,
            {
                "call-signature": "nospace",
                "index-signature": "nospace",
                "parameter": "nospace",
                "property-declaration": "nospace",
                "variable-declaration": "nospace"
            }
        ],
        "variable-name": [
            true,
            "ban-keywords"
        ],
        "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-type"
        ]
    }
}
```

### 6. install TypeScript definition files

1. Typings document : https://github.com/typings/typings
2. Example

```sh
# node
typings install dt~node --global --save
# mocha
typings install dt~mocha --global --save
```

### 7. create a gulpfile.js

1. gulpfile.js document : https://github.com/gulpjs/gulp
2. Example

```js
"use strict";
const gulp = require("gulp");
// check style for typescript
const tslint = require("gulp-tslint");
// compile typescript
const ts = require("gulp-typescript");
const tsProject = ts.createProject('tsconfig.json');
// for testing
const mocha = require('gulp-mocha');
// for coverage
const istanbul = require('gulp-istanbul');

gulp.task('build', () => {
    var tsResult = tsProject.src()
        .pipe(tslint({
            tslint: require("tslint"),
            formatter: "verbose"
        }))
        .pipe(tslint.report())
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('.'));
});

gulp.task('pre-test', function() {
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

gulp.task('default', ['build', 'test']);
```

### 8. add npm-scripts in package.json

1. npm-scripts document : https://docs.npmjs.com/misc/scripts
2. Example

```
{
  ....
  "scripts": {
    "start": "node app/app.js",
    "test": "gulp test",
    "build": "gulp build"
  },
  ....
}
```

### 9. create a ignore file

gitもしくはsubversion用のignore

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
app
test
coverage
!src

```

---

## 既存プロジェクトをCloneして構築（開発メンバー向け）

1. clone or copy a project directory
2. install packages and TypeScript definition files

```bash
cd ts_project
npm install
typings install
```

---

## TODO : Node.jsモジュール管理

---

## TODO : TypeScript Definitionファイル管理

---

## TODO : TypeScript設定

---

## TODO : TSLint

---

## TODO : Coding

---

## TODO : Build

---

## TODO : Unit Test

---

## TODO : Coverage Test

---

## TODO : Run
