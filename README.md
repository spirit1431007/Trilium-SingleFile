# Trilium-SingleFile
An addon for [Trilium Notes](https://github.com/zadam/trilium) to easily import [SingleFile](https://github.com/gildas-lormeau/SingleFile) html pages.

Note: Due to the non-standard APIs and globals used, consider this addon in beta. I expect many issues to be found.

## Preview
<!-- https://raw.githubusercontent.com/rauenzi/Trilium-SingleFile/blob/main/LICENSE -->
https://github.com/zadam/trilium/assets/6865942/8f6dd790-18ac-49bb-b494-247cd8edfa30


## Features

- Easily import SingleFile pages via drag and drop
- SingleFile pages are saved in Trilium unedited
- Preview them directly in Trilium with a fancy pseudo-browser UI
- Fancy in-app settings UI
- Multiple settings and customization

### Desktop

There are some features specific to the desktop client of Trilium.
- Watch a local folder for newly added SingleFile pages
- Customize which folder to watch as well as a toggle to enable/disable


## Installation

1. Download the `zip` file from the [latest release](https://github.com/rauenzi/Trilium-SingleFile/releases/latest) on GitHub.
2. Import the zip into Trilium, but make sure you uncheck `Safe Import`!


## Upgrade

1. Delete old note `Trilium SingleFile`
2. Import new note (see #Installation)
3. Add relation
    - create Search & Execute action
    - search string: `#singleFilePreview`
    - add relation: `renderNote` to `Renderer HTML`(select)


## Usage

- New imports are automatically placed into your `#singleFileInbox`
    - If there's no note with `#singleFileInbox` attribute then it uses `#inbox`
    - If there's no `#inbox` then it uses a daily note
- Use the UI to customize your settings at any time!
- All render notes will be given `#singleFilePreview`
- All SingleFile notes will be given `#singleFileSource`

### Import

1. Click on the render note called `Trilium SingleFile`
1. Drop any SingleFile pages in the drop zone

### File Watcher

1. Use the UI to change the folder to be watched
    - User downloads folder is used by default
1. Download a webpage using SingleFile
