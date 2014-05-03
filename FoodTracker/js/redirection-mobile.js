




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>JS-Redirection-Mobile-Site/dist/redirection-mobile.js at master · sebarmeli/JS-Redirection-Mobile-Site</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="sebarmeli/JS-Redirection-Mobile-Site" name="twitter:title" /><meta content="JS-Redirection-Mobile-Site - JS to handle the redirection to the mobile version of your site" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/373101?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/373101?s=400" property="og:image" /><meta content="sebarmeli/JS-Redirection-Mobile-Site" property="og:title" /><meta content="https://github.com/sebarmeli/JS-Redirection-Mobile-Site" property="og:url" /><meta content="JS-Redirection-Mobile-Site - JS to handle the redirection to the mobile version of your site" property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="82409992:2483:1A2750D:53614C59" name="octolytics-dimension-request_id" /><meta content="6464214" name="octolytics-actor-id" /><meta content="cmason03" name="octolytics-actor-login" /><meta content="f1572ba923753be7bb8e23da7dd321a39aa0763b8fbef0090c301cc1b23b56c1" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="oB80hIdjtDLjhnRvDGnsYWeN7Uz0vUk5w2cZ+t76lHlKL2fcx4TwL10xtd+SEZ2t+tbskAGf4Fu2GzK1wDz2Fw==" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-caf07fb64d06815e83568342e3f41b3ddf008330.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-cd7c6776c258add1431802d56ccff891f48965fa.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-e2529f330405437c76612642f8170cd664cfa501.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-e9072cf502fa6a65e8e923d7e78bccab58dd6678.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="a3c56e9e244a78b49087ef3c460216d2">

        <link data-pjax-transient rel='permalink' href='/sebarmeli/JS-Redirection-Mobile-Site/blob/b6e4ca19d105dfbd0b68f6b046825cc17223fc39/dist/redirection-mobile.js'>

  <meta name="description" content="JS-Redirection-Mobile-Site - JS to handle the redirection to the mobile version of your site" />

  <meta content="373101" name="octolytics-dimension-user_id" /><meta content="sebarmeli" name="octolytics-dimension-user_login" /><meta content="1033765" name="octolytics-dimension-repository_id" /><meta content="sebarmeli/JS-Redirection-Mobile-Site" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1033765" name="octolytics-dimension-repository_network_root_id" /><meta content="sebarmeli/JS-Redirection-Mobile-Site" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/sebarmeli/JS-Redirection-Mobile-Site/commits/master.atom" rel="alternate" title="Recent Commits to JS-Redirection-Mobile-Site:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="cmason03"
      data-repo="sebarmeli/JS-Redirection-Mobile-Site"
      data-branch="master"
      data-sha="2755d7e3c772e493cf1d17498d78f4ce7ce4bc78"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="sebarmeli/JS-Redirection-Mobile-Site" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/cmason03" class="name">
        <img alt="cmason03" class=" js-avatar" data-user="6464214" height="20" src="https://avatars2.githubusercontent.com/u/6464214?s=140" width="20" /> cmason03
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="sebarmeli/JS-Redirection-Mobile-Site">This repository</span>
    </li>
      <li>
        <a href="/sebarmeli/JS-Redirection-Mobile-Site/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="5AaGkus9mZkJh/5/mdSBXPftiyG4OSQr87P6irLBAOGq5s7pCY2u0KL00R9OazgoAYjJEPFgQZ7OSFc1HoDGOA==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1033765" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/sebarmeli/JS-Redirection-Mobile-Site/watchers">
        30
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/sebarmeli/JS-Redirection-Mobile-Site/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar sebarmeli/JS-Redirection-Mobile-Site" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/sebarmeli/JS-Redirection-Mobile-Site/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star sebarmeli/JS-Redirection-Mobile-Site" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/sebarmeli/JS-Redirection-Mobile-Site/stargazers">
        308
      </a>
  </div>

  </li>


        <li>
          <a href="/sebarmeli/JS-Redirection-Mobile-Site/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of sebarmeli/JS-Redirection-Mobile-Site to your account" aria-label="Fork your own copy of sebarmeli/JS-Redirection-Mobile-Site to your account" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/sebarmeli/JS-Redirection-Mobile-Site/network" class="social-count">118</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/sebarmeli" class="url fn" itemprop="url" rel="author"><span itemprop="title">sebarmeli</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/sebarmeli/JS-Redirection-Mobile-Site" class="js-current-repository js-repo-home-link">JS-Redirection-Mobile-Site</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/sebarmeli/JS-Redirection-Mobile-Site" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /sebarmeli/JS-Redirection-Mobile-Site">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/sebarmeli/JS-Redirection-Mobile-Site/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /sebarmeli/JS-Redirection-Mobile-Site/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>3</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/sebarmeli/JS-Redirection-Mobile-Site/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /sebarmeli/JS-Redirection-Mobile-Site/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/sebarmeli/JS-Redirection-Mobile-Site/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /sebarmeli/JS-Redirection-Mobile-Site/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/sebarmeli/JS-Redirection-Mobile-Site/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /sebarmeli/JS-Redirection-Mobile-Site/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/sebarmeli/JS-Redirection-Mobile-Site/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /sebarmeli/JS-Redirection-Mobile-Site/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/sebarmeli/JS-Redirection-Mobile-Site/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /sebarmeli/JS-Redirection-Mobile-Site/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/sebarmeli/JS-Redirection-Mobile-Site.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/sebarmeli/JS-Redirection-Mobile-Site.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:sebarmeli/JS-Redirection-Mobile-Site.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:sebarmeli/JS-Redirection-Mobile-Site.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/sebarmeli/JS-Redirection-Mobile-Site" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/sebarmeli/JS-Redirection-Mobile-Site" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/sebarmeli/JS-Redirection-Mobile-Site" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save sebarmeli/JS-Redirection-Mobile-Site to your computer and use it in GitHub Desktop." aria-label="Save sebarmeli/JS-Redirection-Mobile-Site to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/sebarmeli/JS-Redirection-Mobile-Site/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download sebarmeli/JS-Redirection-Mobile-Site as a zip file"
                   title="Download sebarmeli/JS-Redirection-Mobile-Site as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:962fa57a0d565c53a05665bc3992c2f5 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/sebarmeli/JS-Redirection-Mobile-Site/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/sebarmeli/JS-Redirection-Mobile-Site/blob/master/dist/redirection-mobile.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sebarmeli/JS-Redirection-Mobile-Site" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">JS-Redirection-Mobile-Site</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/sebarmeli/JS-Redirection-Mobile-Site/tree/master/dist" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator"> / </span><strong class="final-path">redirection-mobile.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="dist/redirection-mobile.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Sebastiano Armeli" class="main-avatar js-avatar" data-user="373101" height="24" src="https://avatars1.githubusercontent.com/u/373101?s=140" width="24" />
    <span class="author"><a href="/sebarmeli" rel="author">sebarmeli</a></span>
    <local-time datetime="2013-02-21T23:40:40+11:00" from="now" title-format="%Y-%m-%d %H:%M:%S %z" title="2013-02-21 23:40:40 +1100">February 21, 2013</local-time>
    <div class="commit-title">
        <a href="/sebarmeli/JS-Redirection-Mobile-Site/commit/dc8ac008df6d7fedcca394a62a168ea79a031819" class="message" data-pjax="true" title="Version 1.0.1 with fixes around User-agent">Version 1.0.1 with fixes around User-agent</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="sebarmeli" href="/sebarmeli/JS-Redirection-Mobile-Site/commits/master/dist/redirection-mobile.js?author=sebarmeli"><img alt="Sebastiano Armeli" class=" js-avatar" data-user="373101" height="20" src="https://avatars1.githubusercontent.com/u/373101?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="dcheck" href="/sebarmeli/JS-Redirection-Mobile-Site/commits/master/dist/redirection-mobile.js?author=dcheck"><img alt="Dan Check" class=" js-avatar" data-user="483783" height="20" src="https://avatars2.githubusercontent.com/u/483783?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Sebastiano Armeli" class=" js-avatar" data-user="373101" height="24" src="https://avatars1.githubusercontent.com/u/373101?s=140" width="24" />
            <a href="/sebarmeli">sebarmeli</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dan Check" class=" js-avatar" data-user="483783" height="24" src="https://avatars2.githubusercontent.com/u/483783?s=140" width="24" />
            <a href="/dcheck">dcheck</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>1 lines (1 sloc)</span>
          <span class="meta-divider"></span>
        <span>3.537 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/sebarmeli/JS-Redirection-Mobile-Site?branch=master&amp;filepath=dist%2Fredirection-mobile.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/sebarmeli/JS-Redirection-Mobile-Site/edit/master/dist/redirection-mobile.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/sebarmeli/JS-Redirection-Mobile-Site/raw/master/dist/redirection-mobile.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/sebarmeli/JS-Redirection-Mobile-Site/blame/master/dist/redirection-mobile.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/sebarmeli/JS-Redirection-Mobile-Site/commits/master/dist/redirection-mobile.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/sebarmeli/JS-Redirection-Mobile-Site/delete/master/dist/redirection-mobile.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="nb">window</span><span class="p">.</span><span class="nx">SA</span><span class="o">||</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">SA</span><span class="o">=</span><span class="p">{}),</span><span class="nx">SA</span><span class="p">.</span><span class="nx">redirection_mobile</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">t</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">t</span><span class="o">=</span><span class="k">new</span> <span class="nb">Date</span><span class="p">;</span><span class="k">return</span> <span class="nx">t</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span><span class="o">+</span><span class="nx">e</span><span class="p">),</span><span class="nx">t</span><span class="p">},</span><span class="nx">n</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">e</span><span class="p">)</span><span class="k">return</span><span class="p">;</span><span class="kd">var</span> <span class="nx">t</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">search</span><span class="p">,</span><span class="nx">n</span><span class="o">=</span><span class="nx">t</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;&amp;&quot;</span><span class="p">),</span><span class="nx">r</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nx">n</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(;</span><span class="nx">r</span><span class="o">&lt;</span><span class="nx">i</span><span class="p">;</span><span class="nx">r</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">s</span><span class="o">=</span><span class="nx">n</span><span class="p">[</span><span class="nx">r</span><span class="p">],</span><span class="nx">o</span><span class="o">=</span><span class="nx">s</span><span class="o">&amp;&amp;</span><span class="nx">s</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">s</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;=&quot;</span><span class="p">));</span><span class="k">if</span><span class="p">(</span><span class="nx">o</span><span class="o">===</span><span class="nx">e</span><span class="p">)</span><span class="k">return</span> <span class="nx">s</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;=&quot;</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span><span class="p">,</span><span class="nx">s</span><span class="p">.</span><span class="nx">length</span><span class="p">)}},</span><span class="nx">r</span><span class="o">=</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">i</span><span class="o">=</span><span class="s2">&quot;false&quot;</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="s2">&quot;true&quot;</span><span class="p">,</span><span class="nx">o</span><span class="o">=</span><span class="nx">e</span><span class="o">||</span><span class="p">{},</span><span class="nx">u</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">redirection_param</span><span class="o">||</span><span class="s2">&quot;mobile_redirect&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">mobile_prefix</span><span class="o">||</span><span class="s2">&quot;m&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">mobile_url</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">mobile_scheme</span><span class="o">?</span><span class="nx">o</span><span class="p">.</span><span class="nx">mobile_scheme</span><span class="o">+</span><span class="s2">&quot;:&quot;</span><span class="o">:</span><span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">host</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">n</span><span class="p">(</span><span class="nx">u</span><span class="p">),</span><span class="nx">p</span><span class="o">=</span><span class="nx">f</span><span class="o">||</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot;.&quot;</span><span class="o">+</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^www\./i</span><span class="p">)</span><span class="o">?</span><span class="nx">c</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">4</span><span class="p">)</span><span class="o">:</span><span class="nx">c</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">cookie_hours</span><span class="o">||</span><span class="mi">1</span><span class="p">,</span><span class="nx">v</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">keep_path</span><span class="o">||!</span><span class="mi">1</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">keep_query</span><span class="o">||!</span><span class="mi">1</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">append_referrer</span><span class="o">||!</span><span class="mi">1</span><span class="p">,</span><span class="nx">y</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">append_referrer_key</span><span class="o">||</span><span class="s2">&quot;original_referrer&quot;</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">tablet_host</span><span class="o">||</span><span class="nx">p</span><span class="p">,</span><span class="nx">w</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="nx">E</span><span class="o">=!</span><span class="mi">1</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="sr">/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span><span class="o">||</span><span class="sr">/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">4</span><span class="p">)))</span><span class="nx">w</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">referrer</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">p</span><span class="p">)</span><span class="o">&gt;=</span><span class="mi">0</span><span class="o">||</span><span class="nx">h</span><span class="o">===</span><span class="nx">i</span><span class="p">)</span><span class="nb">window</span><span class="p">.</span><span class="nx">sessionStorage</span><span class="o">?</span><span class="nb">window</span><span class="p">.</span><span class="nx">sessionStorage</span><span class="p">.</span><span class="nx">setItem</span><span class="p">(</span><span class="nx">u</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span><span class="o">:</span><span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span><span class="o">=</span><span class="nx">u</span><span class="o">+</span><span class="s2">&quot;=&quot;</span><span class="o">+</span><span class="nx">i</span><span class="o">+</span><span class="s2">&quot;;expires=&quot;</span><span class="o">+</span><span class="nx">t</span><span class="p">(</span><span class="mi">36</span><span class="nx">e5</span><span class="o">*</span><span class="nx">d</span><span class="p">).</span><span class="nx">toUTCString</span><span class="p">();</span><span class="kd">var</span> <span class="nx">S</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">sessionStorage</span><span class="o">?</span><span class="nb">window</span><span class="p">.</span><span class="nx">sessionStorage</span><span class="p">.</span><span class="nx">getItem</span><span class="p">(</span><span class="nx">u</span><span class="p">)</span><span class="o">===</span><span class="nx">i</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">x</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span><span class="o">?</span><span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">u</span><span class="p">)</span><span class="o">&gt;=</span><span class="mi">0</span><span class="o">:!</span><span class="mi">1</span><span class="p">;</span><span class="o">!</span><span class="nx">r</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/(iPad|SCH-I|xoom|NOOK|silk|kindle|GT-P|touchpad|kindle|sch-t|viewpad|bolt|playbook)/i</span><span class="p">)</span><span class="o">||</span><span class="p">(</span><span class="nx">E</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">tablet_redirection</span><span class="o">!==</span><span class="nx">s</span><span class="o">&amp;&amp;!</span><span class="nx">o</span><span class="p">.</span><span class="nx">tablet_host</span><span class="o">?!</span><span class="mi">1</span><span class="o">:!</span><span class="mi">0</span><span class="p">,</span><span class="nx">w</span><span class="o">=!</span><span class="mi">1</span><span class="p">);</span><span class="k">if</span><span class="p">((</span><span class="nx">E</span><span class="o">||</span><span class="nx">w</span><span class="p">)</span><span class="o">&amp;&amp;!</span><span class="nx">x</span><span class="o">&amp;&amp;!</span><span class="nx">S</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">beforeredirection_callback</span><span class="o">&amp;&amp;!</span><span class="nx">o</span><span class="p">.</span><span class="nx">beforeredirection_callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">))</span><span class="k">return</span><span class="p">;</span><span class="kd">var</span> <span class="nx">T</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="nx">v</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">T</span><span class="o">+=</span><span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">pathname</span><span class="p">),</span><span class="nx">m</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">T</span><span class="o">+=</span><span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">search</span><span class="p">),</span><span class="nx">g</span><span class="o">&amp;&amp;</span><span class="nb">document</span><span class="p">.</span><span class="nx">referrer</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;?&quot;</span><span class="p">)</span><span class="o">===-</span><span class="mi">1</span><span class="o">?</span><span class="nx">T</span><span class="o">+=</span><span class="s2">&quot;?&quot;</span><span class="o">:</span><span class="nx">T</span><span class="o">+=</span><span class="s2">&quot;&amp;&quot;</span><span class="p">,</span><span class="nx">T</span><span class="o">+=</span><span class="nx">y</span><span class="o">+</span><span class="s2">&quot;=&quot;</span><span class="o">+</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">referrer</span><span class="p">)),</span><span class="nx">E</span><span class="o">?</span><span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="o">=</span><span class="nx">l</span><span class="o">+</span><span class="s2">&quot;//&quot;</span><span class="o">+</span><span class="nx">b</span><span class="o">+</span><span class="nx">T</span><span class="o">:</span><span class="nx">w</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="o">=</span><span class="nx">l</span><span class="o">+</span><span class="s2">&quot;//&quot;</span><span class="o">+</span><span class="nx">p</span><span class="o">+</span><span class="nx">T</span><span class="p">)}};</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04920s from github-fe138-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

