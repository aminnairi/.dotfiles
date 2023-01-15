;; Require the "require" package to add new packages
(require 'package)

;; Add more sources from where to find new packages when listing them
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/") t)

;; Synchronize the package from the above sources
(package-initialize)

;; Theme
(load-theme 'spacemacs-light t)

;; Font size adjustment
(set-face-attribute 'default nil :height 100 :family "JetBrainsMono Nerd Font")

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
 '(package-selected-packages '(magit spacemacs-theme web-mode elm-mode)))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )
