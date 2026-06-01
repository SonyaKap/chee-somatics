# Chee Somatics — Dev Setup Guide

## Prerequisites

### 1. Install Homebrew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Verify it works:
```bash
brew doctor
brew --version
```

---

### 2. Install nvm (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

If `~/.zshrc` doesn't exist yet, create it first:
```bash
touch ~/.zshrc
```

Add the following to `~/.zshrc`:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Reload your shell:
```bash
source ~/.zshrc
```

Verify nvm is working:
```bash
nvm --version
```

---

### 3. Install Node + npm via nvm
```bash
nvm install --lts
```
This installs both Node and npm. Verify:
```bash
node --version
npm --version
```

---

## Running the Dev Server

Navigate to the project folder and install dependencies:
```bash
npm install
```

Start the dev server:
```bash
npm run dev
```

---

## Deploying to GitHub Pages

### First-time setup

Install the `gh-pages` package:
```bash
npm install gh-pages --save-dev
```

Add a deploy script to `package.json`:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "deploy": "npm run build && gh-pages -d dist"
}
```

### Deploying changes

Every time you want to push changes to the live site:
```bash
npm run deploy
```

This builds the project and pushes to GitHub Pages in one step.

---


## Troubleshooting

**`nvm: command not found`**
Run `source ~/.zshrc` to reload your shell config.

**`npm: command not found`**
Run `source ~/.zshrc`, then check Node is installed with `nvm list`. If not, run `nvm install --lts`.

**Homebrew permission errors**
```bash
sudo chown -R $(whoami) /usr/local/bin /usr/local/lib /usr/local/share /usr/local/etc
```
