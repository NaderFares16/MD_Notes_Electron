import { ensureDir, readdir } from 'fs-extra'
import { homedir } from 'os'
import { appDirectoryName, fileEncoding } from 'src/shared/constants'
import { NoteInfo } from 'src/shared/models'

export const getRootDir = () => {
  return `${homedir}/${appDirectoryName}`
}

export const getNotes = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const notes = notesFileNames.filter((fileName) => fileName.endsWith('.md'))

  return notes
}

export const getNoteInfoFromFileName = async (filename: string): Promise<NoteInfo> => {
  const fileStats = await stat(`${getRootDir}`)
}
