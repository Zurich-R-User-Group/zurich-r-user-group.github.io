# Zurich R User Group Website

This is the 2025 edition of the website of the Zurich R User Group. 
The Zurich R user group is one of the largest and most established European user groups of the 
R Project for Statistical Computing. 
The website is built with the [Astro Web Framework](https://astro.build) and uses HTML/CSS as well as a bit Typescript/Javascript. 
Our blog uses the open-source scientific and technical publishing system [Quarto](https://quarto.org). 
This allows contributions to the blog from completely within the data science realm, no additional web dev knowledge required. 

## How to Create a New Blog Post

Our blog is the most dynamic part of our website and therefore uses a data science toolstack to foster data science posts including R code and analyses. 
We plan to cover all of our meetup events, group news, some R highlights and possibly an occasional guest post. 
The following guide assumes that you have cloned this repository. 

### Copy the Quarto Blog Post Template

Create a separate branch for the new post.

```
git checkout -b somepost
```

The `src/quarto` folder contains a `template.qmd` file. 
In a first step please copy the `template.qmd` file to `index.qmd`.

```{
cp template.qmd index.qmd
```

### Edit the Index.qmd

Edit the newly created `index.qmd` like you would edit any quarto file.
Please do not alter or remove the `yaml` frontmatter tags themselves to guarantee proper rendering. 
Simply edit their content. 

### Render .qmd File to Markdown

The following command renders your post to Markdown and places it within a folder where Astro finds the file. 
In the process R code gets executed, possibly other files such as images or data outputs are stored alongside a markdown file when `qmd` gets turned into `md`.  

```
quarto render index.qmd --to markdown --output-dir ../content/blog/somepost
```


### Clean Up the Markdown File  

(This will be obsolete in the future when the step is automated.) Remove all quarto/bootstrap specific .css classes from the `index.md` file in `../content/blog/somepost`, i.e., remove all `::: cell` lines and other `triple colon :::`. 
This is necessary because we use a tailwind CSS based layout. 



### Push to GitHub / Trigger GHA

By pushing to GitHub and merging into the main branch, the blog post is automatically rendered from Markddown to HTML. 

```
git add src/content/blog/somepost
git commit -m 'publish somepost'
git push -u origin somepost

```

After pushing, assign a reviewer on GitHib and get your bog post merged. 




## Contribute to the Website

To get started, you can clone this repository and install the dependencies.

### 1. Navigate to your project folder & clone the repository
```bash
git clone git@github.com:Zurich-R-User-Group/zurich-r-user-group.github.io.git
```

### 2. Install Dependencies & start the development server

```bash
cd zurich-r-user-group.github.io # navigate to the project folder
npm install
npm run dev
```

## Project Structure

Inside the folder `zurich-r-user-group.github.io`, you'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

The different webpages, i.e. the main page can be found under `src/pages/`. Currently only the pages `about.astro`, `blog.astro` and `host.astro`. The `index.astro` just combines all components which can be found on the main page. The layout of the pages can be found under `src/layouts/`. The components used in the pages can be found under `src/components/`.


## Update Events

Simply edit `public/events.csv` to update the `past events` table.