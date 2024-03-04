# 🤖 FBTM: Facebook Binary Transparency Machine

*🚧 This tool is in early development. Please file any issues you experience trying to use this tool in the [action repo](https://github.com/brxxn/fbtm-action) rather than making an issue here, as issues here are used exclusively for requests.*

FBTM is a tool for security researchers to analyze Meta's binary transparency archives of JavaScript
sources that are published on Facebook, Instagram, WhatsApp, and Messenger. This repository contains
searches of most of the files used in the web clients of Facebook, Instagram, Messenger, WhatsApp,
and Workplace. It also allows anyone to quickly request a search and compare it to the last version
in the repository through GitHub Actions.

Currently, it searches for:

* Relay (GraphQL) operations, which can yield around 10,000 operations
* `XController` routes, which can yield around 1,600 routes
* `jsRouteBuilder` routes, which can yield around another 1,600 routes

*If you have an idea of something you would like to be searched in future diffs, you can go to the
[action repo](https://github.com/brxxn/fbtm-action) and file an issue/PR there to let your search
be used in new revs.*

It also takes each search result and compares it to the previous search, showing new and removed
results.

Being able to do this in the cloud can help save storage, especially when one product's files alone
can result in directories containing over 65,000 individual files per rev (version).

**⚠️ Important note:** This repository is provided *EXCLUSIVELY* for research purposes. Most of the 
content in this repository is fetched from Meta Platforms, Inc. and is only authorized to
be used for security research purposes under the [Meta Bug Bounty Program](https://fb.com/whitehat)
safe harbor. Using it for other purposes is not recommended, and I do not claim responsibility for
anything you do with this tool.

## Repository overview

* 📁 `diff/` - Contains differences between revs formatted as `[old]-[new]` separated by product
* 📁 `searches/` - Contains the result of every search performed
* 📄 `.current-rev` - The last rev processed by the bot

Note that there are still some references to `current/`, which contained most of the JS source for
the current revision. However, this has been deprecated because it was causing many issues with
runners pulling the resource. However, all of these files are obtainable by downloading the 
source directly from the Binary Transparency archive yourself!

## Frequently asked questions

- **Does this violate Meta's terms of service?** As long as you use this exclusively for security research
purposes, it should not violate Meta's terms of service. Meta openly publishes these archives using their
[Code Verify Chrome Extension](https://chromewebstore.google.com/detail/code-verify/llohflklppcaghdpehpbklhlfebooeog)'s
"Download source code" function. This does not use any internal code or code not available to the public. 
- **How do I get a new rev searched and compared?** Simply [file an issue](https://github.com/brxxn/fbtm/issues/new/choose)
and wait for an approved user to use `/approve`. To get the latest rev, open Facebook and use the following in your
JS console: `require('SiteData').client_revision`
- **How do I get the full source for a revision?** You will need to find the rev of the build you are looking for
and then visit the following URL: `https://www.facebook.com/btarchive/{rev}/{product}`. Note that valid products
include `facebook`, `instagram`, `messenger`, and `whatsapp`. This will download a large zip file containing
every file accessible via web/desktop.
- **How do I get access to `/approve`?** Be a semi-active user and submit a few valid rev requests, and then 
submit a request to become an approved user.
- **How do I become a maintainer?** Most users of this tool should not need maintainer access, but if you do
need it, you can submit the specialized form in the Issues tab.
- **I'm a Meta employee, can I get approved/maintainer permissions?** Yes. As the majority of this code belongs
to Meta, I will provide Meta with access to do whatever they want in this repository. Please file an issue
with proof you are a Meta employee (provide a email, unixname, intern user ID, or something that can prove
you work at Meta) and I will verify it and provide you access.
- **Why do my requests have to be approved?** Good question. The main reason I require requests to be approved
is because GitHub Actions are limited in the total number of minutes you can use per month. If I allow everyone
to use the tool whenever they want, it could easily run out, making it harder for me and others to use the tool,
so I have implemented an approval requirement to avoid wasting actions minutes and spamming the repository.
- **How do I improve this tool?** For the most part, improvements can be made through the 
[action repo](https://github.com/brxxn/fbtm-action) by either creating an issue or pull request. GitHub actions
controls most of the content on this repository.
- **Where do I report a security issue I find using this tool?** Report it directly to the
[Meta Bug Bounty Program](https://facebook.com/whitehat/report/)!

Have another question? Make a post in the Discussions **(not issues)** tab!
