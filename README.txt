Description:
============
This module displays current world disasters as earthquakes, floods and 
volcanoes.

It gets all information from different sites by rss feeds. There is no one feed 
for every disaster. Each kind of disaster has separate feed. 

This module page can be reached by menu or 
Url www.yoursite/google_disaster_location. On this page you can find google map 
with different icons which means disasters. By clicking on them a little 
description appears.   

Also this module has block, which you can enable on blocks page. 

You can configure map on the page and map on block to your own needs. 

All data about disasters you can filter by countries. For USA there is also 
filter by state is available.

Requirements:
=============
Drupal 6.x


Installation:
=============

Download 
module archive from drupal.org . Locate it in 
youesitelocation/sites/all/modules/ directory. Untar it in modules directory. 
On you site modules page enable it. 

Go to page yoursite/google_disaster_location/edit and enable which disaster you 
want to display and save. Then configure this disaster to your needs in 
collapsed fieldset and  press save.


Settings:
=========
A number of settings are available at admin/settings/biblio.  They control how 
the author names are displayed, whether export links are added to pages and the
number of entries per page to display.

The admin/settings/biblio/types page allows the the site administrator to set
the default field titles and set which fields are common to all publication 
types.  When a new publication type is added, it will contain all the common 
fields and any that are specifically activated (custom is checked).  This also
allows the admin to over ride any of the default settings for any given type.

Access Control:
===============
Two kind of permissions you can give to user. 
browse google_disaster_location – gives only browsing permission
administer google_disaster_location – gives also edit permissions 

Filtering Search Results:
=========================
If you wish filter disaster by countries you can go 
yoursite/google_disaster_location/edit. In desired fieldset select countries 
for which you want to display information and save.