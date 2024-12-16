#### How to Download All Versions of the PTP Website

Downloading all versions of the PTP website is straightforward. Follow the steps below to save the website for offline viewing.

#### 1. Install `wget`

- **Windows Users:** Download and install `wget` from [eternallybored.org](https://eternallybored.org/misc/wget/).
- **Mac OS X Users:** Install `wget` using Homebrew:

```
brew install wget
```

#### 2. Create a Directory for the Website

Open your terminal or command prompt and navigate to the directory where you want to save the website:

```
cd /path/to/your/directory
```

#### 3. Generate a List of Website Snapshots

You'll need a list of the website's snapshots to download. Use `waybackpack` to generate this list.

- **Install `waybackpack` (Python):**

```
pip install waybackpack
```

- **Create text files with Snapshot URLs:**

```
waybackpack http://www.brown.edu/Departments/Political_Theory_Project --list > snapshots-department.txt
waybackpack http://www.brown.edu/academics/Political_Theory_Project --list > snapshots-academics.txt
waybackpack http://ppe.brown.edu --list > snapshots-ppe.txt
```

- **Optional:** Edit the text files to include only the snapshots you wish to download.

#### 4. Download the Website Using `wget`

Execute the following command to download the website:

```
wget -e robots=off -m -k -np -p -E -U Mozilla -i snapshots.txt
```

Replace `snapshots.txt` with the names of other text files to download the other websites.

**Explanation of the command options:**

- `-e robots=off`: Bypasses the `robots.txt` restrictions.
- `-m`: Mirrors the entire website.
- `-k`: Converts links for offline browsing.
- `-np`: Doesn't ascend to parent directories.
- `-p`: Downloads all necessary files (images, CSS, etc.) for each page.
- `-E`: Adds `.html` extensions to files as needed.
- `-U Mozilla`: Sets the user agent to Mozilla to prevent potential blocking.
- `-i snapshots.txt`: Reads URLs from the `snapshots.txt` file.

#### 5. Access the Downloaded Website

After the download completes:

- Navigate to the directory where the website was saved.
- Click on the `web.archive.org` folder, then on `web`.
- Open the main HTML file (e.g., `index.html`) in your web browser to view the website offline.
- You can safely ignore directories ending with `js_`, `im_`, or `cs_`, and focus only on folders with date-based names (e.g., `20041011084744`)

**Note:** Downloading all versions of the website may take time and consume significant storage space, depending on the site's size and the number of snapshots.

#### Troubleshooting Tips

- **Permissions Error:** If you encounter permission issues, ensure you have the necessary rights to write to the chosen directory.
- **Incomplete Downloads:** If the download is interrupted, you can rerun the `wget` command to resume.
- **Secure Download Warnings:** If you receive security warnings, ensure that you're downloading from trusted sources and that your commands are correct.