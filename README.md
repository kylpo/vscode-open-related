# VSCode Extension: Open Related

[![Version](https://vsmarketplacebadge.apphb.com/version-short/kylpo.vscode-open-related.svg)](https://marketplace.visualstudio.com/items?itemName=kylpo.vscode-open-related)
[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/kylpo.vscode-open-related.svg)](https://marketplace.visualstudio.com/items?itemName=kylpo.vscode-open-related)

Open files related to your current one.

## Features

Currently, this is a bare-bones, primitive implementation of a command that shows files related to your current one. It does so by pre-populating VSCode's `Quick Open` command, but may be improved upon in the future with a custom menu that finds and creates files (when they don't already exist).

> Note: by default, this highlights peer or descendent files. If, however, you are already in a descendent file (e.g. `/__tests__/MyFile.test.ts`), it will show related files from the folder above it (e.g. `../MyFile`).

## Extension Settings

Open your [keybindings.json](https://code.visualstudio.com/docs/getstarted/keybindings#_advanced-customization) and add a keybinding like:

```json
{
  "key": "cmd+shift+o",
  "command": "extension.openRelated",
  "when": "editorTextFocus"
}
```

Identify subdirectories to the root file of a related groups by adding to your [settings.json](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations) something like:

```json
"extension.openRelated.subdirectories": ["__tests__", "__stories__"]
```

Above's configuration will work well with a folder structure like:

```
MyFile.tsx
/__tests__/MyFile.test.tsx
/__stories__/MyFile.stories.tsx
```

## Release Notes

### 1.0.0

Initial release

## Developer

### Helpful Resources

- [How to Make A Visual Studio Code Extension [to Generate Ducks] | by Van Huynh](https://itnext.io/how-to-make-a-visual-studio-code-extension-77085dce7d82)
- [How to write file if parent folder doesn't exist?](https://stackoverflow.com/questions/16316330/how-to-write-file-if-parent-folder-doesnt-exist#)
- [vscode-open-related-files/relatedFiles.ts](https://github.com/GeorgeSG/vscode-open-related-files/blob/master/src/relatedFiles.ts)

## Similar Extensions

- [GeorgeSG/vscode-open-related-files: VSCode extension that allows you to quickly open files that are in the same folder and have the same name as the one you're currently editing.](https://github.com/GeorgeSG/vscode-open-related-files)
- [suchitadoshi1987/related-files-hopper: Get easy access to all the related files in your app](https://github.com/suchitadoshi1987/related-files-hopper)
- [eamodio/vscode-find-related: Finds files related to the current file based on user-defined configuration rules in VS Code](https://github.com/eamodio/vscode-find-related)
- [AdrianWilczynski/Switcher: Visual Studio Code extension. Switch between related files (same name, different extensions) using keybindings, context menu or command palette. Configured out of box to work with Angular, Razor Pages, TypeScript, Sass and minified JS or CSS files.](https://github.com/AdrianWilczynski/Switcher)
- [File Switcher - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=adrianwilczynski.simple-switcher)
- [bryanthomaschen/vscode-open-related-file: VS Code extension to open files that have the same name as the currently opened file, but with a different extension](https://github.com/bryanthomaschen/vscode-open-related-file)
- [schreifels/vscode-quick-open-related-files: Instantly jump to related files using the Quick Open menu in VS Code](https://github.com/schreifels/vscode-quick-open-related-files)
