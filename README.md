# Daniel Shkembi — Portfolio

This is my personal site. It highlights my projects, experience, and leadership work. The goal is simple: make it easy to see what I build and how I think, without getting in the way.

## Run locally

1. Open the folder in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html` and choose Open with Live Server.
4. The site will open in your browser. Changes to the files will refresh automatically.

## What you can customize

Projects  
Update the Playbook Insights section with any new links or screenshots. SpareTee is marked “coming soon,” which is intentional while the MVP finishes up. The ARR write-up is based on the real pipeline work and can be expanded into a case study later.

Experience and Leadership  
The leadership section explains how I ran weekly meetings, managed a 7-person executive board, and coordinated a 10-person EPICS team. If you want less text, you can collapse details or move deep dives to their own page.

Skills  
Every skill from my resume is listed and grouped. If something becomes a focus area, consider moving it to the top or adding a short note about how it shows up in my projects.

Contact  
By default, the contact form opens an email draft. If I want to collect submissions without a backend, I can swap the form action to a Formspree endpoint.

## File overview

index.html contains all sections for the site.  
site1.css handles the dark theme, grid, timeline, and cards.  
site1.js enables the mobile menu, active section highlighting, and a mailto fallback for the contact form.  
The resume PDF lives at the root. If I rename it, I will also update the link in the Resume section.

## Deploy on GitHub Pages

1. Push the site to a public GitHub repository on the main branch.
2. In the repository, open Settings, then Pages.
3. Choose Deploy from a branch, select main, and set the directory to root.
4. Save the changes. GitHub will publish the site at the Pages URL.

If I add a custom domain, I will add a CNAME file at the root with my domain and create the matching DNS record.

## Notes and tips

Keep links relative so the site works at a subpath on GitHub Pages.  
Spaces in file names work, but simple names are easier to link to.  
If something does not load after publishing, I will hard refresh the page or wait a minute for Pages to finish the build.

## Credits

Designed and built by me. If you have feedback, I’m always open to it.
