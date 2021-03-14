import * as vscode from "vscode";
import * as path from "path";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const { subdirectories } = vscode.workspace.getConfiguration(
    "extension.openRelated"
  );

  let disposable = vscode.commands.registerCommand(
    "extension.openRelated",
    () => {
      // Get the current editor
      const editor = vscode.window.activeTextEditor;
      if (editor == null) {
        console.log("No active editor!");
        return;
      }

      // Get the current file
      const doc = editor.document;
      if (doc.isUntitled) {
        console.log("Untitled files do not have related files.");
        return;
      }

      const { dir, name } = path.parse(
        vscode.workspace.asRelativePath(doc.fileName)
      );

      const directoriesInPath = dir.split(path.sep);
      const parentDirectory = directoriesInPath.pop();

      const query =
        parentDirectory != null && subdirectories.includes(parentDirectory)
          ? `${directoriesInPath.join(path.sep)}/${name.split(".")[0]}`
          : `${dir}/${name.split(".")[0]}`;

      vscode.commands.executeCommand("workbench.action.quickOpen", query);
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
