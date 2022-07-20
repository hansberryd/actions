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
    return `tfc-workspace-action-linux-amd64-9b317170490ce70f05caed33ab0259105db745be`;
  } else if (platform === "linux" && arch === "386") {
    return `tfc-workspace-action-linux-386-9b317170490ce70f05caed33ab0259105db745be`;
  } else if (platform === "darwin" && arch === "x64") {
    return `tfc-workspace-action-darwin-amd64-9b317170490ce70f05caed33ab0259105db745be`;
  } else if (platform === "windows" && arch === "x64") {
    return `tfc-workspace-action-windows-amd64-9b317170490ce70f05caed33ab0259105db745be`;
  } else if (platform === "windows" && arch === "386") {
    return `tfc-workspace-action-windows-386-9b317170490ce70f05caed33ab0259105db745be`;
  }
  // ...
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;
const spawnSyncReturns = child_process.spawnSync(mainScript, {
  stdio: "inherit",
});
