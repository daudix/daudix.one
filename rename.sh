#!/usr/bin/env bash

# Check if a directory argument is provided
if [[ -n "$1" ]]; then
    # Use the specified directory
    target_directory="$1"
else
    # Use the current directory if no argument is provided
    target_directory="."
fi

# Function to rename blog files
rename_blog_files() {
    # Loop through each file in the specified directory
    for file in "$target_directory"/*; do
        # Check if the file is a regular file (to avoid directories)
        if [[ -f "$file" ]]; then
            # Get the filename without the directory path
            filename=$(basename "$file")
            
            # Separate filename and extension
            filename_no_ext="${filename%.*}"
            extension="${filename##*.}"
            
            # Convert the filename to lowercase
            new_filename=$(echo "$filename_no_ext" | tr '[:upper:]' '[:lower:]')
            # Replace spaces with hyphens
            new_filename=${new_filename// /-}
            # Remove all non-alphabet characters and hyphens
            new_filename=$(echo "$new_filename" | tr -cd 'a-z0-9-')
            
            # Combine the new filename and the original extension
            new_filename="$new_filename.$extension"
            
            # Check if the new filename is different from the current one
            if [[ "$filename" != "$new_filename" ]]; then
                # Rename the file
                mv "$file" "$target_directory/$new_filename"
                echo "Renamed '$file' to '$target_directory/$new_filename'"
            fi
        fi
    done
}

# Call the function to rename blog files
rename_blog_files
