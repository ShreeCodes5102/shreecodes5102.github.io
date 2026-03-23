
# Shreesha Bhat Portfolio

This is a React-based portfolio website for Shreesha Bhat, a backend developer. All content is managed in `src/content.js` for easy updates.

## Local Development

1. Install dependencies:
	```bash
	npm install
	```
2. Start the development server:
	```bash
	npm run dev
	```

## Deployment (GitHub Pages)

1. Install the GitHub Pages package:
	```bash
	npm install --save-dev gh-pages
	```
2. Add the following to your `package.json`:
	```json
	"homepage": "https://<your-github-username>.github.io/<repo-name>"
	```
3. Add deploy scripts to `package.json`:
	```json
	"scripts": {
	  "predeploy": "npm run build",
	  "deploy": "gh-pages -d dist"
	}
	```
4. Build and deploy:
	```bash
	npm run deploy
	```

Replace `<your-github-username>` and `<repo-name>` with your actual GitHub username and repository name.

---

All portfolio data is in `src/content.js`. Update this file to change your info.
