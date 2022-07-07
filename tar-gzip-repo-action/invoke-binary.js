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
    return `tar-gzip-repo-action-linux-amd64-3dd883817034015e01e17dba57821035a6d4783a`;
  } else if (platform === "linux" && arch === "386") {
    return `tar-gzip-repo-action-linux-386-3dd883817034015e01e17dba57821035a6d4783a`;
  } else if (platform === "darwin" && arch === "x64") {
    return `tar-gzip-repo-action-darwin-amd64-3dd883817034015e01e17dba57821035a6d4783a`;
  } else if (platform === "windows" && arch === "x64") {
    return `tar-gzip-repo-action-windows-amd64-3dd883817034015e01e17dba57821035a6d4783a`;
  } else if (platform === "windows" && arch === "386") {
    return `tar-gzip-repo-action-windows-386-3dd883817034015e01e17dba57821035a6d4783a`;
  }
  // ...
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;
const spawnSyncReturns = child_process.spawnSync(mainScript, {
  stdio: "inherit",
});
