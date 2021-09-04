const { NodeSSH } = require('node-ssh');

class AutoUpload {
  constructor(options) {
    this.ssh = new NodeSSH()
    this.options = options
    // let { host, username, password, remotePath } = options;
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync("AutoUpload", async (compilation, callback) => {

      // 1.获取输出的文件夹
      const outputPath = compilation.outputOptions.path;

      // 2.连接服务器
      await this.ssh_connect();

      console.log(this.options.remotePath);
      // 3.在远程主机执行命令，删除某个目录中的内容
      await this.ssh.execCommand(`rm -rf ${this.options.remotePath}/*`);

      // 4.将输出的目录内容上传到远程服务器
      await this.ssh_upload(outputPath, this.options.remotePath);

      // 5.关闭ssh
      this.ssh.dispose();

      callback();
    });
  }

  async ssh_connect() {
    await this.ssh.connect({
      host: this.options.host,
      username: this.options.username,
      password: this.options.password
    })
    console.log("ssh连接成功");
  }

  async ssh_upload(localPath, remotePath) {
    const status = await this.ssh.putDirectory(localPath, remotePath, {
      recursive: true,
      concurrency: 10
    });
    console.log('传送到服务器:', status ? "成功" : "失败");
  }
}

module.exports = AutoUpload;

