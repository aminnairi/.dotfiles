#!/bin/sh

# Did you read the documentation?
# https://github.com/aminnairi/.dotfiles#readme

if [ "$(id -u)" -eq 0 ]
then
  echo "This script should not be run as root, please try again with an unprivileged user."
  exit 1
fi

sudo pacman -Syyu --noconfirm --needed \
  stow \
  alacritty \
  fish \
  tmux \
  gvim \
  git \
  ripgrep \
  noto-fonts \
  noto-fonts-emoji \
  fzf \
  htmlhint \
  stylelint \
  typescript \
  typescript-language-server \
  && sudo chsh --shell "$(which fish)" "$USER" \
  && git clone https://aur.archlinux.org/yay.git ~/git/aur.archlinux.org/yay \
  && cd ~/git/aur.archlinux.org/yay \
  && makepkg -sri --noconfirm --needed \
  && rm -rf ~/git/aur.archlinux.org/yay \
  && yay -Syyu --noconfirm --needed \
    nerd-fonts-jetbrains-mono \
    noto-fonts \
    noto-fonts-emoji \
  && cd ~/.dotfiles \
  && stow ./*/ \
  && exec fish
