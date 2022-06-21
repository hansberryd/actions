const os = require("node:os");
const child_process = require("child_process");

function chooseBinary() {
  let arch = os.arch();
  let platform = os.platform();

  // ...
  if (platform === "linux" && arch === "x64") {
    return `hello-action-linux-amd64-5077bbdfa2095044a9eb4ff4c4211e90f5807b0b`;
  } else if (platform === "linux" && arch === "386") {
    return `hello-action-linux-386-5077bbdfa2095044a9eb4ff4c4211e90f5807b0b`;
  } else if (platform === "darwin" && arch === "x64") {
    return `hello-action-darwin-amd64-5077bbdfa2095044a9eb4ff4c4211e90f5807b0b`;
  } else if (platform === "windows" && arch === "x64") {
    return `hello-action-windows-amd64-5077bbdfa2095044a9eb4ff4c4211e90f5807b0b`;
  } else if (platform === "windows" && arch === "386") {
    return `hello-action-windows-386-5077bbdfa2095044a9eb4ff4c4211e90f5807b0b`;
  }
  // ...
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;
const spawnSyncReturns = child_process.spawnSync(mainScript, {
  stdio: "inherit",
});
