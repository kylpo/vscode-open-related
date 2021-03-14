import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.openRelated",
    () => {
      // Get the current editor
      const editor = vscode.window.activeTextEditor;
      if (editor == null) {
        console.log("No active editor!");
        return;
      }

      const doc = editor.document;
      if (doc.isUntitled) {
        console.log("Untitled files do not have related files.");
        return;
      }

      // See https://github.com/bgse/relative-path-and-line/blob/master/src/extension.ts#L34
      // get workspace relative path
      // let path = vscode.workspace.asRelativePath(doc.fileName);
      // let path = doc.fileName.replace(/\.[^/.]+$/, "")
      // vscode.commands.executeCommand(
      // 	'workbench.action.quickOpen',
      // 	path
      // );

      // const filePath = path.parse(doc.fileName);
      const { dir, ext, name } = path.parse(
        vscode.workspace.asRelativePath(doc.fileName)
      );

      const blockList = vscode.workspace.getConfiguration(
        "extension.openRelated"
      ).subdirectories;

      // const blockList = ["__tests__", "__stories__"];
      const dirPath = dir.split(path.sep);
      const parentDir = dirPath.pop();

      const query =
        parentDir != null && blockList.includes(parentDir)
          ? `${dirPath.join(path.sep)}/${name.split(".")[0]}`
          : `${dir}/${name.split(".")[0]}`;

      vscode.commands.executeCommand("workbench.action.quickOpen", query);

      // let filename = doc.fileName.replace(/\.[^/.]+$/, "")
      // const { dir, ext, name } = path.parse(doc.fileName);

      // const config = {
      //   Component: {
      //     // parentDir: "/",
      //     // ext: [".ts", ".tsx"],
      //   },
      //   Test: {
      //     parentDir: "__tests__",
      //     nameExt: "test",
      //   },
      //   Stories: {
      //     parentDir: "__stories__",
      //     nameExt: "stories",
      //   },
      // };

      // // See https://github.com/AlanWalk/quick-open-file/blob/master/src/utils.ts
      // vscode.window
      //   .showQuickPick(Object.keys(config), { matchOnDetail: true })
      //   .then((option) => {
      //     const dirPath = dir.split(path.sep);
      //     const parentDir = dirPath.pop();

      //     if (parentDir == "__tests__") {
      //       vscode.workspace
      //         .openTextDocument(
      //           `${dirPath.join(path.sep)}/${name.split(".")[0]}${ext}`
      //         )
      //         .then((editor) => {
      //           if (!editor) return;
      //           vscode.window.showTextDocument(editor);
      //         });
      //       return;
      //     }
      //     const testPath = `${dir}/__tests__/${name}.test${ext}`;

      //     if (fs.existsSync(testPath)) {
      //       vscode.workspace.openTextDocument(testPath).then((editor) => {
      //         if (!editor) return;
      //         vscode.window.showTextDocument(editor);
      //       });
      //     } else {
      //       try {
      //         const folderPath = `${dir}/__tests__/`;
      //         // create the directory
      //         if (!fs.existsSync(folderPath)) {
      //           fs.mkdirSync(folderPath);
      //         }
      //         fs.writeFileSync(testPath, "" /*content*/);

      //         vscode.workspace.openTextDocument(testPath).then((editor) => {
      //           if (!editor) return;
      //           vscode.window.showTextDocument(editor);
      //         });
      //       } catch (err) {
      //         // log?
      //         console.log("Error", err.message);

      //         throw err;
      //       }
      //     }
      //   });
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
