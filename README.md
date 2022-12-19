# .dotfiles

## Requirements

- [Archlinux](https://archlinux.org/)
- [Git](https://git-scm.com/)
- [GNU/Stow](https://www.gnu.org/software/stow/)

## Setup

```bash
# Install sudo
pacman -Syyu --noconfirm --needed sudo

# Setup sudo
visudo

# Add the sudo group
groupadd --force sudo

# Add the user to the sudoers
gpasswd --add amin sudo
```

## Installation 

```bash
# Clone the repository
git clone https://github.com/aminnairi/.dotfiles ~/.dotfiles

# Change directory in the cloned repository
cd ~/.dotfiles

# Install the configuration
sh bootstrap.sh
```
