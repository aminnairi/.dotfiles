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
set matchpairs="(:),{:},[:],<:>"
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
let g:ale_completion_enabled = 1
let g:ale_sign_error = '❌'
let g:ale_sign_warning = '⚠️'
let g:ale_echo_msg_error_str = '❌'
let g:ale_echo_msg_warning_str = ''
let g:ale_echo_msg_format = '%s'
nnoremap <leader>an :ALENext<CR>
nnoremap <leader>ap :ALEPrevious<CR>
nnoremap <leader>ad :ALEDetail<CR>
nnoremap <leader>agtd :ALEGoToDefinition<CR>
nnoremap <leader>agtt :ALEGoToTypeDefinition<CR>
nnoremap <leader>agti :ALEGoToImplementation<CR>
nnoremap <leader>aoi :ALEOrganizeImports<CR>
nnoremap <leader>ah :ALEHover<CR>
nnoremap <leader>ar :ALERename<CR>
nnoremap <leader>ai :ALEImport<CR>
nnoremap <leader>afr :ALEFileRename<CR>

" fzf.vim
nnoremap <C-p> :FZF<CR>

" nord-vim
colorscheme nord

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
