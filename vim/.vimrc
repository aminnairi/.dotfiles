" Checking if NVIM or VIM is used
let data_dir = has('nvim') ? stdpath('data') . '/site' : '~/.vim'

" Automatic installation of Vim Plug
if empty(glob(data_dir . '/autoload/plug.vim'))
  silent execute '!curl -fLo '.data_dir.'/autoload/plug.vim --create-dirs  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

" Plugins to install
call plug#begin()
  Plug 'dense-analysis/ale'
  Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
  Plug 'junegunn/fzf.vim'
  Plug 'arcticicestudio/nord-vim'
  Plug 'vim-airline/vim-airline'
  Plug 'tpope/vim-commentary'
  Plug 'tpope/vim-surround'
  Plug 'dag/vim-fish'
  Plug 'styled-components/vim-styled-components'
  Plug 'elmcast/elm-vim'
  Plug 'leafgarland/typescript-vim'
  Plug 'peitalin/vim-jsx-typescript'
  Plug 'jremmen/vim-ripgrep'
  Plug 'vimwiki/vimwiki'
  Plug 'posva/vim-vue'
  Plug 'tiagofumo/vim-nerdtree-syntax-highlight'
  Plug 'ryanoasis/vim-devicons'
  Plug 'preservim/nerdtree'
  Plug 'elzr/vim-json'
  Plug 'othree/html5.vim'
  Plug 'rust-lang/rust.vim'
call plug#end()

" Vim configuration
filetype plugin indent on
syntax on
set autoindent
set autoread
set background=dark
set backspace=indent,eol,start
set nobreakindent
set bufhidden=hide
set clipboard=unnamedplus
set nocompatible
set confirm
set copyindent
set emoji
set encoding=UTF-8
set noerrorbells
set expandtab
set fileignorecase
set hlsearch
set ignorecase
set incsearch
set infercase
set joinspaces
set laststatus=2
set lazyredraw
set nolinebreak
set nowrap
set nofoldenable
set number
set relativenumber
set nobackup
set shiftround
set shiftwidth=2
set smartcase
set smartindent
set smarttab
set softtabstop=2
set noswapfile
set tabstop=2
set path+=**
set wildignore=*.o,*.obj,./node_modules/*
set wildignorecase

" Remaping the <leader> key to <space>
let mapleader = " "

" ale
let g:ale_fixers = {
      \  '*': ['remove_trailing_lines', 'trim_whitespace'],
      \ 'css': ['stylelint'],
      \ }

let g:ale_linters = {
      \ 'html': ['htmlhint']
      \ }

let g:ale_completion_enabled = 1
let g:ale_sign_error = '❌'
let g:ale_sign_warning = '⚠️'
let g:ale_echo_msg_error_str = '❌'
let g:ale_echo_msg_warning_str = ''
let g:ale_echo_msg_format = '[%linter%] %s'

let g:ale_php_phpcs_standard = "PSR12"

nnoremap <leader>an :ALENext<CR>
nnoremap <leader>ap :ALEPrevious<CR>
nnoremap <leader>ad :ALEDetail<CR>
nnoremap <leader>af :ALEFix<CR>
nnoremap <leader>agtd :ALEGoToDefinition<CR>
nnoremap <leader>agtt :ALEGoToTypeDefinition<CR>
nnoremap <leader>agti :ALEGoToImplementation<CR>
nnoremap <leader>aoi :ALEOrganizeImports<CR>
nnoremap <leader>ah :ALEHover<CR>
nnoremap <leader>ar :ALERename<CR>
nnoremap <leader>ai :ALEImport<CR>
nnoremap <leader>afr :ALEFileRename<CR>

let g:ale_floating_preview = 1
let g:ale_floating_window_border = ['│', '─', '╭', '╮', '╯', '╰', '│', '─']

" fzf.vim
nnoremap <C-p> :FZF<CR>

" nord-vim
if isdirectory(glob(data_dir . '/plugged/nord-vim'))
  colorscheme nord
endif

" nerdtree
nnoremap <leader>n :NERDTreeFocus<CR>
nnoremap <C-n> :NERDTree<CR>
nnoremap <C-t> :NERDTreeToggle<CR>
nnoremap <C-f> :NERDTreeFind<CR>

" vim-airline
let g:airline_powerline_fonts = 1

" vim-jsx-typescript
autocmd BufNewFile,BufRead *.tsx,*.jsx set filetype=typescriptreact
hi tsxTagName guifg=#E06C75
hi tsxComponentName guifg=#E06C75
hi tsxCloseComponentName guifg=#E06C75
hi tsxCloseString guifg=#F99575
hi tsxCloseTag guifg=#F99575
hi tsxCloseTagName guifg=#F99575
hi tsxAttributeBraces guifg=#F99575
hi tsxEqual guifg=#F99575
hi tsxAttrib guifg=#F8BD7F cterm=italic
hi tsxTypeBraces guifg=#999999
hi tsxTypes guifg=#666666
hi ReactState guifg=#C176A7
hi ReactProps guifg=#D19A66
hi ApolloGraphQL guifg=#CB886B
hi Events ctermfg=204 guifg=#56B6C2
hi ReduxKeywords ctermfg=204 guifg=#C678DD
hi ReduxHooksKeywords ctermfg=204 guifg=#C176A7
hi WebBrowser ctermfg=204 guifg=#56B6C2
hi ReactLifeCycleMethods ctermfg=204 guifg=#D19A66

" PHP
autocmd FileType php setlocal tabstop=4 shiftwidth=4 softtabstop=4

" C
autocmd FileType c setlocal tabstop=4 shiftwidth=4 softtabstop=4
