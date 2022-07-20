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
    return `git-checkout-action-linux-amd64-ff9cf78d1241b6444cea069ae0c719d4874dcfec`;
  } else if (platform === "linux" && arch === "386") {
    return `git-checkout-action-linux-386-ff9cf78d1241b6444cea069ae0c719d4874dcfec`;
  } else if (platform === "darwin" && arch === "x64") {
    return `git-checkout-action-darwin-amd64-ff9cf78d1241b6444cea069ae0c719d4874dcfec`;
  } else if (platform === "windows" && arch === "x64") {
    return `git-checkout-action-windows-amd64-ff9cf78d1241b6444cea069ae0c719d4874dcfec`;
  } else if (platform === "windows" && arch === "386") {
    return `git-checkout-action-windows-386-ff9cf78d1241b6444cea069ae0c719d4874dcfec`;
  }
  // ...
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;
const spawnSyncReturns = child_process.spawnSync(mainScript, {
  stdio: "inherit",
});
