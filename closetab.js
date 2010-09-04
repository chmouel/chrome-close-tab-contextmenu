// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function onContextClick(info, tab) {
    chrome.tabs.remove(tab.id);
}

var iMain = chrome.contextMenus.create( 
    {"title": "Close tab", "onclick": onContextClick}
);
