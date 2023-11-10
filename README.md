[![build/tests](https://github.com/plaited/storybook-framework/actions/workflows/tests.yml/badge.svg)](https://github.com/plaited/storybook-framework/actions/workflows/tests.yml)

# Storybook Plaited

This mono repo serves as the workspace for working on our libraries for developing PlaitedComponents and FunctionTempaltes with storybook

## Libraries

- [@plaited/storybook](libs/storybook/README.md): Storybook renderer for PlaitedComponents and FunctionTemplates
- [@plaited/storbook-vite](libs/storbook-vite/README.md): Storybook framework for Plaited Components and FunctionTemplates
- [@plaited/storybook-rite](libs/rite/README.md): Storybook integration for [@plaited/rite](https://github.com/plaited/rite), instrumented for use with the [Interactions addon](https://github.com/storybookjs/storybook/blob/next/code/addons/interactions/README.md)

## Dev Requirements

### local

- bun >= 1.0.7

### devcontainer requirements

- vscode
- Docker

## Dev Setup

### local setup

1. Clone repository and ensure you have bun >= 1.0.7
2. Run `bunx playwright install`
3. Run `bash setup.sh`

### devcontainer setup

1. Install docker on local machine
2. Ensure docker desktop daemon/app is running
3. Open new window for VSCode
4. `ctrl/cmd + shift + p`
5. search for **Dev Containers:Clone Repository in Container Volume**
6. Enter this repo name **plaited/plaited**
7. Wait for it to download and set everything up
8. Open a VSCode terminal tab and run `zsh setup.sh`
