---
layout: default
title: Quintics
---

# {{ page.title }}


{% include render_table.html
   columns=site.data.quintic_web_columns
   rows=site.data.quintic_web_rows
   sort_by="number"
%}
