import { promises as fs } from 'node:fs';
import { join } from 'node:path';

async function copyDirRecursive(src: string, dist: string) {

    await fs.mkdir(dist, { recursive: true })

    const entries = await fs.readdir(src, { withFileTypes: true })

    for (const entry of entries) {

        const scrPath = join(src, entry.name)
        const distPath = join(dist, entry.name)

        if (entry.isDirectory()) {
          await copyDirRecursive(scrPath, distPath)
        }
        if (entry.isFile()) {
            await fs.copyFile(scrPath, distPath)
        }

    }
}

copyDirRecursive('./source-dist', './public/assets').then(()=> console.log('Копирование завершено')).catch((err)=> console.error('Произошла ошибка: ', err))
