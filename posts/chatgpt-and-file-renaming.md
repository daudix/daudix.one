# ChatGPT And File Renaming

## Table of Contents

- [Backstory](#backstory)
- [The ~~programming~~ asking](#the-programming-asking)

## Backstory

While writing and the [previous post](link-to-previous-post) I ran into an "issue" that post file names had spaces in them and special characters like `:`, I could rename them manually but why not use script to do this automatically?

## The ~~programming~~ asking

After a quick web search I understood that this will be hard to do (a lot of `sed` and bash tricks, sounds like data loss), so I asked ChatGPT to write the script. After countless tweak requests and `git restore ./` *we* have finally got it, script that works for English and Russian, it makes everything lowercase, replaces spaces with dashes and removes spacial characters like said `:`, I don't know how it works but here is it:

```shell
#!/usr/bin/env bash

# Made by ChatGPT and countless tweak requests
# Script for renaming files to be web-friendly (kebab-case without special characters)

# Function to rename files
rename_files() {
  local dir="$1"
  cd "$dir" || exit 1

  for file in *; do
    if [ -f "$file" ]; then
      # Get the file extension (if any)
      ext=""
      if [[ $file == *.* ]]; then
        ext=".${file##*.}"
        new_name="${file%$ext}"
      else
        new_name="$file"
      fi

      # Normalize non-ASCII characters to their closest ASCII representation and remove consecutive dashes
      new_name=$(echo "$new_name" | sed 's/[^[:alnum:]\.]/-/g; s/[[:space:]_]\+/-/g; s/-\+/-/g')

      # Remove leading and trailing dashes
      new_name="${new_name#-}"
      new_name="${new_name%-}"

      # Convert the filename to lowercase
      new_name="${new_name,,}"

      # Add back the file extension (if any)
      new_name="$new_name$ext"

      # Check if the new name is different from the old one
      if [ "$file" != "$new_name" ]; then
        mv -i "$file" "$new_name"
        echo "Renamed: $file -> $new_name"
      fi
    fi
  done
}

# Check if a directory argument is provided, otherwise use the current directory
if [ $# -eq 1 ]; then
  target_directory="$1"
else
  target_directory="."
fi

# Call the function with the specified directory
rename_files "$target_directory"
```

The script can take directory name as an argument (e.g `posts`) and rename everything in it, that's all it does :)

Anyway, I have wrote this to let you know why the script may break your files and appreciate how useful GPT can be sometimes.

[Go Home](/blog/){: .inline-button}