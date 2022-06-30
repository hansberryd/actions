const os = require("node:os");
const child_process = require("child_process");

function chooseBinary() {
  let arch = os.arch();
  let platform = os.platform();

  // ...
  if (platform === "linux" && arch === "x64") {
    console.log(
      "Chosen platform is: " +
        platform +
        " " +
        "and identified architecture is: " +
        arch
    );
    return `hello-action-linux-amd64-57bfec453022d4c4f24f421039df0c00b0d04a3b`;
  } else if (platform === "linux" && arch === "386") {
    return `hello-action-linux-386-57bfec453022d4c4f24f421039df0c00b0d04a3b`;
  } else if (platform === "darwin" && arch === "x64") {
    return `hello-action-darwin-amd64-57bfec453022d4c4f24f421039df0c00b0d04a3b`;
  } else if (platform === "windows" && arch === "x64") {
    return `hello-action-windows-amd64-57bfec453022d4c4f24f421039df0c00b0d04a3b`;
  } else if (platform === "windows" && arch === "386") {
    return `hello-action-windows-386-57bfec453022d4c4f24f421039df0c00b0d04a3b`;
  }
  // ...
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;
const spawnSyncReturns = child_process.spawnSync(mainScript, {
  stdio: "inherit",
});
