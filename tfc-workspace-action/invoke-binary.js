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
    return `tfc-workspace-action-linux-amd64-723115dad9e49f35dd40ca87d6dd4316ca9a9147`;
  } else if (platform === "linux" && arch === "386") {
    return `tfc-workspace-action-linux-386-723115dad9e49f35dd40ca87d6dd4316ca9a9147`;
  } else if (platform === "darwin" && arch === "x64") {
    return `tfc-workspace-action-darwin-amd64-723115dad9e49f35dd40ca87d6dd4316ca9a9147`;
  } else if (platform === "windows" && arch === "x64") {
    return `tfc-workspace-action-windows-amd64-723115dad9e49f35dd40ca87d6dd4316ca9a9147`;
  } else if (platform === "windows" && arch === "386") {
    return `tfc-workspace-action-windows-386-723115dad9e49f35dd40ca87d6dd4316ca9a9147`;
  }
  // ...
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;
const spawnSyncReturns = child_process.spawnSync(mainScript, {
  stdio: "inherit",
});
