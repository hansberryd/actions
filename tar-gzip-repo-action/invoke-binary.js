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
    return `tar-gzip-repo-action-linux-amd64-59ae506d27a2364d8e3e7c3e26beff19a393ddb6`;
  } else if (platform === "linux" && arch === "386") {
    return `tar-gzip-repo-action-linux-386-59ae506d27a2364d8e3e7c3e26beff19a393ddb6`;
  } else if (platform === "darwin" && arch === "x64") {
    return `tar-gzip-repo-action-darwin-amd64-59ae506d27a2364d8e3e7c3e26beff19a393ddb6`;
  } else if (platform === "windows" && arch === "x64") {
    return `tar-gzip-repo-action-windows-amd64-59ae506d27a2364d8e3e7c3e26beff19a393ddb6`;
  } else if (platform === "windows" && arch === "386") {
    return `tar-gzip-repo-action-windows-386-59ae506d27a2364d8e3e7c3e26beff19a393ddb6`;
  }
  // ...
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;
const spawnSyncReturns = child_process.spawnSync(mainScript, {
  stdio: "inherit",
});
