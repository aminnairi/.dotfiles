#!/bin/sh

# Installing the necessary dependencies
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
  fzf

# changing the current shell to fish
sudo chsh --shell /bin/fish amin

# Cloning yay
git clone https://aur.archlinux.org/yay.git ~/Documents/git/aur.archlinux.org/yay

# Changing directory
cd ~/Documents/git/aur.archlinux.org/yay

# Installing yay
makepkg -sri --noconfirm --needed

# Install the AUR packages
yay -Syyu --noconfirm --needed \
  nerd-fonts-jetbrains-mono \
  noto-fonts \
  noto-fonts-emoji

# Go back to the stow directory
cd ~/.dotfiles

# Stow all configurations
stow */
