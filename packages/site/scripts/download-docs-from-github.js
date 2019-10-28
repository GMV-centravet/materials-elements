var download = require('download-git-repo');

download('GMV-centravet/materials', 'docs/dist', {}, function (err) {
  console.log(err ? 'Error' : 'Success')
})
