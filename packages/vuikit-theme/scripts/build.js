import path from 'path'
import { run, remove, task, less, minifyCSS } from '@miljan/build'

run(async () => {
  await remove('dist')

  await task('Compile', async () => {
    await less({
      src: 'src/index.less',
      dest: 'dist/vuikit.css',
      options: {
        relativeUrls: true,
        paths: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../../../node_modules')
        ]
      }
    })

    await minifyCSS({
      src: 'dist/vuikit.css',
      dest: 'dist/vuikit.min.css',
      options: {
        sourceMap: true
      }
    })
  })
})
