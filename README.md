# VSCode Extension: Open Related

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

Identify subdirectories in related groups by adding to your [settings.json](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations) something like:

```json
"extension.openRelated.subdirectiories": ["__tests__", "__stories__"]
```

The configuration will work well with a folder structure like:

```
/MyFile.tsx
/__tests__/MyFile.test.tsx
/__stories__/MyFile.stories.tsx
```

## Release Notes

### 1.0.0

Initial release

```

```
