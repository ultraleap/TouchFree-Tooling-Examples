# TouchFree-Tooling-Examples

This repository is a collection of Examples that are intended to be useable in combination with our [TouchFree Tooling](https://github.com/ultraleap/TouchFree).

## WARNINGS

This repository has been made available for you to work with, edit and make your own versions.
This repository and any derivatives of it is presented on an ‘as-is’ basis in line with the Apache
license. Unless it is an officially released application available from our website or an explicitly
agreed license, it is not supported by Ultraleap and we are not responsible for anything that you
create.

If you require assistance whilst working with these repositories we recommend utilising our [Help Center](https://forums.leapmotion.com/), [Developer Forums](https://support.leapmotion.com/hc/en-us) or our [Documentation Site](https://docs.ultraleap.com/) to help you find the answers or get support from the wider developer community.

## How to use:

- Find the desired example subdirectory within this repository
- Copy the desired example subdirectory into your project that uses TouchFree Tooling
- Read the Readme within the desired example subdirectory to ensure you have all dependencies and matching Tooling versions

### TouchFree Tooling for Web Integration

This repository uses an [NPM workspace](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true) to integrate the TouchFree tooling into the web examples. When integrating the tooling into your own project there are a couple of ways we recommend:

1. JS Bundle
   - A single TouchFree_Tooling.js file available as a [download on the Ultraleap website](https://developer.leapmotion.com/touchfree-tooling-for-web).
   - Steps to add this to a website are shown in the [documentation site](https://docs.ultraleap.com/touchfree-user-manual/tooling-for-web.html#add-touchfree-tooling-in-one-minute).
2. NPM Workspace with Git Submodule
   - Create a root package.json in a project folder (above both the submodule and your project) and add your project’s package.json and TouchFree Web Tooling package.json as workspaces within. See the official npm workspaces docs for more details.
   - As an example, the TouchFree repository has a workspaces package.json. Note that you cannot reuse this file in your project as root-level package.json files are not nestable.
   - NOTE: Webpack doesn't seem to work with this method
3. Integrating with Git URL
   - Use TouchFree Web Tooling as an NPM package retrieved from the [GitHub repository](https://github.com/ultraleap/TouchFree).
   - Web tooling is a subdirectory of the TouchFree monorepo. Git URL for subdirectories are not officially supported by npm git protocol. Thankfully a service exists to handle this use case - [GitPkg](https://gitpkg.vercel.app/). See [guide](https://gitpkg.vercel.app/guide/) for usage instructions.

## Attributions

Surfer emoji used in WaveProgressButton Example designed by [OpenMoji](https://openmoji.org/) – the open-source emoji and icon project. License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/#)
