<div align="center">
<h1>🦺 Create React Component 🦺</h1>
<p>A CLI react component creator</p>
</div>

-----

## Introduction
IDE snippets are ephemeral and aren't easily shared. I generally like all of my files to live close together and I am pretty lazy, so I created this package to automate my react component creation.

## Installation
```shell
$ npm install --save-dev @tsw38/create-react-component
```

## Usage

This package adds two binaries to the node_modules `crc` and `create-react-component`, they both do the same thing and for the purposes of this read me, I will be using them interchangably.

|   Option          | Alias  | Description                                           | Default          |
| ----------------- | ------ | ----------------------------------------------------- | ---------------- |
| `--destination`   | `-d`   | An optional flag for the destination of the component | `src/components` |
| `--component`     | `-c`   | The name of the component to be created               | n/a              |
| `--typescript`    | `--ts` | If the component should be a ts file                  | `false`          |
| `--with-story`    | `--ws` | If a story file should be included                    | `false`          |

## Examples:

#### `crc -c Calculator`
This creates a javascript component named Calculator within `src/components`

#### `crc -d src/common -c SomeComponent --ts --ws`
This create a typescript component named SomeComponent within `src/common/SomeComponent` with a story file for storybook