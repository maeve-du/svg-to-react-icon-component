/**
 * File Description: A Node.js script to remove specified strings from multiple files within a folder.
 *
 * Features:
 * - Searches for and removes specified strings from the content of files.
 * - Supports processing multiple files within a specified folder.
 *
 * Usage:
 * - Configure the 'folderPath' variable to point to the folder containing the files to process.
 * - Customize the 'searchString' variable to match the string you want to remove.
 * - Run the script using Node.js.
 *
 * Author: [Maeve Du]
 * Date: [2023-09-05]
 */

import fs from 'fs'
import path from 'path'
const scriptUrl = new URL(import.meta.url)
const scriptDirectory = path.dirname(scriptUrl.pathname)
const folderPath = path.join(scriptDirectory, '../src/icons')
const searchString = `import\\s*\\*\\s*as\\s*React\\s*from\\s*'react'`

function processFile(filePath) {
  try {
    let fileContent = fs.readFileSync(filePath, 'utf8')
    console.log('Before replacement:', fileContent)
    fileContent = fileContent.replace(new RegExp(searchString, 'g'), '')
    fileContent = fileContent.replace(/^\s*[\r\n]/gm, '')
    console.log('After replacement:', fileContent)
    fs.writeFileSync(filePath, fileContent, 'utf8')
    console.log(`Removed '${searchString}' from ${filePath}`)
  } catch (error) {
    console.error(`Error processing ${filePath}: ${error.message}`)
  }
}

function processFolder(folderPath) {
  const files = fs.readdirSync(folderPath)

  files.forEach((file) => {
    const filePath = path.join(folderPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isFile()) {
      processFile(filePath)
    } else if (stats.isDirectory()) {
      processFolder(filePath)
    }
  })
}

processFolder(folderPath)
