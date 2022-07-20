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
    return `git-checkout-action-linux-amd64-71e7a0f27c3192d7f62d104006dbfdadbad9492e`;
  } else if (platform === "linux" && arch === "386") {
    return `git-checkout-action-linux-386-71e7a0f27c3192d7f62d104006dbfdadbad9492e`;
  } else if (platform === "darwin" && arch === "x64") {
    return `git-checkout-action-darwin-amd64-71e7a0f27c3192d7f62d104006dbfdadbad9492e`;
  } else if (platform === "windows" && arch === "x64") {
    return `git-checkout-action-windows-amd64-71e7a0f27c3192d7f62d104006dbfdadbad9492e`;
  } else if (platform === "windows" && arch === "386") {
    return `git-checkout-action-windows-386-71e7a0f27c3192d7f62d104006dbfdadbad9492e`;
  }
  // ...
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;
const spawnSyncReturns = child_process.spawnSync(mainScript, {
  stdio: "inherit",
});
