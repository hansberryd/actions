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
    return `git-checkout-action-linux-amd64-c9c2fef7d35d738450401736b525cc4e4ff97eba`;
  } else if (platform === "linux" && arch === "386") {
    return `git-checkout-action-linux-386-c9c2fef7d35d738450401736b525cc4e4ff97eba`;
  } else if (platform === "darwin" && arch === "x64") {
    return `git-checkout-action-darwin-amd64-c9c2fef7d35d738450401736b525cc4e4ff97eba`;
  } else if (platform === "windows" && arch === "x64") {
    return `git-checkout-action-windows-amd64-c9c2fef7d35d738450401736b525cc4e4ff97eba`;
  } else if (platform === "windows" && arch === "386") {
    return `git-checkout-action-windows-386-c9c2fef7d35d738450401736b525cc4e4ff97eba`;
  }
  // ...
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;
const spawnSyncReturns = child_process.spawnSync(mainScript, {
  stdio: "inherit",
});
