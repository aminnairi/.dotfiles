if status is-interactive
  # Enable vi-mode
  fish_vi_key_bindings

  # Set the editor to use vim
  set -xg EDITOR vim

  # Install OMF if it is not already
  if test ! -d ~/.local/share/omf
    curl https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install | fish
  end
end
