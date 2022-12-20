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

## Code of conduct

See [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

See [`LICENSE`](./LICENSE).

## Security

See [`SECURITY.md`](./SECURITY.md).
