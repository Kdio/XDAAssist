// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The onClicked callback function.
function onClickHandler(info, tab) {
    if (info.menuItemId == "searchXDA") {
        chrome.tabs.create({windowId: window.id, url: "https://www.google.com.br/search?q=site://forum.xda-developers.com%20" + info.selectionText});
    }
    if (info.menuItemId == "XDAssistMODMove") {

    }
};

// Add the Listener Function handler
chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
    window.alert('fuck');
    // Create the menu Structure.
    chrome.contextMenus.create({"title": "Search XDA for...", "contexts": ["selection"], "id": "searchXDA"});

    // Create the Context menu tree
    chrome.contextMenus.create({"title": "XDA Assist", "id": "XDAssistParent"});
        chrome.contextMenus.create({"title": "MOD", "parentId": "XDAssistParent", "id": "XDAssistMOD"});
            chrome.contextMenus.create({"title": "Move Thread", "parentId": "XDAssistMOD", "id": "XDAssistMODMove"});
            chrome.contextMenus.create({"title": "Senior Thread", "parentId": "XDAssistMOD", "id": "XDAssistMODSenior"});
});

