#!/bin/sh

# Did you read the documentation?
# https://github.com/aminnairi/.dotfiles#readme

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
sudo chsh --shell $(which fish) $USER

# Cloning yay
git clone https://aur.archlinux.org/yay.git ~/git/aur.archlinux.org/yay

# Changing directory
cd ~/git/aur.archlinux.org/yay

# Installing yay
makepkg -sri --noconfirm --needed

# Removing the downloaded folder
rm -rf ~/git/aur.archlinux.org/yay

# Install the AUR packages
yay -Syyu --noconfirm --needed \
  nerd-fonts-jetbrains-mono \
  noto-fonts \
  noto-fonts-emoji

# Go back to the stow directory
cd ~/.dotfiles

# Stow all configurations
stow */

# Go into the Fish shell
exec fish
