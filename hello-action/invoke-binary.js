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
    return `hello-action-linux-amd64-a968a9cf0eedd4d101650b473c392d530c4bd1d1`;
  } else if (platform === "linux" && arch === "386") {
    return `hello-action-linux-386-a968a9cf0eedd4d101650b473c392d530c4bd1d1`;
  } else if (platform === "darwin" && arch === "x64") {
    return `hello-action-darwin-amd64-a968a9cf0eedd4d101650b473c392d530c4bd1d1`;
  } else if (platform === "windows" && arch === "x64") {
    return `hello-action-windows-amd64-a968a9cf0eedd4d101650b473c392d530c4bd1d1`;
  } else if (platform === "windows" && arch === "386") {
    return `hello-action-windows-386-a968a9cf0eedd4d101650b473c392d530c4bd1d1`;
  }
  // ...
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;
const spawnSyncReturns = child_process.spawnSync(mainScript, {
  stdio: "inherit",
});
