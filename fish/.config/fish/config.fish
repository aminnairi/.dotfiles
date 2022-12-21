if status is-interactive
  # Enable vi-mode
  fish_vi_key_bindings

  # Set the keyboard rate
  xset r rate 150 30

  # Set the editor to use vim
  set -xg EDITOR vim

  # Install OMF if it is not already
  if test ! -d ~/.local/share/omf
    curl https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install | fish
  end

  # Alias for the cat command
  alias cat="bat"

  # Alias for the ls command
  alias ls="exa"
end
