#!/usr/bin/env bash

# Did you read the documentation?
# https://github.com/aminnairi/.dotfiles#readme

if [[ "$(id -u)" -eq 0 ]]
then
  echo "This script should not be run as root, please try again with an unprivileged user."
  exit 1
fi

if [[ ! -x "$(which pacman 2> /dev/null)" ]]
then
  echo "This script should be run in an Arch distribution."
  exit 2
fi

if [[ ! -x "$(which sudo 2> /dev/null)" ]]
then
  echo "This script should be run in an Arch distribution with sudo installed, please install it before running this script again."
  exit 3
fi

sudo pacman -Syyu --noconfirm --needed \
  nodejs \
  npm \
  stow \
  alacritty \
  fish \
  tmux \
  gvim \
  elm-format \
  git \
  ripgrep \
  noto-fonts \
  noto-fonts-emoji \
  fzf \
  bat \
  exa \
  bpytop \
  helix \
  bash-language-server \
  rust \
  rust-analyzer \
  vscode-json-languageserver \
  yaml-language-server \
  vscode-css-languageserver \
  vscode-html-languageserver \
  elm-language-server \
  nodejs-intelephense \
  marksman \
  emacs \
  && sudo chsh --shell "$(which fish)" "$USER" \
  && git clone https://aur.archlinux.org/yay.git ~/git/aur.archlinux.org/yay \
  && cd ~/git/aur.archlinux.org/yay \
  && makepkg -sri --noconfirm --needed \
  && rm -rf ~/git/aur.archlinux.org/yay \
  && yay -Syyu --noconfirm --needed \
    nerd-fonts-jetbrains-mono \
    noto-fonts \
    noto-fonts-emoji \
    php-codesniffer \
  && cd "$HOME" \
  && sudo npm install --save-exact --save-dev \
    eslint@latest \
    eslint-plugin-react@latest \
    @typescript-eslint/parser@latest \
    @typescript-eslint/eslint-plugin@latest \
    typescript@latest \
    htmlhint@latest \
    stylelint@latest \
    typescript-language-server@latest \
  && cd ~/.dotfiles \
  && stow */ \
  && exec fish
