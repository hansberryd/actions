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
    return `tfc-config-version-action-linux-amd64-0e2bfdaa062c031c38214dc4a8e8ae63f9ce4ba0`;
  } else if (platform === "linux" && arch === "386") {
    return `tfc-config-version-action-linux-386-0e2bfdaa062c031c38214dc4a8e8ae63f9ce4ba0`;
  } else if (platform === "darwin" && arch === "x64") {
    return `tfc-config-version-action-darwin-amd64-0e2bfdaa062c031c38214dc4a8e8ae63f9ce4ba0`;
  } else if (platform === "windows" && arch === "x64") {
    return `tfc-config-version-action-windows-amd64-0e2bfdaa062c031c38214dc4a8e8ae63f9ce4ba0`;
  } else if (platform === "windows" && arch === "386") {
    return `tfc-config-version-action-windows-386-0e2bfdaa062c031c38214dc4a8e8ae63f9ce4ba0`;
  }
  // ...
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;
const spawnSyncReturns = child_process.spawnSync(mainScript, {
  stdio: "inherit",
});
