# .dotfiles

My personnal dotfiles

## Requirements

- [Archlinux](https://archlinux.org/)
- [Git](https://git-scm.com/)
- [GNU/Stow](https://www.gnu.org/software/stow/)

## Disclaimer

This has been tested under Archlinux with Gnome. This may not work properly on other distributions and/or desktop environments.

## Setup

```bash
# Install sudo
pacman -Syyu --noconfirm --needed sudo fakeroot which binutils gvim git make gcc xorg-xset

# Setup sudo for the %sudo group
EDITOR=vim visudo

# Add the sudo group
sudo groupadd --force sudo

# Add a new user
useradd -m user

# Add a password for this new user
passwd user

# Add the user to the sudoers
sudo gpasswd --add $USER sudo

# Substitute to the created user
su user

# Change the current directory
cd ~
```

## Installation 

```bash
git clone https://github.com/aminnairi/.dotfiles ~/.dotfiles \
  && cd ~/.dotfiles \
  && sh bootstrap.sh
```

## Code of conduct

See [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

See [`LICENSE`](./LICENSE).

## Security

See [`SECURITY.md`](./SECURITY.md).
