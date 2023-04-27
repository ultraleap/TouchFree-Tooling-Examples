<!--links-->
[discord]: https://discord.com/invite/3VCndThqxS "Discord Server"
[touchfree]: https://developer.leapmotion.com/touchfree "TouchFree Download"
[documentation]: https://docs.ultraleap.com/touchfree-user-manual/ "Ultraleap TouchFree Documentation"
[web]: https://developer.leapmotion.com/touchfree-tooling-for-web "TouchFree Web Tooling"
[webgithub]: https://github.com/ultraleap/TouchFreeWebTooling "TouchFree Web Tooling GitHub"
[unity]: https://developer.leapmotion.com/touchfree-tooling-unity "TouchFree Unity Tooling"
[unitygithub]: https://github.com/ultraleap/TouchFreeUnityTooling "TouchFree Unity Tooling GitHub"

# TouchFree-Tooling-Examples

[![touchfree](https://img.shields.io/badge/TouchFree-00cf75)][touchfree]
[![webtooling](https://img.shields.io/badge/Web%20Tooling-00cf75)][web]
[![unitytooling](https://img.shields.io/badge/Unity%20Tooling-00cf75)][unity]

[![documentation](https://img.shields.io/badge/Documentation-docs.ultraleap.com-e47400)][documentation]
[![mail](https://img.shields.io/badge/Email%20Support%20-%20support%40ultraleap.com-7535de)](mailto:support@ultraleap.com)
[![discord](https://img.shields.io/badge/Ultraleap%20Developer%20Discord-7535de)][discord]

This repository is a collection of examples including:

- [TouchFree Web Tooling][web] ([GitHub][webgithub])
- [TouchFree Unity Tooling][unity] ([GitHub][unitygithub]).
- TouchFree on BrightSign

## How to use

- Find the desired example subdirectory within this repository
- Copy the desired example subdirectory into your project that uses TouchFree Tooling
- Read the Readme within the desired example subdirectory

### TouchFree Web Tooling Integration

This repository uses an [NPM workspace](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true) to integrate the TouchFree tooling into the web examples. When integrating the tooling into your own project there are a couple of ways we recommend:

1. JS Bundle
   - A single `TouchFree_Tooling.js` bundle file available as a [download on the Ultraleap website][web].
   - Steps to add this to a website are shown in the [documentation site](https://docs.ultraleap.com/touchfree-user-manual/tooling-for-web.html#add-touchfree-tooling-in-one-minute).
2. NPM Workspace with Git Submodule
   - Create a root package.json in a project folder (above both the submodule and your project) and add your project’s package.json and TouchFree Web Tooling package.json as workspaces within. See the official npm workspaces docs for more details.
   - As an example, this repository has a workspaces package.json. Note that you cannot reuse this file in your project as root-level package.json files are not nestable.
   - NOTE: Webpack doesn't seem to work with this method
3. Integrating with Git URL
   - Use TouchFree Web Tooling as an NPM package retrieved from the [GitHub repository](https://github.com/ultraleap/TouchFree).
   - Web tooling is a subdirectory of the TouchFree monorepo. Git URL for subdirectories are not officially supported by npm git protocol. Thankfully a service exists to handle this use case - [GitPkg](https://gitpkg.vercel.app/). See [guide](https://gitpkg.vercel.app/guide/) for usage instructions.

## Attributions

Surfer emoji used in WaveProgressButton Example designed by [OpenMoji](https://openmoji.org/) – the open-source emoji and icon project. License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/#)

# Support

User Support Email: support@ultraleap.com

[Ultraleap Developer Discord][discord]