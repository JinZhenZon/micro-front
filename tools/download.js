const download = require('download-git-repo')
const ora = require('ora');
const package = require('../package.json');

/**
 * 下载git项目
 * @param {*} projectName 项目名称
 */

function gitDownload(projectName){
    let projectUrl = package.templat;
    //loading进度圈
    const spinner = ora('Download').start();
    return new Promise((resolve, reject) => {
        // 下载 git 模板
        spinner.start();
        
        download(projectUrl,
            projectName, {}, (err) => {
                if (err) {
                    reject(err)
                } else {
                    spinner.stop();
                    resolve(projectName);
                }
            })
    })
}

// gitDownload(NPath.get());


module.exports = gitDownload;