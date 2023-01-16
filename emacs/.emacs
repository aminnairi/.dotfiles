;; Require the "require" package to add new packages
(require 'package)

;; Add more sources from where to find new packages when listing them
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/") t)

;; Synchronize the package from the above sources
(package-initialize)

;; Theme
(load-theme 'spacemacs-light t)

;; Disallow auto-save files
(setq auto-save-default nil)

;; Disallow creating backup files
(setq make-backup-files nil)

;; Font size adjustment
(add-to-list 'default-frame-alist '(font . "JetBrainsMono Nerd Font-12" ))
(set-face-attribute 'default t :font "JetBrainsMono Nerd Font-12" )

;; Automatically reload the file if some external program update the
;; file currently opened in Emacs, and prompt before replacing the
;; content if there are any unsaved change in the targetted buffer
(global-auto-revert-mode 1)

;; Automatically revert the Dired buffer when a file or a folder that
;; Dired is currently on changes on the disk, making its content
;; refreshed automatically
(setq global-auto-revert-non-file-buffers t)

;; Always create destination directories when copying files and folders
(setq dired-create-destination-dirs 'always)

;; Always kill the previous buffer when creating a new buffer
(setq dired-kill-when-opening-new-dired-buffer t)

;; Package for handling web files (html, css, js, php, ...)
(require 'web-mode)

;; List of file extension to automatically load the Web Mode from
(add-to-list 'auto-mode-alist '("\\.html\\'" . web-mode))
(add-to-list 'auto-mode-alist '("\\.css\\'" . web-mode))
(add-to-list 'auto-mode-alist '("\\.php\\'" . web-mode))
(add-to-list 'auto-mode-alist '("\\.mjs\\'" . web-mode))

;; Added customization for the Web Mode hook
(defun my-web-mode-hook ()
  "Hooks for the web mode."
  
  ;; Indentation for HTML files
  (web-mode-markup-indent-offset 2)
  
  ;; Indentation for CSS files
  (web-mode-css-indent-offset 2)

  ;; Indentation for PHP, JavaScript & Templating engine files
  (web-mode-code-indent-offset 4))

;; Add the customize hook when entering Web Mode
(add-hook 'web-mode-hook  'my-web-mode-hook)

;; Add line numbers to files opened
(global-display-line-numbers-mode)

;; Disable the Menu bar (options at the top of the graphical client of Emacs)
(menu-bar-mode -1)

;; Disable the toolbar (icons at the top of the graphical client of Emasc)
(tool-bar-mode -1)

;; Disable the scroll bar
(scroll-bar-mode -1)

;; Added by Emacs
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(custom-safe-themes
   '("fa2b58bb98b62c3b8cf3b6f02f058ef7827a8e497125de0254f56e373abee088" "05626f77b0c8c197c7e4a31d9783c4ec6e351d9624aa28bc15e7f6d6a6ebd926" default))
 '(package-selected-packages '(typescript-mode magit spacemacs-theme web-mode elm-mode)))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )

(message "Configuration loaded")
